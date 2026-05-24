/**
 * PageTwo — Batch Product Adder
 *
 * HOW TO USE:
 * 1. Edit scripts/queue.json with your product list
 * 2. For each product: open it in browser, run bookmarklet, save product.json
 *    Then run: node scripts/batch-add.mjs
 *
 * OR: just edit queue.json manually if you know the details
 * and run: node scripts/batch-add.mjs --from-queue
 */

import fs   from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath  = path.join(__dirname, '..', 'src', 'lib', 'data.ts')
const queuePath = path.join(__dirname, 'queue.json')

const fromQueue = process.argv.includes('--from-queue')

function addToData(p, category, badge) {
  let dataFile = fs.readFileSync(dataPath, 'utf8')
  const id = p.shopid + '_' + p.itemid

  if (dataFile.includes("id: '" + id + "'")) {
    console.log('  ⚠️  Already exists, skipping: ' + p.name.slice(0, 40))
    return false
  }

  const slug      = p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60)
  const shopeeUrl = 'https://shopee.ph/' + slug + '-i.' + p.shopid + '.' + p.itemid
  const e         = (s) => String(s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'")

  const entry = '\n  {\n' +
    "    id: '" + id + "',\n" +
    "    shopName: '" + e(p.shopName) + "',\n" +
    "    name: '" + e(p.name) + "'," +
    (p.description ? "\n    description: '" + e(p.description) + "'," : '') +
    '\n    price: ' + p.price + ',' +
    (p.originalPrice && p.originalPrice > p.price ? '\n    originalPrice: ' + p.originalPrice + ',' : '') +
    (p.rating ? '\n    rating: ' + p.rating + ',' : '') +
    (p.sold ? '\n    sold: ' + p.sold + ',' : '') +
    "\n    shopeeUrl: '" + shopeeUrl + "'," +
    "\n    category: '" + category + "'," +
    (badge ? "\n    badge: '" + badge + "'," : '') +
    (p.imageUrl ? "\n    imageUrl: '" + e(p.imageUrl) + "'," : '') +
    '\n  },'

  dataFile = dataFile.replace(
    /export const products: Product\[\] = \[([\s\S]*?)\]/,
    function(_, inner) { return 'export const products: Product[] = [' + inner + entry + '\n]' }
  )
  fs.writeFileSync(dataPath, dataFile, 'utf8')
  console.log('  ✅  Added: ' + p.name.slice(0, 50))
  return true
}

if (fromQueue) {
  // Batch mode — read from queue.json
  if (!fs.existsSync(queuePath)) {
    console.error('\n❌  scripts/queue.json not found. Create it first.\n')
    process.exit(1)
  }
  const queue = JSON.parse(fs.readFileSync(queuePath, 'utf8'))
  console.log('\n🚀  Processing ' + queue.length + ' products from queue...\n')
  let added = 0
  for (const item of queue) {
    if (!item.price || item.price === 0) {
      console.log('  ⏭️   Skipping (no price): ' + (item.name || item.shopeeUrl || '?'))
      continue
    }
    if (addToData(item, item.category || 'tops', item.badge)) added++
  }
  console.log('\n📝  Done. Added ' + added + ' products.')
  console.log('\n   git add . && git commit -m "batch add products" && git push\n')
} else {
  // Single mode — read product.json
  const jsonPath = path.join(__dirname, 'product.json')
  if (!fs.existsSync(jsonPath)) {
    console.error('\n❌  scripts/product.json not found. Run the bookmarklet first.\n')
    process.exit(1)
  }
  const p        = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
  const category = process.argv[2] || 'tops'
  const badge    = process.argv[3] || ''

  if (!p.price || p.price === 0) {
    console.error('\n❌  Price is 0 in product.json.')
    console.error('    Open it and fill in the price manually, then re-run.\n')
    process.exit(1)
  }

  console.log('\n📦  Adding: ' + p.name)
  addToData(p, category, badge)
  fs.unlinkSync(jsonPath)
  console.log('\n   git add . && git commit -m "add product" && git push\n')
}

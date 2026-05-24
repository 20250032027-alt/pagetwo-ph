/**
 * PageTwo — Single Product Adder
 * Reads from scripts/product.json (downloaded by bookmarklet)
 *
 * Usage: node scripts/add-product.mjs [category] [badge]
 *
 * Categories: tops | bottoms | sets | outerwear | y2k | basics
 * Badges:     gem | sale | new  (optional, leave out if none)
 *
 * For multiple products at once: edit scripts/queue.json
 * then run: node scripts/batch-add.mjs --from-queue
 */

import fs   from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const [,, category = 'tops', badge] = process.argv

const jsonPath = path.join(__dirname, 'product.json')
if (!fs.existsSync(jsonPath)) {
  console.error('\n❌  scripts/product.json not found.')
  console.error('    Run the bookmarklet on a Shopee product page first.\n')
  process.exit(1)
}

let p
try { p = JSON.parse(fs.readFileSync(jsonPath, 'utf8')) }
catch { console.error('\n❌  Invalid product.json\n'); process.exit(1) }

if (!p.price || p.price === 0) {
  console.error('\n❌  Price is 0.')
  console.error('    Open scripts/product.json in Notepad, set the price, save, re-run.\n')
  process.exit(1)
}

const id        = p.shopid + '_' + p.itemid
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

const dataPath = path.join(__dirname, '..', 'src', 'lib', 'data.ts')
let dataFile   = fs.readFileSync(dataPath, 'utf8')

if (dataFile.includes("id: '" + id + "'")) {
  console.warn('\n⚠️   Already exists in data.ts — skipping.\n')
  fs.unlinkSync(jsonPath)
  process.exit(0)
}

dataFile = dataFile.replace(
  /export const products: Product\[\] = \[([\s\S]*?)\]/,
  (_, inner) => 'export const products: Product[] = [' + inner + entry + '\n]'
)

fs.writeFileSync(dataPath, dataFile, 'utf8')
fs.unlinkSync(jsonPath)

console.log('\n✅  Added: ' + p.name.slice(0, 60))
console.log('   Shop: ' + p.shopName)
console.log('   Price: ₱' + p.price + (p.originalPrice ? ' (was ₱' + p.originalPrice + ')' : ''))
console.log('\n   git add . && git commit -m "add product" && git push\n')

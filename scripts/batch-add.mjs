// batch-add.mjs — reads scripts/queue.json and appends to src/lib/data.ts
// Skips nothing. Duplicate prevention happens at the extension level.
// Usage: node scripts/batch-add.mjs --from-queue

import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const QUEUE_PATH   = resolve(__dirname, 'queue.json')
const DATA_PATH    = resolve(__dirname, '../src/lib/data.ts')

const args = process.argv.slice(2)
if (!args.includes('--from-queue')) {
  console.error('Usage: node scripts/batch-add.mjs --from-queue')
  process.exit(1)
}

// Read queue
let queue
try {
  queue = JSON.parse(readFileSync(QUEUE_PATH, 'utf8'))
} catch (e) {
  console.error('Could not read scripts/queue.json:', e.message)
  process.exit(1)
}

if (!queue.length) {
  console.log('Queue is empty, nothing to add.')
  process.exit(0)
}

// Read current data.ts
let dataFile = readFileSync(DATA_PATH, 'utf8')

// Find where the products array closes
const closingMarker = '\n]\n'
const insertAt = dataFile.lastIndexOf(closingMarker)
if (insertAt === -1) {
  console.error('Could not find closing ] in data.ts — is the file malformed?')
  process.exit(1)
}

// Build new entries
function makeEntry(p) {
  const s = JSON.stringify
  let e = '  {\n'
  e += `    id: ${s(p.id || '')},\n`
  e += `    shopName: ${s(p.shopName || '')},\n`
  e += `    name: ${s(p.name || '')},\n`
  e += `    price: ${p.price || 0},\n`
  if (p.originalPrice && p.originalPrice > p.price) e += `    originalPrice: ${p.originalPrice},\n`
  if (p.rating)    e += `    rating: ${p.rating},\n`
  if (p.sold)      e += `    sold: ${p.sold},\n`
  e += `    shopeeUrl: ${s(p.shopeeUrl || '')},\n`
  e += `    category: ${s(p.category || 'tops')},\n`
  if (p.badge)     e += `    badge: ${s(p.badge)} as BadgeType,\n`
  if (p.imageUrl)  e += `    imageUrl: ${s(p.imageUrl)},\n`
  e += '  },'
  return e
}

const newEntries = '\n' + queue.map(makeEntry).join('\n') + '\n'

// Splice into file
const updatedFile = dataFile.slice(0, insertAt) + newEntries + dataFile.slice(insertAt)
writeFileSync(DATA_PATH, updatedFile, 'utf8')

console.log(`✓ Added ${queue.length} products to data.ts`)
console.log(`  Run: git add . && git commit -m "add ${queue.length} products" && git push`)

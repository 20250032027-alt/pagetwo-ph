import type { Product, Shop } from './types'

// ─── ADD YOUR PRODUCTS HERE ───────────────────────────────────────────────────
// Copy the template object and fill in the real Shopee data.
// shopeeUrl: paste the full Shopee product link
// imageUrl: paste a direct image URL from Shopee, or leave undefined for placeholder
// price/originalPrice: numbers only (no ₱ sign)
// badge: 'gem' | 'sale' | 'new'  — pick one or omit
// category: 'tops' | 'bottoms' | 'sets' | 'outerwear' | 'y2k' | 'basics'

export const products: Product[] = [
  // {
  //   id: '1',
  //   shopName: 'Shop Name Here',
  //   name: 'Product name here',
  //   price: 179,
  //   originalPrice: 320,
  //   rating: 4.9,
  //   shopeeUrl: 'https://shopee.ph/...',
  //   category: 'tops',
  //   badge: 'gem',
  //   imageUrl: 'https://...',
  // },

  {
    id: '1634212459_40769415828',
    shopName: 'Unknown Shop',
    name: 'Unisex LIDER CULTURE FIT TEE - Ash Gray/White',
    price: 1693,
    originalPrice: 2581,
    shopeeUrl: 'https://shopee.ph/unisex-lider-culture-fit-tee-ash-gray-white-i.1634212459.40769415828',
    category: 'bottoms',
    badge: 'gem',
    imageUrl: 'https://down-ph.img.susercontent.com/file/vn-11134207-820l4-mil4az81zy1083',
  },
]

// ─── ADD YOUR SHOPS HERE ──────────────────────────────────────────────────────
export const shops: Shop[] = [
  // {
  //   id: '1',
  //   initials: 'SN',
  //   name: 'Shop Name',
  //   description: 'What makes this shop worth visiting. Be specific.',
  //   tags: ['Tag 1', 'Tag 2', 'Tag 3'],
  //   rating: 4.9,
  //   shopeeUrl: 'https://shopee.ph/...',
  // },
]

// ─── SITE STATS (update manually as you grow) ─────────────────────────────────
export const siteStats = {
  finds: '—',
  shops: '—',
  avgPrice: '—',
}

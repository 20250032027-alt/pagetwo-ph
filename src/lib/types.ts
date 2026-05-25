export type Category = 'all' | 'tops' | 'bottoms' | 'outerwear' | 'accessories'
export type BadgeType = 'gem' | 'sale' | 'new'

export interface Product {
  id: string
  shopName: string
  name: string
  description?: string
  price: number
  originalPrice?: number
  rating?: number
  sold?: number
  stock?: number
  shopeeUrl: string
  category: Exclude<Category, 'all'>
  badge?: BadgeType
  imageUrl?: string
}

export interface Shop {
  id: string
  initials: string
  name: string
  description: string
  tags: string[]
  rating?: number
  shopeeUrl: string
}

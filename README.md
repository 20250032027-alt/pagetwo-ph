# PageTwo.ph

Underrated clothing shops on Shopee Philippines that never show up on page one.

## Stack
- Next.js 14 (static export)
- TypeScript
- Tailwind CSS

## Dev
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Adding products
Edit `src/lib/data.ts` — uncomment the template and fill in your Shopee data.

## Adding shops
Same file — `src/lib/data.ts`, shops array below products.

## Deploying
Push to GitHub, connect repo to Vercel. Auto-deploys on every push.

## After deploying
1. Update `metadataBase` in `src/app/layout.tsx` to your real domain
2. Update URLs in `public/sitemap.xml`
3. Submit sitemap to Google Search Console
4. Apply for Google AdSense once content is live

export default function PinterestStrip() {
  return (
    <div className="bg-pinterest px-12 py-3.5 flex items-center justify-between gap-4 flex-wrap max-sm:px-6" role="complementary">
      <p className="text-small font-normal text-white/85">
        We post every find on Pinterest too.{' '}
        <strong className="font-bold text-white">Follow for daily outfit inspo.</strong>
      </p>
      <a
        href="https://pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white text-pinterest text-small font-bold px-5 py-2.5 hover:bg-white/90 transition-opacity duration-200 whitespace-nowrap"
        aria-label="Follow PageTwo.ph on Pinterest"
      >
        Follow on Pinterest
      </a>
    </div>
  )
}

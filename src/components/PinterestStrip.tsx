import { PinterestLogo, ArrowRight } from '@phosphor-icons/react/dist/ssr'

export default function PinterestStrip() {
  return (
    <div className="bg-pinterest px-8 md:px-12 py-3.5 flex items-center justify-between gap-4 flex-wrap">
      <div className="flex items-center gap-3">
        <PinterestLogo size={18} weight="fill" className="text-white/70" />
        <p className="small font-normal text-white/85">
          We post every find on Pinterest too.{' '}
          <strong className="font-semibold text-white">Follow for daily outfit inspo.</strong>
        </p>
      </div>
      <a
        href="https://pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white text-pinterest small font-bold px-5 py-2.5 hover:bg-white/90 transition-opacity duration-200 whitespace-nowrap active:scale-[0.98]"
      >
        Follow <ArrowRight size={14} weight="bold" />
      </a>
    </div>
  )
}

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0908] flex flex-col items-center justify-center px-6 text-center">
      <div
        className="font-syne font-bold leading-none select-none mb-8 text-white/[0.03]"
        style={{ fontSize: 'clamp(6rem,20vw,14rem)' }}
        aria-hidden="true"
      >
        404
      </div>
      <h1
        className="font-syne font-bold text-white mb-4"
        style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', letterSpacing: '-0.025em' }}
      >
        Page not found.
      </h1>
      <p className="text-base font-light text-t-muted mb-10 max-w-xs leading-[1.8]">
        This page doesn&apos;t exist or was moved. The finds are still there though.
      </p>
      <Link
        href="/"
        className="bg-rust text-white text-sm font-semibold tracking-[0.04em] px-8 py-3.5 hover:bg-rust-dim transition-colors duration-200"
      >
        Back to finds
      </Link>
    </div>
  )
}

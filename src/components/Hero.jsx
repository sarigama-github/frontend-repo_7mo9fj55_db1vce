import Spline from '@splinetool/react-spline'

const primary = '#B82124'

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-800 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: primary }} />
              Introducing RedPulse Platform
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Launch your SaaS faster with a modern, clean stack
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Authentication, subscriptions, blog and contact — everything wired up and ready to scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pricing" className="rounded-md px-5 py-3 text-white shadow" style={{ background: primary }}>View Pricing</a>
              <a href="#features" className="rounded-md px-5 py-3 bg-white/90 text-gray-900 shadow">Explore Features</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

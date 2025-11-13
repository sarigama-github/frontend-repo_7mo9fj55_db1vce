const primary = '#B82124'

const features = [
  { title: 'Secure Auth', desc: 'Email-based login with hashed passwords out of the box.' },
  { title: 'Subscription Ready', desc: 'Pricing tiers designed for conversion and upgrade paths.' },
  { title: 'Blazing Fast', desc: 'Optimized UI with modern React and Tailwind.' },
  { title: 'SEO Friendly', desc: 'Clean semantic structure and fast first paint.' },
]

export default function Features(){
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need</h2>
          <p className="text-gray-600 mt-3">All essentials, thoughtfully designed.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-black/5 p-6 bg-white shadow-sm">
              <div className="h-10 w-10 rounded-md mb-4" style={{ background: primary }}></div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

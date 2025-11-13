const primary = '#B82124'

const tiers = [
  { name: 'Starter', price: 'Free', features: ['Up to 3 projects', 'Community support', 'Basic analytics'] },
  { name: 'Pro', price: '$19/mo', features: ['Unlimited projects', 'Priority support', 'Advanced analytics'] },
  { name: 'Business', price: '$49/mo', features: ['Team seats', 'SLA & SSO', 'Audit logs'] },
]

export default function Pricing(){
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple pricing</h2>
          <p className="text-gray-600 mt-3">Start free, scale when you’re ready.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, idx) => (
            <div key={t.name} className={`rounded-2xl p-6 border shadow-sm bg-white ${idx===1 ? 'ring-2' : ''}`} style={idx===1 ? { borderColor: primary, boxShadow: '0 8px 30px rgba(184,33,36,0.15)' } : {}}>
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-lg">{t.name}</h3>
                <span className="text-sm rounded-full px-2 py-1 bg-gray-100">{idx===1 ? 'Most Popular' : ' '}</span>
              </div>
              <div className="mt-4 text-3xl font-extrabold" style={{ color: primary }}>{t.price}</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full" style={{ background: primary }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block w-full text-center rounded-md px-4 py-2 text-white" style={{ background: primary }}>Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

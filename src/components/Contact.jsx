import { useState } from 'react'

const primary = '#B82124'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if(res.ok){
        setStatus({ ok: true, msg: 'Message sent! We will get back to you shortly.' })
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus({ ok: false, msg: data.detail || 'Something went wrong' })
      }
    } catch (e) {
      setStatus({ ok: false, msg: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s talk</h2>
            <p className="text-gray-600 mt-3">Have questions about RedPulse? Send us a message.</p>
            {status && (
              <div className={`mt-4 rounded-md border p-3 text-sm ${status.ok ? 'border-green-200 bg-green-50 text-green-700' : 'border-red-200 bg-red-50 text-red-700'}`}>
                {status.msg}
              </div>
            )}
          </div>
          <form onSubmit={onSubmit} className="bg-white rounded-xl border border-black/5 p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-400 focus:ring-0" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} required type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-400 focus:ring-0" />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea value={form.message} onChange={(e)=>setForm({ ...form, message: e.target.value })} required rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-400 focus:ring-0" />
              </div>
              <button disabled={loading} className="w-full rounded-md px-4 py-2 text-white" style={{ background: primary }}>
                {loading ? 'Sending…' : 'Send message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

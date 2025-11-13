import { useState } from 'react'

const primary = '#B82124'

export default function AuthDialog({ open, onClose }){
  const [mode, setMode] = useState('signin')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const endpoint = mode === 'signin' ? '/api/auth/login' : '/api/auth/signup'
      const payload = mode === 'signin' ? { email: form.email, password: form.password } : { name: form.name, email: form.email, password: form.password }
      const res = await fetch(`${base}${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      if(res.ok){
        setStatus({ ok: true, msg: mode==='signin' ? 'Welcome back!' : 'Account created!' })
        if(mode==='signin') onClose()
      } else {
        setStatus({ ok: false, msg: data.detail || 'Something went wrong' })
      }
    } catch (e) {
      setStatus({ ok: false, msg: e.message })
    } finally {
      setLoading(false)
    }
  }

  if(!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{mode==='signin' ? 'Sign in' : 'Create account'}</h3>
          <button onClick={onClose} className="text-gray-500">×</button>
        </div>

        {status && (
          <div className={`mt-3 rounded-md border p-3 text-sm ${status.ok ? 'border-green-200 bg-green-50 text-green-700' : 'border-red-200 bg-red-50 text-red-700'}`}>
            {status.msg}
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-4 space-y-4">
          {mode==='signup' && (
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-400 focus:ring-0" />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} required type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-400 focus:ring-0" />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input value={form.password} onChange={(e)=>setForm({ ...form, password: e.target.value })} required type="password" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-400 focus:ring-0" />
          </div>
          <button disabled={loading} className="w-full rounded-md px-4 py-2 text-white" style={{ background: primary }}>
            {loading ? 'Please wait…' : (mode==='signin' ? 'Sign in' : 'Create account')}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          {mode==='signin' ? (
            <>Don't have an account? <button onClick={()=>setMode('signup')} className="font-medium" style={{ color: primary }}>Sign up</button></>
          ) : (
            <>Already have an account? <button onClick={()=>setMode('signin')} className="font-medium" style={{ color: primary }}>Sign in</button></>
          )}
        </p>
      </div>
    </div>
  )
}

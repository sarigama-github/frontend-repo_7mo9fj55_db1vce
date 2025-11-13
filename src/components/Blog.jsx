import { useEffect, useState } from 'react'

const primary = '#B82124'

export default function Blog(){
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/blogs`)
        if(res.ok){
          const data = await res.json()
          setPosts(data)
        }
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">From the blog</h2>
            <p className="text-gray-600 mt-2">Insights, updates and best practices.</p>
          </div>
          <span className="text-sm text-gray-500">{loading ? 'Loading…' : `${posts.length} posts`}</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-xl border border-black/5 p-6 bg-white shadow-sm">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: primary }} />
                {p.author}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="text-gray-600 mt-2 text-sm line-clamp-3">{p.excerpt}</p>
              <div className="mt-4">
                <a href="#" className="text-sm font-medium" style={{ color: primary }}>Read more →</a>
              </div>
            </article>
          ))}
          {posts.length===0 && !loading && (
            <div className="md:col-span-3 text-center text-gray-500">No posts yet. Add some via the database.</div>
          )}
        </div>
      </div>
    </section>
  )
}

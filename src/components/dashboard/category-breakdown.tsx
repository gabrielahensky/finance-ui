type Cat = { id:string; name:string; color?:string; total?:number }

export function CategoryBreakdown({ categories } : { categories: Cat[] }) {
  const total = categories.reduce((s,c)=>s + (c.total||0), 0) || 1
  return (
    <div className="rounded-2xl p-4 bg-white/6 backdrop-blur-md border border-white/8">
      <h4 className="text-white font-semibold mb-3">By Category</h4>

      <div className="space-y-3">
        {categories.map(c => {
          const pct = Math.round(((c.total||0)/total)*100)
          return (
            <div key={c.id} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div style={{background:c.color}} className="w-3 h-3 rounded-sm" />
                <div className="text-sm text-white">{c.name}</div>
              </div>

              <div className="flex items-center gap-3 w-36">
                <div className="bg-white/10 rounded-full h-2 w-full overflow-hidden">
                  <div className="h-full bg-primary" style={{width: `${pct}%`}} />
                </div>
                <div className="text-sm text-white/80">{pct}%</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

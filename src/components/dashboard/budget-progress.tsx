type Budget = { categoryId:string; limit:number; used:number; name?:string }

export function BudgetProgress({ budgets } : { budgets: Budget[] }) {
  return (
    <div className="rounded-2xl p-4 bg-white/6 backdrop-blur-md border border-white/8">
      <h4 className="text-white font-semibold mb-3">Budgets</h4>
      <div className="space-y-3">
        {budgets.map(b => {
          const pct = Math.min(100, Math.round((b.used / b.limit) * 100))
          return (
            <div key={b.categoryId}>
              <div className="flex justify-between text-sm mb-1">
                <div className="text-white">{b.name ?? b.categoryId}</div>
                <div className="text-white/80">{b.used}/{b.limit}</div>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full">
                <div className="h-full bg-amber-400" style={{width: `${pct}%`}} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

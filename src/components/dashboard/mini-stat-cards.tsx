export function MiniStatCards({ income, expense, balance } : { income:number; expense:number; balance:number }) {
  const fmt = (v:number) => new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(v)
  const items = [
    { id: "i1", label: "Income", value: fmt(income), sub: "This month", accent: "text-emerald-400" },
    { id: "i2", label: "Expenses", value: fmt(expense), sub: "This month", accent: "text-amber-400" },
    { id: "i3", label: "Balance", value: fmt(balance), sub: "Available", accent: "text-sky-300" },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {items.map(it => (
        <div key={it.id} className="rounded-2xl p-4 bg-white/6 backdrop-blur-md border border-white/8">
          <div className="text-sm text-white/80">{it.label}</div>
          <div className={`mt-2 text-lg font-semibold ${it.accent}`}>{it.value}</div>
          <div className="text-xs text-white/60 mt-1">{it.sub}</div>
        </div>
      ))}
    </div>
  )
}

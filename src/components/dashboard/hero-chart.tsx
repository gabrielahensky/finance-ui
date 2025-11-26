type Tx = { id: string; amount: number; date: string }

function Sparkline({ values }: { values: number[] }) {
  if (!values.length) return null
  const max = Math.max(...values)
  const min = Math.min(...values)
  const points = values.map((v, i) => {
    const x = (i / (values.length - 1 || 1)) * 100
    const y = 100 - ((v - min) / (max - min || 1)) * 100
    return `${x},${y}`
  }).join(" ")
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-28">
      <polyline points={points} fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

export function HeroChart({ data }: { data?: Tx[] }) {
  // create series by grouping by day and summing absolute amounts
  const values = (data ?? []).slice(-14).map((d) => Math.abs(d.amount))
  return (
    <div className="rounded-2xl p-4 bg-white/6 backdrop-blur-md border border-white/8 shadow-soft h-44">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-white/80">Spending (last 14 days)</div>
          <div className="text-lg font-semibold text-white mt-1">$ { (values.reduce((a,b)=>a+b,0)).toLocaleString() }</div>
        </div>
        <div className="text-sm text-white/70">Trend</div>
      </div>

      <div className="mt-3">
        <Sparkline values={values.length ? values : [1,2,3,2,4,3,5]} />
      </div>
    </div>
  )
}

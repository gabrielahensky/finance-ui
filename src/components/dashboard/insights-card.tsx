export function InsightsCard({ insights } : { insights?: string[] }) {
  const items = insights && insights.length ? insights : ["Your dining spend is 12% lower vs last month."]
  return (
    <div className="rounded-2xl p-4 bg-gradient-to-r from-white/6 to-white/3 backdrop-blur-md border border-white/8">
      <h4 className="text-white font-semibold mb-2">Insights</h4>
      <ul className="list-none space-y-2 text-sm text-white/90">
        {items.map((it, idx)=> <li key={idx} className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
          <div>{it}</div>
        </li>)}
      </ul>
    </div>
  )
}

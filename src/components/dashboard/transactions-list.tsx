type Tx = { id:string; type: "income"|"expense"; amount:number; categoryId?:string | null; note?:string; date:string }

export function TransactionsList({ transactions } : { transactions: Tx[] }) {
  const currency = (v:number) => new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(v)
  return (
    <div className="rounded-2xl p-4 bg-white/6 backdrop-blur-md border border-white/8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold">Recent</h3>
        <div className="text-xs text-white/70">View all</div>
      </div>

      <div className="space-y-3">
        {transactions.map(t => (
          <div key={t.id} className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-white/4 transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center text-sm">
                {t.categoryId ? t.categoryId.split("_").slice(-1)[0][0]?.toUpperCase() : "$"}
              </div>
              <div>
                <div className="text-sm text-white font-medium">{t.note ?? (t.categoryId ?? "Transaction")}</div>
                <div className="text-xs text-white/70">{t.date}</div>
              </div>
            </div>

            <div className={`font-semibold ${t.type==="income" ? "text-emerald-400" : "text-rose-400"}`}>
              {t.type==="income" ? "+" : "-"}{currency(t.amount)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

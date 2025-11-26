export function BalanceCard({ balance }: { balance: number }) {
  const fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
  return (
    <div className="rounded-2xl p-6 bg-white/8 backdrop-blur-md border border-white/10 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm text-white/80">Current Balance</div>
          <div className="mt-2 text-3xl font-bold text-white">{fmt.format(balance)}</div>
          <div className="mt-1 text-xs text-white/70">Updated 2 hours ago</div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <button className="px-3 py-1 rounded-xl bg-white/12 text-white text-sm">Receive</button>
          <button className="px-3 py-1 rounded-xl bg-primary text-white text-sm">Send</button>
        </div>
      </div>
    </div>
  )
}

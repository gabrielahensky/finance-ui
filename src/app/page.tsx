"use client"

import { useState, useEffect } from "react"
import { supabaseBrowser } from "@/lib/supabase/client"

import { Header } from "@/components/dashboard/header"
import { BalanceCard } from "@/components/dashboard/balance-card"
import { HeroChart } from "@/components/dashboard/hero-chart"
import { MiniStatCards } from "@/components/dashboard/mini-stat-cards"
import { QuickAddBar } from "@/components/dashboard/quick-add-bar"
import { TransactionsList } from "@/components/dashboard/transactions-list"

export default function HomePage() {
  const supabase = supabaseBrowser()

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [transactions, setTransactions] = useState<any[]>([])
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const load = async () => {
      setLoading(true)

      // GET USER
      const {
        data: { user },
      } = await supabase.auth.getUser()

      setUser(user ?? null)

      // GET TRANSACTIONS
      const { data: tx } = await supabase
        .from("transactions")
        .select("*")
        .order("date", { ascending: false })

      if (tx) {
        setTransactions(tx)

        const inc = tx
          .filter((t) => t.type === "income")
          .reduce((a, b) => a + Number(b.amount), 0)

        const exp = tx
          .filter((t) => t.type === "expense")
          .reduce((a, b) => a + Number(b.amount), 0)

        setIncome(inc)
        setExpense(exp)
        setBalance(inc - exp)
      }

      setLoading(false)
    }

    load()
  }, [])

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-white/70">
        Loading…
      </div>
    )
  }

  return (
    <main className="min-h-screen px-4 py-6 max-w-3xl mx-auto space-y-6">
      <Header user={user} />

      <BalanceCard balance={balance} />

      <HeroChart data={transactions} />

      <MiniStatCards
        income={income}
        expense={expense}
        balance={balance}
      />

      <QuickAddBar />

      <TransactionsList transactions={transactions.slice(0, 10)} />
    </main>
  )
}

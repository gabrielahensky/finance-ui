"use client";

import {
  TrendingUp,
  TrendingDown,
  Wallet,
  ArrowRight
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";
import { cn } from "@/lib/utils/cn";

const data = [
  { name: "Jan", income: 3000, expense: 1800 },
  { name: "Feb", income: 3100, expense: 2000 },
  { name: "Mar", income: 2900, expense: 1700 },
  { name: "Apr", income: 3400, expense: 2100 },
];

export default function OverviewPage() {
  return (
    <div className="space-y-14 pb-10">

      {/* TITLE */}
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          Overview
        </h1>

        <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-lg">
          Ringkasan keuangan bulan ini
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SummaryCard
          title="Total Income"
          value="Rp 12.500.000"
          percent="+12%"
          icon={Wallet}
          percentColor="text-green-600"
        />

        <SummaryCard
          title="Total Expense"
          value="Rp 4.320.000"
          percent="+5%"
          icon={TrendingDown}
          percentColor="text-red-600"
        />

        <SummaryCard
          title="Balance"
          value="Rp 8.180.000"
          percent="Stable"
          icon={TrendingUp}
          percentColor="text-blue-500"
        />
      </div>

      {/* CHART */}
      <GlassCard className="p-8">
        <h3 className="text-neutral-900 dark:text-white font-semibold text-xl mb-6">
          Income vs Expense
        </h3>

        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                stroke="currentColor"
                className="text-neutral-600 dark:text-neutral-300"
              />
              <YAxis
                stroke="currentColor"
                className="text-neutral-600 dark:text-neutral-300"
              />
              <Bar
                dataKey="income"
                fill="#4ade80"
                radius={10}
              />
              <Bar
                dataKey="expense"
                fill="#f87171"
                radius={10}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>

      {/* RECENT ACTIVITY */}
      <GlassCard className="p-8">
        <h3 className="text-neutral-900 dark:text-white font-semibold text-xl mb-6">
          Recent Activity
        </h3>

        <div className="divide-y divide-white/40 dark:divide-white/10">
          <ActivityItem
            title="Makan siang"
            subtitle="Food · 2 hours ago"
            amount="-Rp 45.000"
            color="text-red-600"
          />

          <ActivityItem
            title="Gaji Bulanan"
            subtitle="Income · 1 day ago"
            amount="+Rp 5.200.000"
            color="text-green-600"
          />
        </div>

        <button className="mt-6 flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium">
          View all <ArrowRight className="w-4 h-4" />
        </button>
      </GlassCard>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* GLASS CARD – Dark/Light adaptive premium glassmorphism */
/* ---------------------------------------------------------------------- */

function GlassCard({ className, children }) {
  return (
    <div
      className={cn(
        // LIGHT
        "rounded-3xl bg-white/30 backdrop-blur-2xl border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)]",

        // DARK
        "dark:bg-black/20 dark:border-white/10 dark:shadow-[0_8px_40px_rgba(0,0,0,0.45)]",

        // HOVER ANIMATION
        "transition-all duration-300 hover:shadow-[0_12px_45px_rgba(0,0,0,0.14)] dark:hover:shadow-[0_12px_50px_rgba(0,0,0,0.6)] hover:bg-white/40 dark:hover:bg-white/5",

        className
      )}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* SUMMARY CARD */
/* ---------------------------------------------------------------------- */

function SummaryCard({ title, value, percent, percentColor, icon: Icon }) {
  return (
    <GlassCard className="p-8 hover:scale-[1.02] transition-all duration-300">
      <div className="flex justify-between items-start">
        <Icon className="w-9 h-9 text-neutral-900 dark:text-white opacity-80" />

        <span className={cn("text-sm font-medium", percentColor)}>
          {percent}
        </span>
      </div>

      <h2 className="text-neutral-600 dark:text-neutral-400 text-sm mt-6">
        {title}
      </h2>

      <p className="text-4xl font-semibold text-neutral-900 dark:text-white mt-1 tracking-tight">
        {value}
      </p>
    </GlassCard>
  );
}

/* ---------------------------------------------------------------------- */
/* ACTIVITY ITEM */
/* ---------------------------------------------------------------------- */

function ActivityItem({ title, subtitle, amount, color }) {
  return (
    <div className="py-5 flex justify-between">
      <div>
        <p className="font-medium text-neutral-900 dark:text-white">
          {title}
        </p>

        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          {subtitle}
        </p>
      </div>

      <p className={cn("font-medium text-lg", color)}>
        {amount}
      </p>
    </div>
  );
}

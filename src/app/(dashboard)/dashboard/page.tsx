"use client";

import { TrendingUp, TrendingDown, Wallet, ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", income: 3000, expense: 1800 },
  { name: "Feb", income: 3100, expense: 2000 },
  { name: "Mar", income: 2900, expense: 1700 },
  { name: "Apr", income: 3400, expense: 2100 },
];

export default function OverviewPage() {
  return (
    <div className="space-y-10">

      {/* TITLE */}
      <div>
        <h1 className="text-3xl font-semibold text-neutral-900 tracking-tight">
          Overview
        </h1>
        <p className="text-neutral-600 mt-1">Ringkasan keuangan bulan ini</p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* INCOME */}
        <div className="group p-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-all">
          <div className="flex justify-between">
            <Wallet className="w-9 h-9 text-neutral-800" />
            <span className="text-green-600 text-sm font-medium">+12%</span>
          </div>

          <h2 className="text-neutral-600 text-sm mt-4">Total Income</h2>
          <p className="text-4xl font-semibold text-neutral-900 mt-1">
            Rp 12.500.000
          </p>
        </div>

        {/* EXPENSE */}
        <div className="group p-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-all">
          <div className="flex justify-between">
            <TrendingDown className="w-9 h-9 text-neutral-800" />
            <span className="text-red-600 text-sm font-medium">+5%</span>
          </div>

          <h2 className="text-neutral-600 text-sm mt-4">Total Expense</h2>
          <p className="text-4xl font-semibold text-neutral-900 mt-1">
            Rp 4.320.000
          </p>
        </div>

        {/* BALANCE */}
        <div className="group p-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-all">
          <div className="flex justify-between">
            <TrendingUp className="w-9 h-9 text-neutral-800" />
            <span className="text-blue-600 text-sm font-medium">Stable</span>
          </div>

          <h2 className="text-neutral-600 text-sm mt-4">Balance</h2>
          <p className="text-4xl font-semibold text-neutral-900 mt-1">
            Rp 8.180.000
          </p>
        </div>
      </div>

      {/* CHART */}
      <div className="p-6 rounded-3xl bg-white/30 backdrop-blur-2xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
        <h3 className="text-neutral-800 font-medium mb-6 text-lg">
          Income vs Expense
        </h3>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Bar dataKey="income" fill="#2ecc71" radius={10} />
              <Bar dataKey="expense" fill="#e74c3c" radius={10} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="p-6 rounded-3xl bg-white/30 backdrop-blur-2xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
        <h3 className="text-neutral-800 font-medium mb-6 text-lg">
          Recent Activity
        </h3>

        <div className="divide-y divide-white/30">
          <div className="py-5 flex justify-between">
            <div>
              <p className="font-medium text-neutral-900">Makan siang</p>
              <p className="text-neutral-500 text-sm">Food · 2 hours ago</p>
            </div>
            <p className="text-red-600 font-medium">-Rp 45.000</p>
          </div>

          <div className="py-5 flex justify-between">
            <div>
              <p className="font-medium text-neutral-900">Gaji Bulanan</p>
              <p className="text-neutral-500 text-sm">Income · 1 day ago</p>
            </div>
            <p className="text-green-600 font-medium">+Rp 5.200.000</p>
          </div>
        </div>

        <button className="mt-6 flex items-center text-blue-600 font-medium hover:underline">
          View all <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>

    </div>
  );
}

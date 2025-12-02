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
    <div className="space-y-8">

      {/* TOP SECTION */}
      <div>
        <h1 className="text-2xl font-semibold text-neutral-800">Overview</h1>
        <p className="text-neutral-500 mt-1">
          Ringkasan keuangan bulan ini
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* INCOME */}
        <div className="p-6 rounded-2xl bg-white shadow-lg border border-white/60">
          <div className="flex justify-between items-center">
            <Wallet className="w-8 h-8 text-neutral-700" />
            <span className="text-green-600 text-sm font-medium">+12%</span>
          </div>

          <h2 className="text-neutral-500 text-sm mt-4">Total Income</h2>
          <p className="text-3xl font-semibold text-neutral-800 mt-1">
            Rp 12.500.000
          </p>
        </div>

        {/* EXPENSE */}
        <div className="p-6 rounded-2xl bg-white shadow-lg border border-white/60">
          <div className="flex justify-between items-center">
            <TrendingDown className="w-8 h-8 text-neutral-700" />
            <span className="text-red-600 text-sm font-medium">+5%</span>
          </div>

          <h2 className="text-neutral-500 text-sm mt-4">Total Expense</h2>
          <p className="text-3xl font-semibold text-neutral-800 mt-1">
            Rp 4.320.000
          </p>
        </div>

        {/* BALANCE */}
        <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl shadow-lg border border-white/40">
          <div className="flex justify-between items-center">
            <TrendingUp className="w-8 h-8 text-neutral-700" />
            <span className="text-blue-600 text-sm font-medium">Stable</span>
          </div>

          <h2 className="text-neutral-500 text-sm mt-4">Balance</h2>
          <p className="text-3xl font-semibold text-neutral-800 mt-1">
            Rp 8.180.000
          </p>
        </div>
      </div>

      {/* CHART */}
      <div className="p-6 rounded-2xl bg-white shadow-lg border border-white/60">
        <h3 className="text-neutral-700 font-medium mb-4">Income vs Expense</h3>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Bar dataKey="income" fill="#67b84f" radius={6} />
              <Bar dataKey="expense" fill="#e66b6b" radius={6} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl shadow-lg border border-white/40">
        <h3 className="text-neutral-700 font-medium mb-4">Recent Activity</h3>

        <div className="divide-y divide-white/30">
          <div className="py-4 flex justify-between items-center">
            <div>
              <p className="font-medium text-neutral-800">Makan siang</p>
              <p className="text-neutral-500 text-sm">Food · 2 hours ago</p>
            </div>
            <p className="text-red-600 font-medium">-Rp 45.000</p>
          </div>

          <div className="py-4 flex justify-between items-center">
            <div>
              <p className="font-medium text-neutral-800">Gaji Bulanan</p>
              <p className="text-neutral-500 text-sm">Income · 1 day ago</p>
            </div>
            <p className="text-green-600 font-medium">+Rp 5.200.000</p>
          </div>
        </div>

        <button className="mt-6 flex items-center text-blue-600 hover:underline font-medium">
          View all <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>

    </div>
  );
}

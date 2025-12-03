"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X, Settings, LogOut, Wallet, List, User } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { useEffect, useState } from "react";

type Props = { open: boolean; onClose: () => void };

export default function MenuSheet({ open, onClose }: Props) {
  // mount guard: avoid SSR hydrations showing overlay on first paint
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <AnimatePresence>
      {mounted && open && (
        <>
          {/* backdrop: z lower than sheet but covers main; pointer-events to block clicks */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.36 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[40] bg-black/40"
            style={{ pointerEvents: "auto" }}
          />

          {/* sheet: always above backdrop */}
          <motion.div
            key="sheet"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 160, damping: 22 }}
            className="fixed left-0 right-0 bottom-0 z-[50] max-w-3xl mx-auto w-full px-4"
          >
            <div
              className={cn(
                "rounded-t-3xl overflow-hidden",
                "bg-white/80 dark:bg-black/40 backdrop-blur-3xl",
                "border border-white/30 dark:border-white/10",
                "shadow-[0_-30px_60px_rgba(0,0,0,0.18)]"
              )}
            >
              {/* handle */}
              <div className="px-4 pt-3 pb-4">
                <div className="mx-auto w-12 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
              </div>

              {/* navigation */}
              <div className="px-6 pb-6">
                <nav className="grid gap-3">
                  <NavRow href="/dashboard" label="Dashboard" Icon={Wallet} />
                  <NavRow href="/dashboard/overview" label="Overview" Icon={List} />
                  <NavRow href="/dashboard/transactions" label="Transactions" Icon={User} />
                </nav>

                <div className="mt-4 border-t border-white/40 dark:border-white/10 pt-4">
                  <div className="flex gap-3 items-center">
                    <button className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/20 dark:bg-black/20">
                      <Settings className="w-5 h-5" />
                      Settings
                    </button>

                    <button
                      onClick={() => alert("Logout (UI-only demo)")}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50/40 text-red-600"
                    >
                      <LogOut className="w-5 h-5" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <button
                  onClick={onClose}
                  className="w-full py-3 rounded-lg text-sm font-medium bg-transparent"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function NavRow({ href, label, Icon }: any) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-white/40 dark:hover:bg-white/5 transition"
    >
      <Icon className="w-5 h-5" />
      <div>
        <div className="font-medium">{label}</div>
        <div className="text-xs text-neutral-500 dark:text-neutral-400">Quick view</div>
      </div>
    </Link>
  );
}

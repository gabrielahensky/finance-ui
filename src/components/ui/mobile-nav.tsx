"use client";

import Link from "next/link";
import { Home, List, PlusCircle, User, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

export default function MobileNav({ onOpenMenu }) {
  const path = usePathname();

  const items = [
    { href: "/dashboard", icon: Home, label: "Home" },
    { href: "/dashboard/overview", icon: List, label: "Overview" },
    { href: "/dashboard/transactions", icon: PlusCircle, label: "Add" },
    { href: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="md:hidden">
      <div className="fixed bottom-6 inset-x-4 z-50 flex justify-center">
        <div
          className={cn(
            "w-full max-w-lg rounded-3xl px-3 py-2 flex items-center justify-between",
            "bg-white/20 dark:bg-black/25 backdrop-blur-xl border border-white/30 dark:border-white/10",
            "shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
          )}
        >
          {/* left section */}
          <div className="flex items-center gap-2">
            {items.slice(0, 2).map((it) => {
              const Icon = it.icon;
              const active = path === it.href;
              return (
                <Link
                  href={it.href}
                  key={it.href}
                  className={cn(
                    "flex flex-col items-center gap-1 px-3 py-2 rounded-xl",
                    active ? "text-blue-600" : "text-neutral-700 dark:text-neutral-200"
                  )}
                >
                  <motion.span
                    whileTap={{ scale: 0.92 }}
                    animate={active ? { scale: 1.05 } : { scale: 1 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.span>
                  <span className="text-xs">{it.label}</span>
                </Link>
              );
            })}
          </div>

          {/* center menu button */}
          <button
            onClick={onOpenMenu}
            className={cn(
              "-mt-6 w-14 h-14 rounded-full inline-flex items-center justify-center",
              "bg-white dark:bg-black/60 border border-white/30 dark:border-white/10",
              "backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            )}
          >
            <Menu className="w-6 h-6 text-neutral-800 dark:text-white" />
          </button>

          {/* right section */}
          <div className="flex items-center gap-2">
            {items.slice(2).map((it) => {
              const Icon = it.icon;
              const active = path === it.href;
              return (
                <Link
                  href={it.href}
                  key={it.href}
                  className={cn(
                    "flex flex-col items-center gap-1 px-3 py-2 rounded-xl",
                    active ? "text-blue-600" : "text-neutral-700 dark:text-neutral-200"
                  )}
                >
                  <motion.span
                    whileTap={{ scale: 0.92 }}
                    animate={active ? { scale: 1.05 } : { scale: 1 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.span>
                  <span className="text-xs">{it.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

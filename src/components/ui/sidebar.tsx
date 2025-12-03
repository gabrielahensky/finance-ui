"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Wallet, List, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils/cn";

export default function Sidebar() {
  const pathname = usePathname();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <aside
      className={cn(
        "w-64 h-full p-6 flex flex-col rounded-3xl",
        "bg-white/20 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
        "dark:bg-black/20 dark:border-white/10 dark:shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
      )}
    >
      <div className="text-2xl font-semibold mb-10 tracking-tight text-neutral-900 dark:text-white">
        Finance<span className="text-blue-600">UI</span>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        <NavItem
          icon={LayoutDashboard}
          label="Dashboard"
          href="/dashboard"
          active={pathname === "/dashboard"}
        />

        <NavItem
          icon={Wallet}
          label="Overview"
          href="/dashboard/overview"
          active={pathname.startsWith("/dashboard/overview")}
        />

        <NavItem
          icon={List}
          label="Transactions"
          href="/dashboard/transactions"
          active={pathname.startsWith("/dashboard/transactions")}
        />
      </nav>

      <button
        onClick={handleLogout}
        className="mt-6 flex items-center gap-2 text-red-600 dark:text-red-400 font-medium hover:underline"
      >
        <LogOut className="w-5 h-5" />
        Logout
      </button>
    </aside>
  );
}

function NavItem({ icon: Icon, label, href, active }) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-3 px-3 py-2 rounded-xl relative transition-all duration-200",

        active
          ? "text-neutral-900 dark:text-white font-semibold bg-white/60 dark:bg-white/10 shadow-md"
          : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
      )}
    >
      <span
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-full transition-all",
          active
            ? "bg-blue-500 opacity-100"
            : "bg-blue-400 opacity-0 group-hover:opacity-40"
        )}
      />

      <Icon
        className={cn(
          "w-5 h-5 transition-all",
          active
            ? "text-blue-600 scale-110"
            : "group-hover:scale-105 text-neutral-600 dark:text-neutral-300"
        )}
      />

      <span>{label}</span>
    </Link>
  );
}

"use client";

import { useState } from "react";
import Sidebar from "@/components/ui/sidebar";
import Topbar from "@/components/ui/topbar";
import MobileNav from "@/components/ui/mobile-nav";
import MenuSheet from "@/components/ui/menu-sheet";
import { cn } from "@/lib/utils/cn";

type Props = { children: React.ReactNode };

export default function ClientShell({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={cn(
        "min-h-screen w-full relative flex",
        "bg-gradient-to-br from-[#dfe8ff] via-[#eef3ff] to-white",
        "overflow-x-hidden"
      )}
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-25 pointer-events-none z-0" />

      {/* FIXED SIDEBAR (desktop only) */}
      <aside
        className={cn(
          "hidden md:block fixed left-6 top-6",
          "w-64 h-[calc(100vh-3rem)] rounded-3xl z-40"
        )}
      >
        <Sidebar />
      </aside>

      {/* MAIN CONTENT — diberi margin-left untuk menghindari overlap */}
      <main
        className={cn(
          "flex-1 min-h-screen relative z-20",

          // 64 = 16rem sidebar width, 24px left gap, 24px right gap
          "ml-0 md:ml-[calc(16rem+3rem)]",

          "pt-6 md:pt-10 px-4 md:px-8 pb-24",
          "bg-white/30 dark:bg-black/10 backdrop-blur-2xl",
          "border md:border-white/40 dark:md:border-white/10",
          "rounded-none md:rounded-3xl",
          "shadow-none md:shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
        )}
      >
        <div className="mb-6">
          <Topbar onOpenMenu={() => setMenuOpen(true)} />
        </div>

        <div className="max-w-6xl mx-auto mt-6">
          {children}
        </div>
      </main>

      {/* Mobile UI */}
      <MobileNav onOpenMenu={() => setMenuOpen(true)} />
      <MenuSheet open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}

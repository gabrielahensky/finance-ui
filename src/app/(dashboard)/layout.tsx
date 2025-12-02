"use client";

import Sidebar from "@/components/ui/sidebar";
import { cn } from "@/lib/utils/cn";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "min-h-screen w-full flex relative overflow-hidden",
        "bg-gradient-to-br from-[#e3f2ff] via-[#f8faff] to-[#ffffff]"
      )}
    >
      {/* Background noise + texture */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-soft-light" />

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main
        className={cn(
          "flex-1 relative z-10",
          "p-6 md:p-10 lg:p-14",

          // real glass
          "backdrop-blur-2xl bg-white/20 border border-white/30",
          "rounded-3xl shadow-[0_8px_32px_rgb(0_0_0/0.1)]",
          "mx-4 my-6"
        )}
      >
        {children}
      </main>
    </div>
  );
}

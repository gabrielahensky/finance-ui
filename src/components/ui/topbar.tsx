"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Bell,
  Settings,
  LogOut,
  User,
  Moon,
  Sun,
  Menu,
} from "lucide-react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils/cn";

/* ===========================================================
   TOPBAR (NO HYDRATION ISSUES)
=========================================================== */

export default function Topbar({ onOpenMenu }) {
  return (
    <header
      className={cn(
        "w-full h-16 rounded-2xl px-6 flex items-center justify-between",
        "bg-white/30 dark:bg-black/20 backdrop-blur-xl",
        "border border-white/40 dark:border-white/10",
        "shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
      )}
    >
      <SearchBar />

      <div className="flex items-center gap-4">
        <IconBtn>
          <Bell className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
        </IconBtn>

        <IconBtn>
          <Settings className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
        </IconBtn>

        <ThemeToggle />

        {/* MOBILE MENU */}
        <button
          onClick={() => onOpenMenu?.()}
          className={cn(
            "md:hidden w-10 h-10 rounded-xl flex items-center justify-center",
            "bg-white/40 dark:bg-black/30 backdrop-blur-xl",
            "border border-white/40 dark:border-white/10",
            "shadow-[0_4px_15px_rgba(0,0,0,0.12)]",
            "hover:bg-white/60 dark:hover:bg-black/50 transition-all"
          )}
        >
          <Menu className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
        </button>

        {/* DESKTOP PROFILE */}
        <div className="hidden md:block">
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}

/* ===========================================================
   SEARCH BAR
=========================================================== */
function SearchBar() {
  return (
    <div className="flex items-center gap-3 flex-1 max-w-sm">
      <Search className="w-5 h-5 text-neutral-500 dark:text-neutral-300" />
      <input
        type="text"
        placeholder="Search…"
        className="bg-transparent outline-none text-neutral-700 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 w-full"
      />
    </div>
  );
}

/* ===========================================================
   THEME TOGGLE (SAFE, NO RETURN NULL)
=========================================================== */

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // only update DOM after hydration
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const sys = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    const init = saved || sys;
    setTheme(init);
    document.documentElement.classList.toggle("dark", init === "dark");
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.88 }}
      className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center",
        "bg-white/40 dark:bg-black/30 backdrop-blur-xl",
        "border border-white/40 dark:border-white/10",
        "shadow-[0_4px_15px_rgba(0,0,0,0.12)]",
        "hover:bg-white/60 dark:hover:bg-black/50 transition-all"
      )}
    >
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -20, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 20, scale: 0.6 }}
            transition={{ duration: 0.18 }}
          >
            <Sun className="w-5 h-5 text-neutral-800" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 20, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -20, scale: 0.6 }}
            transition={{ duration: 0.18 }}
          >
            <Moon className="w-5 h-5 text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

/* ===========================================================
   PROFILE DROPDOWN (NO NULL RETURNS, NO HOOK JUMP)
=========================================================== */

function ProfileDropdown() {
  const supabase = createClient();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Outside click handler — ALWAYS safe
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "w-10 h-10 rounded-xl overflow-hidden",
          "bg-white/40 dark:bg-black/40 backdrop-blur-xl",
          "border border-white/40 dark:border-white/10",
          "shadow-[0_4px_15px_rgba(0,0,0,0.12)]",
          "hover:bg-white/60 dark:hover:bg-black/60 transition-all"
        )}
      >
        <Image
          src="/avatar.png"
          alt="avatar"
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -5 }}
            transition={{ duration: 0.18 }}
            className={cn(
              "absolute right-0 mt-3 w-56 p-3 rounded-2xl",
              "bg-white/60 dark:bg-black/30 backdrop-blur-2xl",
              "border border-white/40 dark:border-white/10",
              "shadow-[0_8px_35px_rgba(0,0,0,0.15)]"
            )}
          >
            {/* User Info */}
            <div className="px-2 py-1.5 text-neutral-600 dark:text-neutral-300 text-sm">
              Signed in as
              <span className="block font-semibold text-neutral-900 dark:text-white">
                user@example.com
              </span>
            </div>

            <hr className="my-2 border-white/50 dark:border-white/10" />

            <DropdownItem icon={User} label="Profile" delay={0} />
            <DropdownItem icon={Settings} label="Settings" delay={0.05} />

            <motion.button
              onClick={logout}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12 }}
              className={cn(
                "flex items-center gap-3 w-full px-3 py-2 rounded-xl",
                "text-red-600 dark:text-red-400",
                "hover:bg-red-50/40 dark:hover:bg-red-500/20 transition-all mt-2"
              )}
            >
              <LogOut className="w-5 h-5" /> Logout
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ===========================================================
   REUSABLE UI
=========================================================== */

function IconBtn({ children }) {
  return (
    <button
      className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center",
        "bg-white/40 dark:bg-black/30 backdrop-blur-xl",
        "border border-white/40 dark:border-white/10",
        "hover:bg-white/60 dark:hover:bg-black/50 transition-all"
      )}
    >
      {children}
    </button>
  );
}

function DropdownItem({ icon: Icon, label, delay }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.15, delay }}
      className="flex items-center gap-3 w-full px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-200 hover:bg-white/50 dark:hover:bg-white/10 transition-all"
    >
      <Icon className="w-5 h-5" />
      {label}
    </motion.button>
  );
}

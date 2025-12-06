"use client";

import { useState } from "react";
import { KeyRound, Lock } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();
  const supabase = createClient();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = new FormData(e.currentTarget);
    const password = form.get("password") as string;
    const confirm = form.get("confirm") as string;

    if (password !== confirm) {
      setLoading(false);
      return setMessage("Passwords do not match.");
    }

    const { error } = await supabase.auth.updateUser({ password });

    setLoading(false);

    if (error) {
      return setMessage(error.message);
    }

    setMessage("Password updated! Redirecting to login…");
    setTimeout(() => router.push("/login"), 1500);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative bg-gradient-to-br from-[#dfe8ff] via-[#eef3ff] to-white overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-25 pointer-events-none" />

      {/* Glass Card */}
      <div className="relative w-full max-w-md px-8 py-10 bg-white/60 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
        <h1 className="text-3xl font-semibold text-center text-neutral-900">
          Reset Password
        </h1>
        <p className="text-neutral-600 text-center mt-2">
          Enter your new password below
        </p>

        <form onSubmit={handleReset} className="mt-10 space-y-6">
          {/* New Password */}
          <div className="relative">
            <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
            <input
              type="password"
              name="password"
              placeholder="New Password"
              required
              className="w-full bg-white/40 border border-white/50 text-neutral-800 placeholder-neutral-500 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              required
              className="w-full bg-white/40 border border-white/50 text-neutral-800 placeholder-neutral-500 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Error or success message */}
          {message && (
            <p className="text-center text-sm text-red-500">{message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition active:scale-[0.98]"
          >
            {loading ? "Updating…" : "Update Password"}
          </button>

          <p className="text-center text-neutral-600 mt-3">
            Back to{" "}
            <a href="/login" className="text-blue-600 font-medium hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}

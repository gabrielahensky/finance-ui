import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * cn()
 * - Menggabungkan class Tailwind dengan benar
 * - Menghindari konflik class (misal: p-4 vs p-2 → otomatis pilih yang paling terakhir)
 * - Dipakai di semua UI modern
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

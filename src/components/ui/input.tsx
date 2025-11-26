interface InputProps {
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  placeholder?: string
  className?: string
}

export default function Input({ value, onChange, type = "text", placeholder, className }: InputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={`w-full rounded-xl border px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none ${className || ""}`}
    />
  )
}

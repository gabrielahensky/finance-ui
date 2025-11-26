interface ChipProps {
  label: string
  active?: boolean
  onClick?: () => void
}

export default function Chip({ label, active, onClick }: ChipProps) {
  return (
    <div
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm cursor-pointer border 
        ${active ? "bg-primary text-white border-primary" : "bg-gray-100 text-gray-700"}
      `}
    >
      {label}
    </div>
  )
}

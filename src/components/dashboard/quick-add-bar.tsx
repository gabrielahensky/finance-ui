import { useState } from "react"

export function QuickAddBar({ onOpen }: { onOpen?: ()=>void }) {
  const [text, setText] = useState("")
  return (
    <div className="rounded-2xl p-3 bg-white/6 backdrop-blur-md border border-white/8 flex items-center gap-3">
      <input
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Add an expense — e.g. Coffee $4.50"
        className="flex-1 bg-transparent border-none placeholder:text-white/60 text-white outline-none"
      />
      <button onClick={()=>onOpen?.()} className="px-3 py-1 rounded-xl bg-primary text-white">+ Add</button>
    </div>
  )
}

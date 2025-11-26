"use client"

import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { Input } from "@/components/ui/input"
import { Chip } from "@/components/ui/chip"
import { Button } from "@/components/ui/button"

type Props = {
  open: boolean
  onClose: () => void
  categories: string[]
}

export function AddTransactionModal({ open, onClose, categories }: Props) {
  const [amount, setAmount] = useState("")
  const [selected, setSelected] = useState("")

  function submit() {
    // (Mock handling only)
    console.log("SUBMIT:", { amount, category: selected })
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-lg font-semibold mb-4">Add Transaction</h2>

      <div className="flex flex-col gap-4">
        <Input
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Chip
              key={c}
              label={c}
              selected={selected === c}
              onClick={() => setSelected(c)}
            />
          ))}
        </div>

        <Button onClick={submit} variant="primary" className="w-full mt-2">
          Save
        </Button>
      </div>
    </Modal>
  )
}

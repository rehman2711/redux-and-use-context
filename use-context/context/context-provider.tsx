"use client"
import { createContext, ReactNode, useState } from "react"

export type ShoeCountContextType = {
  shoeCount: number
  addShoe: () => void
  removeShoe: () => void
}

export const ShoeCountContext = createContext<ShoeCountContextType | undefined>(
  undefined
)

export function ShoeCountProvider({ children }: { children: ReactNode }) {
  const [shoeCount, setShoeCount] = useState<number>(0)

  const addShoe = () => {
    setShoeCount((prev) => prev + 1)
  }

  const removeShoe = () => {
    setShoeCount((prev) => prev - 1)
  }

  return (
    <ShoeCountContext.Provider value={{ shoeCount, addShoe, removeShoe }}>
      {children}
    </ShoeCountContext.Provider>
  )
}

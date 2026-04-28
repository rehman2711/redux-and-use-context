import { ShoeCountContext } from "@/context/context-provider"
import { useContext } from "react"

export const useShoeCount = () => {
  const context = useContext(ShoeCountContext)

  if (!context) {
    throw new Error("useShoeCount must be used within ShoeCountProvider")
  }

  return context
}

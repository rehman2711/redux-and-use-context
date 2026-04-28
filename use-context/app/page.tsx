"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Page() {
  const router = useRouter()

  return (
    <div className="flex h-[90vh] items-center justify-center">
        <Button onClick={() => router.push("/shopping")}>Go to Shopping</Button>
    </div>
  )
}

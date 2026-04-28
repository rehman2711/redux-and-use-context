"use client"

import { Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { ModeToggle } from "./theme-toggle"
import { useShoeCount } from "@/hooks/useShoeCount"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const { shoeCount } = useShoeCount()

  const router = useRouter()

  return (
    <header className="flex w-full items-center justify-center gap-4 px-4 pt-8">
      <div className="flex w-full max-w-4xl items-center justify-between rounded-lg border bg-muted/30 ps-4">
        <div className="flex items-center gap-1 text-lg font-semibold">
          <button
            onClick={() => {
              router.push("/")
            }}
          >
            {" "}
            <span className="text-xl font-black">USE CONTEXT</span>
          </button>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <Button variant="ghost">SHOP</Button>

          <Button variant="ghost">ABOUT</Button>

          <Button variant="ghost">STORIES</Button>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonGroup className="">
            <Button
              variant="outline"
              className="border-t-0 border-b-0"
              size="icon-lg"
            >
              {" "}
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-e-0 border-t-0 border-b-0 px-4"
              size="icon-lg"
            >
              {shoeCount ? shoeCount : 0}
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div>
        <ModeToggle />
      </div>
    </header>
  )
}

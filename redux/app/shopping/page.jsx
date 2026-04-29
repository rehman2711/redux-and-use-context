"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { useSelector, useDispatch } from "react-redux"
import {
  decrement,
  increment,
  customIncrement,
  customDecrement,
} from "@/redux/slices/shoe-count/shoe-count-slice"

// Custom Increment - Decrement
import { ChevronDownIcon } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { useState } from "react"

// export interface shoeListType {
//   imageUrl: string
//   name: string
//   description: string
//   price: number
// }

// export const shoeList: shoeListType = {
//   imageUrl: "/comet-shoes.jpg",
//   name: "Comet Shoes",
//   description: "Comet shoes are best for comfortable and wearing premium shoes",
//   price: 4999,
// }

export const shoeList = {
  imageUrl: "/comet-shoes.jpg",
  name: "Comet Shoes",
  description: "Comet shoes are best for comfortable and wearing premium shoes",
  price: 4999,
}

const Shopping = () => {
  // useSelector Hook
  const count = useSelector((state) => state.shoeCount)

  // useDispatch Hook
  const dispatch = useDispatch()

  // custom count state
  const [customCount, setCustomCount] = useState()
  return (
    <>
      <div className="flex min-h-[90dvh] items-center justify-center">
        <div className="flex flex-col gap-4 md:flex-row">
          {/* LEFT */}
          <div className="flex flex-1 flex-col justify-around gap-4">
            <div className="">
              {" "}
              <p className="leading-7 text-black/80 dark:text-white/80">
                Add a product to see the updated shoe count in the top
                navigation bar, managed using React Redux Toolkit.
              </p>
            </div>
            <div className="">
              <p className="text-base font-medium text-muted-foreground">
                Add a custom count:
              </p>
              <InputGroup className="mt-2 [--radius:1rem]">
                <InputGroupInput
                  placeholder="Enter count"
                  name="count"
                  value={customCount}
                  onChange={(e) => {
                    setCustomCount(e.target.value)
                  }}
                />
                <InputGroupAddon align="inline-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <InputGroupButton
                        variant="ghost"
                        className="pr-1.5! text-xs"
                      >
                        <span>ACTION</span>
                        <ChevronDownIcon className="size-3" />
                      </InputGroupButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="[--radius:0.95rem]"
                    >
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onClick={() => {
                            dispatch(customIncrement(Number(customCount) || 0))
                          }}
                        >
                          Increment
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            dispatch(customDecrement(Number(customCount) || 0))
                          }}
                        >
                          Decrement
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-1 items-center justify-end bg-red-">
            <div className="">
              <div className="w-full max-w-[280px] overflow-hidden rounded-2xl border bg-card shadow-sm">
                <div className="relative aspect-[4/3] w-full bg-muted">
                  <Image
                    src={shoeList.imageUrl}
                    alt={shoeList.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-2 p-4">
                  <h2 className="line-clamp-1 text-sm leading-tight font-semibold">
                    {shoeList.name}
                  </h2>

                  <p className="line-clamp-2 text-xs text-muted-foreground">
                    {shoeList.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase">
                        Price
                      </span>
                      <span className="text-lg font-semibold text-black dark:text-white">
                        ₹{shoeList.price}
                      </span>
                    </div>

                    {count === 0 ? (
                      <Button
                        size="sm"
                        className="rounded-lg px-4 text-xs font-medium"
                        onClick={() => {
                          dispatch(increment())
                        }}
                      >
                        Add
                      </Button>
                    ) : (
                      <>
                        <ButtonGroup>
                          {/* minus button */}
                          <Button
                            size="sm"
                            onClick={() => {
                              dispatch(decrement())
                            }}
                          >
                            &#8722;
                          </Button>
                          <Button size="sm" className="px-3.5 hover:bg-primary">
                            {count}
                          </Button>
                          {/* plus button */}
                          <Button
                            size="sm"
                            onClick={() => {
                              dispatch(increment())
                            }}
                          >
                            &#43;
                          </Button>
                        </ButtonGroup>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shopping

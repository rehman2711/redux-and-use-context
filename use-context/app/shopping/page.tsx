"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { useShoeCount } from "@/hooks/useShoeCount"

export interface shoeListType {
  imageUrl: string
  name: string
  description: string
  price: number
}

export const shoeList: shoeListType = {
  imageUrl: "/comet-shoes.jpg",
  name: "Comet Shoes",
  description: "Comet shoes are best for comfortable and wearing premium shoes",
  price: 4999,
}

const Shopping = () => {
  const { addShoe, removeShoe, shoeCount } = useShoeCount()
  return (
    <div className="mt-16 flex min-h-1/2 flex-col items-center justify-center gap-4 gap-10 space-y-10 px-4 py-6 md:mt-28 md:flex-row md:justify-start">
      <div className="flex flex-1 items-center justify-center">
        <p className="text-center leading-7 text-black/80 dark:text-white/80">
          Add a product to see the updated shoe count in the top navigation bar,
          managed using the useContext hook.
        </p>
      </div>

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

            {shoeCount === 0 ? (
              <Button
                size="sm"
                className="rounded-lg px-4 text-xs font-medium"
                onClick={() => {
                  addShoe()
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
                      removeShoe()
                    }}
                  >
                    &#8722;
                  </Button>
                  <Button size="sm" className="hover:bg-primary">
                    {shoeCount}
                  </Button>
                  {/* plus button */}
                  <Button
                    size="sm"
                    onClick={() => {
                      addShoe()
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
  )
}

export default Shopping

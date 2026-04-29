import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const NotFound = () => {
  return (
    <div className="flex min-h-[90dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
          404
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Oops, it looks like the page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link href="/">
            <Button>Go to React Redux Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound

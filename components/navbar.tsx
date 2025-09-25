import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 px-20">
            <span className="hidden font-bold sm:inline-block">OneclickAI</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/features" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Let
            </Link>
            <Link href="/features" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Peace
            </Link>
            <Link href="/pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Make
            </Link>
            <Link href="/docs" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Us
            </Link>
            <Link href="/docs" className="transition-colors hover:text-foreground/80 text-foreground/60">
              One
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

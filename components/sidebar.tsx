'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  MessageSquare,
  User,
  Settings,
  HelpCircle,
  Rocket
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("pb-12 min-h-screen", className)}>
      <div className="px-3 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center pl-4">
          <h2 className="text-2xl font-bold">Fiksa</h2>
        </Link>
        <ThemeToggle />
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Navigation</h2>
          <div className="space-y-1">
            <Button
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === "/" && "bg-accent text-accent-foreground"
              )}
            >
              <Link href="/">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === "/products" && "bg-accent text-accent-foreground"
              )}
            >
              <Link href="/products">
                <Package className="mr-2 h-4 w-4" />
                Products
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === "/orders" && "bg-accent text-accent-foreground"
              )}
            >
              <Link href="/orders">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Orders
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === "/customers" && "bg-accent text-accent-foreground"
              )}
            >
              <Link href="/customers">
                <Users className="mr-2 h-4 w-4" />
                Customers
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === "/chat" && "bg-accent text-accent-foreground"
              )}
            >
              <Link href="/chat">
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Other</h2>
          <div className="space-y-1">
            <Button
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === "/account" && "bg-accent text-accent-foreground"
              )}
            >
              <Link href="/account">
                <User className="mr-2 h-4 w-4" />
                Account
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === "/settings" && "bg-accent text-accent-foreground"
              )}
            >
              <Link href="/settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === "/help" && "bg-accent text-accent-foreground"
              )}
            >
              <Link href="/help">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help Center
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="px-3">
        <div className="rounded-lg border bg-card text-card-foreground p-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Start Premium Service</h3>
            <Button className="w-full" size="sm">
              <Rocket className="mr-2 h-4 w-4" />
              Upgrade Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


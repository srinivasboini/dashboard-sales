"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Order } from "./columns"

interface OrderDetailsProps {
  order: Order | null
  onClose: () => void
}

export function OrderDetails({ order, onClose }: OrderDetailsProps) {
  if (!order) return null

  return (
    <div className="w-[400px] border-l h-screen">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">
            Order no. #{order.id}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <Tabs defaultValue="info" className="mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="info">Order Info</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
          </TabsList>
          <TabsContent value="info" className="mt-4 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Order date</h3>
              <p>{order.orderDate}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
              <p className="text-green-600">Approved</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Hold Message</h3>
              <p>Insufficient account balance</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Tracking</h3>
              <p>#2324345</p>
            </div>
          </TabsContent>
          {/* Add other tabs content as needed */}
        </Tabs>
      </div>
    </div>
  )
} 
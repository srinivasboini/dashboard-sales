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
          <TabsContent value="products" className="mt-4">
            <ScrollArea className="h-[calc(100vh-300px)]">
              {/* Add products list here */}
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">SKU: 1234abcd5678efgh</p>
                      <p className="text-sm text-muted-foreground">Each</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">2</p>
                      <button className="text-sm text-blue-600">More</button>
                    </div>
                  </div>
                </div>
                {/* Add more products */}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="shipping" className="mt-4 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Shipping Method</h3>
              <p>{order.shippingMethod}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Ship to</h3>
              <p>{order.shippedTo}</p>
              <p>{order.address}</p>
              <p>{order.city}, {order.state} {order.zip}</p>
            </div>
          </TabsContent>
        </Tabs>

        <Separator className="my-4" />

        <div className="space-y-2">
          <Button variant="destructive" className="w-full" size="sm">
            Unapprove
          </Button>
          <Button variant="outline" className="w-full" size="sm">
            Edit Order
          </Button>
          <Button variant="outline" className="w-full" size="sm">
            Copy Order
          </Button>
          <Button variant="outline" className="w-full text-red-600 hover:text-red-600" size="sm">
            Cancel Order
          </Button>
        </div>
      </div>
    </div>
  )
} 
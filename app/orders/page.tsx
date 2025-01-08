"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/products/data-table"
import { columns } from "@/components/orders/columns"
import { Filter, Share, Plus } from "lucide-react"
import { OrderDetails } from "@/components/orders/order-details"
import { useOrders } from "@/hooks/use-data"
import { Order } from "@/types/database.types"

export default function OrdersPage() {
  const { orders, isLoading, isError } = useOrders()
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg">Loading orders...</div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg text-red-500">Error loading orders</div>
      </div>
    )
  }

  return (
    <div className="flex h-screen">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
            <p className="text-sm text-muted-foreground">
              Manage your orders
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share className="h-4 w-4" />
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New order
            </Button>
          </div>
        </div>

        <DataTable 
          columns={columns} 
          data={orders || []}
          onRowClick={(order) => setSelectedOrder(order)}
          searchKey="id"
        />
      </div>

      <OrderDetails 
        order={selectedOrder} 
        onClose={() => setSelectedOrder(null)} 
      />
    </div>
  )
} 
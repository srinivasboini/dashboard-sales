"use client"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/products/data-table"
import { columns } from "@/components/products/columns"
import { Filter, Share, Plus } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { products } from "./data"
import { useState } from "react"
import { Product } from "@/components/products/columns"

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("all")
  
  const filteredProducts = products.filter((product) => {
    switch (activeTab) {
      case "live":
        return product.status === "Active"
      case "archive":
        return product.status === "Archive"
      case "out-of-stock":
        return product.stock === 0
      case "low-stock":
        return product.stock > 0 && product.stock <= 5
      default:
        return true
    }
  })

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <p className="text-sm text-muted-foreground">
            This datatable show all of your product
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
            Add Product
          </Button>
        </div>
      </div>

      <Tabs 
        defaultValue="all" 
        className="space-y-4"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList>
          <TabsTrigger value="all">
            All Products ({products.length})
          </TabsTrigger>
          <TabsTrigger value="live">
            Live ({products.filter(p => p.status === "Active").length})
          </TabsTrigger>
          <TabsTrigger value="archive">
            Archive ({products.filter(p => p.status === "Archive").length})
          </TabsTrigger>
          <TabsTrigger value="out-of-stock">
            Out of Stock ({products.filter(p => p.stock === 0).length})
          </TabsTrigger>
          <TabsTrigger value="low-stock">
            Low Stock ({products.filter(p => p.stock > 0 && p.stock <= 5).length})
          </TabsTrigger>
        </TabsList>
        <DataTable columns={columns} data={filteredProducts} />
      </Tabs>
    </div>
  )
} 
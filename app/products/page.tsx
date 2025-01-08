"use client"

import { useState } from "react"
import { useProducts } from "@/hooks/use-data"
import { DataTable } from "@/components/products/data-table"
import { columns } from "@/components/products/columns"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Loading } from "@/components/ui/loading"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Product } from "@/types/database.types"

export default function ProductsPage() {
  const { products, isLoading, isError } = useProducts()
  const [activeTab, setActiveTab] = useState("all")

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg text-red-500">
          Error loading products. Please check the console for details.
        </div>
      </div>
    )
  }

  const filteredProducts = (products || []).filter((product: Product) => {
    switch (activeTab) {
      case "live":
        return product.status === "active"
      case "archive":
        return product.status === "archived"
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
            {products?.length || 0} total products
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">
            All Products ({products?.length || 0})
          </TabsTrigger>
          <TabsTrigger value="live">
            Live ({products?.filter(p => p.status === "active").length || 0})
          </TabsTrigger>
          <TabsTrigger value="archive">
            Archive ({products?.filter(p => p.status === "archived").length || 0})
          </TabsTrigger>
          <TabsTrigger value="out-of-stock">
            Out of Stock ({products?.filter(p => p.stock === 0).length || 0})
          </TabsTrigger>
          <TabsTrigger value="low-stock">
            Low Stock ({products?.filter(p => p.stock > 0 && p.stock <= 5).length || 0})
          </TabsTrigger>
        </TabsList>

        <DataTable 
          columns={columns} 
          data={filteredProducts} 
          searchKey="name"
        />
      </Tabs>
    </div>
  )
} 
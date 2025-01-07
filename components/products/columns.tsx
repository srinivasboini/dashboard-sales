"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import { Table } from "@tanstack/react-table"

export type Product = {
  id: string
  rank: number
  image: string
  name: string
  totalBuyers: number
  price: number
  stock: number
  rating: {
    score: number
    status: 'Perfect' | 'Very Good' | 'Good' | 'Bad'
  }
  status: 'Active' | 'Archive'
}

type RatingColors = {
  Perfect: string
  "Very Good": string
  Good: string
  Bad: string
}

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }: { table: Table<Product> }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "name",
    header: "Product",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 relative">
            <Image
              src={row.original.image}
              alt={row.original.name}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div>
            <div className="font-medium">{row.original.name}</div>
            <div className="text-sm text-muted-foreground">ID: {row.original.id}</div>
          </div>
        </div>
      )
    }
  },
  {
    accessorKey: "totalBuyers",
    header: "Total Buyers",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      return <div>${row.original.price.toLocaleString()}</div>
    }
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => {
      const rating = row.original.rating
      const colors = {
        Perfect: "bg-green-100 text-green-800",
        "Very Good": "bg-blue-100 text-blue-800",
        Good: "bg-yellow-100 text-yellow-800",
        Bad: "bg-red-100 text-red-800",
      }
      return (
        <div className="flex items-center gap-2">
          <div className="text-sm text-muted-foreground">Score: {rating.score}</div>
          <Badge variant="outline" className={colors[rating.status]}>
            {rating.status}
          </Badge>
        </div>
      )
    }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status
      return (
        <Badge variant={status === 'Active' ? 'default' : 'secondary'}>
          {status}
        </Badge>
      )
    }
  },
] 
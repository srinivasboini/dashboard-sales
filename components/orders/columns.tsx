"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Order } from "@/types/database.types"

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Order ID",
  },
  {
    accessorKey: "customer.name",
    header: "Customer",
  },
  {
    accessorKey: "total_amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("total_amount"))
      return `$${amount.toFixed(2)}`
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "shipping_method",
    header: "Shipping",
  },
  {
    accessorKey: "created_at",
    header: "Date",
    cell: ({ row }) => {
      return new Date(row.getValue("created_at")).toLocaleDateString()
    },
  }
] 
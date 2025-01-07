"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { Table } from "@tanstack/react-table"

export type Order = {
  id: string
  shippedTo: string
  orderDate: string
  shippedDate: string
  address: string
  city: string
  state: string
  zip: string
  shippingMethod: string
}

export const columns: ColumnDef<Order>[] = [
  {
    id: "select",
    header: ({ table }: { table: Table<Order> }) => (
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
    accessorKey: "id",
    header: "Order #",
  },
  {
    accessorKey: "shippedTo",
    header: "Shipped to",
  },
  {
    accessorKey: "orderDate",
    header: "Order date",
  },
  {
    accessorKey: "shippedDate",
    header: "Shipped date",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "zip",
    header: "Zip",
  },
  {
    accessorKey: "shippingMethod",
    header: "Shipping method",
  },
] 
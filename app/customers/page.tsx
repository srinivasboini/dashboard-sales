"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loading } from "@/components/ui/loading"
import { useCustomers } from '@/hooks/use-data'
import { CustomerCard } from "@/components/customers/customer-card"

export default function CustomersPage() {
  const { customers, isLoading, isError } = useCustomers()

  console.log('Fetched Customers:', customers);

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg text-red-500">
          Error loading customers. Please check the console for details.
        </div>
      </div>
    )
  }

  if (!customers || customers.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg text-muted-foreground">
          No customers found.
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-4">
      {customers.map((customer) => (
        <CustomerCard key={customer.id} customer={customer} />
      ))}
    </div>
  )
} 
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CustomerCard } from "@/components/customers/customer-card"
import { useCustomers } from '@/hooks/use-data'
import { Plus, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { Customer } from "@/types/database.types"
import { Loading } from "@/components/ui/loading"

const ITEMS_PER_PAGE = 5

export default function CustomersPage() {
  const { customers, isLoading, isError } = useCustomers()
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)

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

  if (!customers) {
    return null
  }

  const filteredCustomers = customers.filter((customer: Customer) => {
    const matchesSearch = customer.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filter === "all" || (customer.statuses && customer.statuses.includes(filter))
    return matchesSearch && matchesFilter
  })

  const totalPages = Math.ceil(filteredCustomers.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedCustomers = filteredCustomers.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const stats = {
    total: customers.length,
    newToday: customers.filter((c: Customer) => c.statuses?.includes("new")).length,
    returning: customers.filter((c: Customer) => c.statuses?.includes("returning")).length,
    online: customers.filter((c: Customer) => c.statuses?.includes("active")).length
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Customer
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Customers</SelectItem>
              <SelectItem value="returning">Returning</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="vip">VIP</SelectItem>
              <SelectItem value="banned">Banned</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers"
              className="pl-8"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1) // Reset to first page on search
              }}
            />
          </div>
        </div>

        <div className="grid gap-4">
          {paginatedCustomers.map((customer) => (
            <CustomerCard
              key={customer.id}
              customer={customer}
              isExpanded={selectedCustomer === customer.id}
              onClick={() => setSelectedCustomer(
                selectedCustomer === customer.id ? null : customer.id
              )}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {startIndex + 1} to {Math.min(startIndex + ITEMS_PER_PAGE, filteredCustomers.length)} of {filteredCustomers.length} customers
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(page => page - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(page => page + 1)}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-[300px] border-l p-6">
        <h3 className="font-semibold mb-4">OVERVIEW</h3>
        <div className="space-y-4">
          <div>
            <div className="text-2xl font-bold">{stats.total.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Total Customers</div>
          </div>
          <div>
            <div className="text-2xl font-bold">
              {stats.newToday} <span className="text-green-500 text-sm">+12%</span>
            </div>
            <div className="text-sm text-muted-foreground">New Today</div>
          </div>
          <div>
            <div className="text-2xl font-bold">
              {stats.returning} <span className="text-red-500 text-sm">-3%</span>
            </div>
            <div className="text-sm text-muted-foreground">Returning</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{stats.online}</div>
            <div className="text-sm text-muted-foreground">Online</div>
          </div>
        </div>
      </div>
    </div>
  )
} 
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Loading } from "@/components/ui/loading"
import { useCustomers } from '@/hooks/use-data'
import { CustomerCard } from "@/components/customers/customer-card"
import { Filter, UserCheck, UserX, Star } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

const ITEMS_PER_PAGE = 8

export default function CustomersPage() {
  const { customers = [], isLoading, isError } = useCustomers()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null)
  const [filter, setFilter] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Reset to first page when filter or search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [filter, searchQuery])

  if (isLoading) return <Loading />
  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg text-red-500">
          Error loading customers. Please try again later.
        </div>
      </div>
    )
  }

  // Filter and search customers with null checks
  const filteredCustomers = customers
    .filter(customer => {
      if (!customer) return false
      if (filter) return customer.status?.toLowerCase() === filter.toLowerCase()
      return true
    })
    .filter(customer => {
      if (!customer) return false
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const name = customer.name || ''
        const email = customer.email || ''
        return (
          name.toLowerCase().includes(query) ||
          email.toLowerCase().includes(query)
        )
      }
      return true
    })

  // Pagination
  const totalPages = Math.ceil(filteredCustomers.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedCustomers = filteredCustomers.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <div className="flex flex-col h-full">
      {/* Header Section */}
      <div className="flex-none p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Manage your customer relationships
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Search customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[200px]"
            />
          </div>
        </div>

        {/* Filter Section */}
        <div className="flex items-center space-x-2 mt-4">
          <Button 
            variant={!filter ? "default" : "outline"}
            size="sm" 
            onClick={() => setFilter(null)}
            className="flex items-center"
          >
            <Filter className="mr-2 h-4 w-4" />
            All
          </Button>
          <Button 
            variant={filter === 'active' ? "default" : "outline"}
            size="sm" 
            onClick={() => setFilter('active')}
            className="flex items-center"
          >
            <UserCheck className="mr-2 h-4 w-4" />
            Active
          </Button>
          <Button 
            variant={filter === 'vip' ? "default" : "outline"}
            size="sm" 
            onClick={() => setFilter('vip')}
            className="flex items-center"
          >
            <Star className="mr-2 h-4 w-4" />
            VIP
          </Button>
          <Button 
            variant={filter === 'banned' ? "default" : "outline"}
            size="sm" 
            onClick={() => setFilter('banned')}
            className="flex items-center"
          >
            <UserX className="mr-2 h-4 w-4" />
            Banned
          </Button>
        </div>
      </div>

      {/* Customer Cards Grid */}
      <div className="flex-grow p-8 pt-0 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginatedCustomers.map((customer) => (
            <CustomerCard 
              key={customer.id} 
              customer={customer} 
              isSelected={selectedCustomerId === customer.id}
              onClick={() => setSelectedCustomerId(customer.id)}
            />
          ))}
        </div>

        {/* Show message when no customers match filter */}
        {paginatedCustomers.length === 0 && (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">
              No customers found matching your criteria.
            </p>
          </Card>
        )}

        {/* Pagination Controls */}
        {filteredCustomers.length > 0 && (
          <div className="flex items-center justify-between mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  )
} 
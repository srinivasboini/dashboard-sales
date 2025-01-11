"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Customer } from "@/types/database.types"
import { Star } from "lucide-react"

interface CustomerCardProps {
  customer: Customer
  isExpanded?: boolean
  onClick?: () => void
}

export function CustomerCard({ customer, isExpanded, onClick }: CustomerCardProps) {
  const statusColors = {
    returning: "bg-yellow-100 text-yellow-800",
    vip: "bg-pink-100 text-pink-800",
    active: "bg-blue-100 text-blue-800",
    new: "bg-green-100 text-green-800",
    banned: "bg-red-100 text-red-800"
  }

  return (
    <Card 
      className={`cursor-pointer hover:shadow-md transition-shadow ${isExpanded ? 'border-primary' : ''}`}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={customer.avatar} />
              <AvatarFallback>{customer.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{customer.name}</h3>
                <div className="flex gap-1">
                  {customer.statuses?.map((status) => (
                    <Badge 
                      key={status} 
                      variant="outline"
                      className={statusColors[status as keyof typeof statusColors]}
                    >
                      {status}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  {customer.rating}
                </div>
                <div>{customer.orders} orders</div>
                <div>${customer.ltv.toLocaleString()}</div>
                <div>{customer.phone}</div>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            •••
          </Button>
        </div>

        {isExpanded && customer.notes && (
          <div className="mt-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Notes</h4>
                <p className="mt-1">{customer.notes}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 
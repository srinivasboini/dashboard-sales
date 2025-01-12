"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Customer } from "@/types/database.types"
import { Star } from "lucide-react"

interface CustomerCardProps {
  customer: Customer
  isSelected?: boolean
  onClick?: () => void
}

export function CustomerCard({ customer, isSelected, onClick }: CustomerCardProps) {
  // Status styles mapping
  const statusStyles = {
    active: "bg-green-100 text-green-800",
    vip: "bg-purple-100 text-purple-800",
    banned: "bg-red-100 text-red-800",
    new: "bg-blue-100 text-blue-800",
    returning: "bg-yellow-100 text-yellow-800"
  }

  return (
    <Card 
      className={`
        cursor-pointer transition-all duration-200 
        hover:shadow-md 
        ${isSelected ? 'ring-2 ring-primary' : ''}
      `}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={customer.avatar} alt={customer.name} />
              <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{customer.name}</h3>
              <p className="text-sm text-muted-foreground">{customer.email}</p>
            </div>
          </div>
          {customer.status === 'vip' && (
            <Star className="h-5 w-5 text-yellow-500" />
          )}
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <Badge 
              variant="secondary" 
              className={statusStyles[customer.status as keyof typeof statusStyles]}
            >
              {customer.status}
            </Badge>
            <span className="text-sm text-muted-foreground">
              Member since {new Date(customer.joinDate).toLocaleDateString()}
            </span>
          </div>
          
          <div className="text-sm">
            <p className="text-muted-foreground">{customer.phone}</p>
          </div>
        </div>

        {customer.notes && (
          <div className="mt-4 pt-4 border-t">
            <p className="text-sm text-muted-foreground">{customer.notes}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 
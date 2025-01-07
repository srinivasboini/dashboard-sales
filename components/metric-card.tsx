import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface MetricCardProps {
  title: string
  value: string
  decimal?: string
  period: string
}

export function MetricCard({ title, value, decimal, period }: MetricCardProps) {
  return (
    <Card className="relative overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-3xl font-bold mt-2">
              ${value}
              <span className="text-xl text-muted-foreground">.{decimal}</span>
            </h3>
            <p className="text-xs text-muted-foreground mt-2">{period}</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 opacity-50 hover:opacity-100 hover:bg-transparent"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}


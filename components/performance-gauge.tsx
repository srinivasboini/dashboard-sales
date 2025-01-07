'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PerformanceGauge() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sale Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[200px] w-[200px] mx-auto">
          <svg className="w-full h-full rotate-90" viewBox="0 0 100 100">
            <circle
              className="text-muted-foreground/20"
              strokeWidth="10"
              stroke="currentColor"
              fill="none"
              r="40"
              cx="50"
              cy="50"
            />
            <circle
              className="text-primary"
              strokeWidth="10"
              strokeDasharray={251.2}
              strokeDashoffset={60}
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              r="40"
              cx="50"
              cy="50"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-4xl font-bold">76%</p>
              <p className="text-sm text-muted-foreground">Since yesterday</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


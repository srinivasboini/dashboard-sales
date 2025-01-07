"use client"

import { useTheme } from "next-themes"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Jan", total: 5000 },
  { name: "Feb", total: 7500 },
  { name: "Mar", total: 6800 },
  { name: "Apr", total: 9800 },
  { name: "May", total: 14000 },
  { name: "Jun", total: 19000 },
  { name: "Jul", total: 18000 },
  { name: "Aug", total: 17000 },
  { name: "Sep", total: 15000 },
  { name: "Oct", total: 14000 },
  { name: "Nov", total: 18000 },
  { name: "Dec", total: 20000 },
]

export function OverviewChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full dark:bg-background">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff4405" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#ff4405" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                stroke={isDark ? "#888888" : "#666666"}
                fontSize={12}
                tickLine={false}
                axisLine={false}
                opacity={0.7}
              />
              <YAxis
                stroke={isDark ? "#888888" : "#666666"}
                fontSize={12}
                tickLine={false}
                axisLine={false}
                opacity={0.7}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                cursor={{ stroke: isDark ? "#666666" : "#888888", opacity: 0.2 }}
                contentStyle={{
                  backgroundColor: isDark ? "#000000" : "#ffffff",
                  border: `1px solid ${isDark ? "#333333" : "#e5e7eb"}`,
                  borderRadius: "8px",
                  color: isDark ? "#ffffff" : "#000000",
                }}
                labelStyle={{
                  color: isDark ? "#ffffff" : "#000000",
                }}
              />
              <Area
                type="monotone"
                dataKey="total"
                stroke="#ff4405"
                strokeWidth={2}
                fill="url(#gradient)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
} 
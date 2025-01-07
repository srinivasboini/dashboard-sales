'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 5000 },
  { name: 'Feb', value: 8000 },
  { name: 'Mar', value: 7000 },
  { name: 'Apr', value: 9000 },
  { name: 'May', value: 12000 },
  { name: 'Jun', value: 15000 },
  { name: 'Jul', value: 20000 },
  { name: 'Aug', value: 18000 },
  { name: 'Sep', value: 16000 },
  { name: 'Oct', value: 14000 },
  { name: 'Nov', value: 17000 },
  { name: 'Dec', value: 19000 },
]

export function TransactionChart() {
  return (
    <div className="h-[300px] w-full bg-white rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            vertical={false} 
            stroke="#E5E7EB"
          />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}


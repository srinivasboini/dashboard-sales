import { MetricCard } from "@/components/metric-card"
import { TransactionChart } from "@/components/transaction-chart"
import { PerformanceGauge } from "@/components/performance-gauge"
import { RecentTransactions } from "@/components/recent-transactions"
import { Button } from "@/components/ui/button"
import { Bell, Settings2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Gross Revenue"
          value="3,541"
          decimal="09"
          period="From Dec 01, 2024 - Jan 30, 2025"
        />
        <MetricCard
          title="Avg. Order Value"
          value="87"
          decimal="29"
          period="From Dec 01, 2024 - Jan 30, 2025"
        />
        <MetricCard
          title="Total Order"
          value="401"
          decimal="09"
          period="From Dec 01, 2024 - Jan 30, 2025"
        />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <TransactionChart />
        <PerformanceGauge />
      </div>
      <RecentTransactions />
    </div>
  )
}


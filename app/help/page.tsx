import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HelpCenterPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Help Center</h2>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Support Resources</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add your help center content here */}
            <p>Help center content coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 
import { Card, CardContent } from "@/components/ui/card"

export default function ChatPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Chat</h2>
      </div>
      <Card className="h-[calc(100vh-12rem)]">
        <CardContent className="p-0">
          {/* Add your chat interface here */}
          <p className="p-6">Chat interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
} 
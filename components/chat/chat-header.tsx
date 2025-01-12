import { Button } from "@/components/ui/button"
import { MessageCircle, Users, FileBox } from "lucide-react"

export function ChatHeader() {
  return (
    <div className="border-b p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h2 className="text-lg font-semibold">Real estate deals</h2>
        <span className="text-sm text-muted-foreground">10 members</span>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <MessageCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Users className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <FileBox className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
} 
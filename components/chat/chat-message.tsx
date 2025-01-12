import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface ChatMessageProps {
  message: string
  sender: string
  timestamp: string
  avatar: string
  isCurrentUser?: boolean
}

export function ChatMessage({ message, sender, timestamp, avatar, isCurrentUser }: ChatMessageProps) {
  return (
    <div className={cn("flex items-start space-x-2", isCurrentUser && "flex-row-reverse space-x-reverse")}>
      <Avatar className="h-8 w-8">
        <AvatarImage src={avatar} alt={sender} />
        <AvatarFallback>{sender[0]}</AvatarFallback>
      </Avatar>
      <div>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">{sender}</p>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        <div className={cn(
          "mt-1 rounded-lg p-3 text-sm",
          isCurrentUser 
            ? "bg-primary text-primary-foreground" 
            : "bg-muted"
        )}>
          {message}
        </div>
      </div>
    </div>
  )
} 
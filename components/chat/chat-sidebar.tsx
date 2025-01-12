import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChatSidebarProps {
  activeChat: string | null
  setActiveChat: (chatId: string) => void
}

export function ChatSidebar({ activeChat, setActiveChat }: ChatSidebarProps) {
  return (
    <div className="w-[300px] border-r flex flex-col">
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-8" />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-2">
          <ChatItem
            name="Real estate deals"
            lastMessage="typing..."
            timestamp="11:15"
            avatar="/avatars/group.jpg"
            isActive={activeChat === "real-estate"}
            onClick={() => setActiveChat("real-estate")}
            isGroup
          />
          {/* Add more chat items */}
        </div>
      </ScrollArea>
    </div>
  )
}

interface ChatItemProps {
  name: string
  lastMessage: string
  timestamp: string
  avatar: string
  isActive?: boolean
  isGroup?: boolean
  onClick: () => void
}

function ChatItem({ name, lastMessage, timestamp, avatar, isActive, isGroup, onClick }: ChatItemProps) {
  return (
    <div
      className={cn(
        "flex items-center space-x-4 p-2 rounded-lg cursor-pointer hover:bg-accent",
        isActive && "bg-accent"
      )}
      onClick={onClick}
    >
      <Avatar>
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className="font-medium truncate">{name}</p>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        <p className="text-sm text-muted-foreground truncate">{lastMessage}</p>
      </div>
    </div>
  )
} 
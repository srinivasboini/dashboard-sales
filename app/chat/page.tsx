"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { MessageCircle, Users, FileBox, Send, Paperclip, Smile } from "lucide-react"
import { cn } from "@/lib/utils"
import { ChatMessage } from "@/components/chat/chat-message"
import { ChatSidebar } from "@/components/chat/chat-sidebar"
import { ChatHeader } from "@/components/chat/chat-header"

export default function ChatPage() {
  const [message, setMessage] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeChat, setActiveChat] = useState<string | null>(null)

  return (
    <div className="flex h-full">
      {/* Left Sidebar */}
      <ChatSidebar activeChat={activeChat} setActiveChat={setActiveChat} />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <ChatHeader />
        
        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          <div className="space-y-4">
            <ChatMessage 
              message="Hi everyone, let's start the call soon 👋"
              sender="Kate Johnson"
              timestamp="11:24 AM"
              avatar="/avatars/kate.jpg"
            />
            <ChatMessage 
              message="Recently I saw properties in a great location that I did not pay attention to before 🏠"
              sender="Kate Johnson"
              timestamp="11:25 AM"
              avatar="/avatars/kate.jpg"
            />
            <ChatMessage 
              message="Ooo, why don't you say something more"
              sender="Evan Scott"
              timestamp="11:25 AM"
              avatar="/avatars/evan.jpg"
              isCurrentUser
            />
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Input
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1"
            />
            <Button variant="ghost" size="icon">
              <Smile className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Button size="icon" className="bg-primary text-primary-foreground">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Shared Files */}
      <div className="w-[300px] border-l p-4 hidden lg:block">
        <div className="space-y-4">
          <h3 className="font-semibold">Shared files</h3>
          <div className="space-y-4">
            {/* File type sections */}
            <FileTypeSection 
              title="Documents" 
              count={120}
              size="19.3MB"
              icon={<FileBox className="h-4 w-4" />}
            />
            {/* Add more file type sections */}
          </div>
        </div>
      </div>
    </div>
  )
}

function FileTypeSection({ title, count, size, icon }: {
  title: string
  count: number
  size: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-accent rounded-lg cursor-pointer">
      <div className="flex items-center space-x-3">
        {icon}
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{count} files, {size}</p>
        </div>
      </div>
    </div>
  )
} 
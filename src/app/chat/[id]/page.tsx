"use client"

import Chat from "@/components/Chat"
import ChatInput from "@/components/ChatInput"
import { useState } from "react";

function ChatPage() {
  const [conversations, setConversations] = useState<Conversation[]>([])
  
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Chat */}
      <Chat conversations={conversations}/>
      {/* Chat Input */}
      <ChatInput conversations={conversations} setConversations={setConversations}/> 
    </div>
  )
}

export default ChatPage

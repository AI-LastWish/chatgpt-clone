"use client"

import Chat from '@/components/Chat';
import ChatInput from '@/components/ChatInput';
import Landing from '@/components/Landing';
import { useState } from 'react';

export default function Home() {
  const [conversations, setConversations] = useState<Conversation[]>([])
  
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {conversations.length == 0 ? <Landing /> : <Chat conversations={conversations}/>}
      <ChatInput conversations={conversations} setConversations={setConversations}/> 
    </div>

  );
}

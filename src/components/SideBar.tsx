"use client"

import React, { useEffect, useState } from 'react'
import NewChat from './NewChat'
import ChatRow from './ChatRow'

type ChatProps = {
  id: number;
  question: string;
}

function SideBar() {
  const [chats, setChats] = useState<ChatProps[]>([])

  useEffect(() => {
    setChats([
      {
        id: 1,
        question: "I love the way you lie 1"
      },
      {
        id: 2,
        question: "I love the way you lie 2"
      },
      {
        id: 3,
        question: "I love the way you lie 3"
      },
      {
        id: 4,
        question: "I love the way you lie 4"
      },
    ])
  }, [])

  return (
    <div className='p-2 flex flex-col h-screen'>
      <div className='flex-1'>
        <div>
          {/* New Chat */}
          <NewChat />
          <div>
            {/* ModelSelection */}
          </div>

          {/* Map through the CharRows */}
          {chats.map(chat => (
            <ChatRow key={chat.id} id={chat.id} question={chat.question} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar

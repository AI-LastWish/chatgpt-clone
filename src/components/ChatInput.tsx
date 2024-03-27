"use client"

import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import axios from "axios";

type Conversation = {
  question: string;
  answer: string;
}

type Props = {
  conversations: Conversation[]
  setConversations: Dispatch<SetStateAction<Conversation[]>>
}

function ChatInput({ conversations, setConversations }: Props) {
  const [prompt, setPrompt] = useState("")

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    console.log("conversations", conversations)
    e.preventDefault()

    if (!prompt) return

    const input = prompt.trim()
    setPrompt("")

    const response = await axios.post('/api/answers', {
      "question": input
    })

    if (response && response.status === 200) {
      const newConversation = [...conversations, {
        question: input,
        answer: response.data.answer
      }]
      console.log("newConversation", newConversation)
      setConversations(newConversation)
    } else {
      const newConversation = [...conversations, {
        question: input,
        answer: "Something went wrong"
      }]
      setConversations(newConversation)
    }

    console.log("response", response)
  }

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message here..."
        />

        <button
          disabled={!prompt}
          type="submit"
          className="bg-[#2CA2E3] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <ArrowUpCircleIcon className="h-4 w-4" />
        </button>
      </form>
    </div>
  )
}

export default ChatInput

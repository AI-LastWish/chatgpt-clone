"use client"

import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { FormEvent, useState } from "react";

type Props = {
  id: number;
  question: string;
}

function ChatInput({ id, question }: Props) {
  const [prompt, setPrompt] = useState("")

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(!prompt) return

    const input = prompt.trim()
    setPrompt("")

    const message = {
      id: 1,
      question: input,
      createdAt: new Date().toISOString()
    }
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

      <div>
        {/* ModelSelection */}
      </div>
    </div>
  )
}

export default ChatInput

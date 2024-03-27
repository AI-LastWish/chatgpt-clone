import Chat from "@/components/Chat"
import ChatInput from "@/components/ChatInput"

type Props = {
  id: number;
  question: string;
}

function ChatPage({ id, question }: Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Chat */}
      <Chat/>
      {/* Chat Input */}
      <ChatInput/>
    </div>
  )
}

export default ChatPage

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
      <Chat id={id} question={question}/>
      {/* Chat Input */}
      <ChatInput id={id} question={question}/>
    </div>
  )
}

export default ChatPage

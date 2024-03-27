import Message from "./Message";

type Props = {
  conversations: Conversation[]
}

function Chat({ conversations }: Props) {
  return (
    <div className="flex-1">
      {conversations?.map((conversation) => (
        <>
          <Message message={conversation.question} isQuestion={true} />
          <Message message={conversation.answer} isQuestion={false} />
        </>
      ))}
    </div>
  )
}

export default Chat

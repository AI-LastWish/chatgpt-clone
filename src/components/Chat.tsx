import Message from "./Message";

type Props = {
  id: number;
  question: string;
}

const messages = [
  {
    id: 1,
    text: "Questionnnnnnnnnn 1",
    isQuestion: true
  },
  {
    id: 2,
    text: "Answerrrrrrrrrrrr 1",
    isQuestion: false
  },
  {
    id: 3,
    text: "Questionnnnnnnnnn 2",
    isQuestion: true
  },
  {
    id: 4,
    text: "Answerrrrrrrrrrrr 2",
    isQuestion: false
  },
]

function Chat({ id, question }: Props) {
  return (
    <div className="flex-1">
      {messages?.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  )
}

export default Chat

import { HiDotsHorizontal } from "react-icons/hi";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/24/outline";

type Props = {
  id: number;
  question: string;
}

function ChatRow({ id, question }: Props) {
  return (
    <Link href={`/chat/${id}`} className={`chatRow justify-center`}>
      <p className="flex-1 hidden md:!inline-flex truncate">{question}</p>
      <HiDotsHorizontal className="h-5 w-5 text-gray-700 hover:text-red-700" />
      <TrashIcon className="h-5 w-5 text-gray-700 hover:text-red-700" />
    </Link>
  )
}

export default ChatRow

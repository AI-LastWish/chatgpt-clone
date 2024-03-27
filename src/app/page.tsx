import ChatInput from '@/components/ChatInput';
import Landing from '@/components/Landing';


export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Landing />
      <ChatInput id={1} question="" />
    </div>

  );
}

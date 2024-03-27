const questionLogo = "https://res.cloudinary.com/ddbxt5caa/image/upload/v1711525663/clipart1074952_sasgie.png"
const answererLogo = "https://res.cloudinary.com/ddbxt5caa/image/upload/v1704374758/ec-001/jkz2e7ezellhgsmzmga8.png"

function Message({message}) {
  return (
    <div>
      <div className={`py-5 text-white ${message.isQuestion && "bg-[#434654]" }`}>
        <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
          <img src={`${message.isQuestion ? questionLogo : answererLogo}`} alt="" className="h-8 w-8" />
          <p className="pt-1 text-sm">{message.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Message

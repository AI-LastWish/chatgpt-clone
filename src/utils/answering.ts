import messages from "@/data/messages"

export const generateAnswer = (question: string) => {
  const questionLength = question?.trim()?.length ?? 0
  const answerLength = messages.length
  const remainder = questionLength % answerLength

  return messages[remainder].description
}
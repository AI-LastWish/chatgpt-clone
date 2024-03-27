import { generateAnswer } from "@/utils/answering"

export async function POST(request: Request) {
  const { question } = await request.json()

  if (!question) {
    return new Response(JSON.stringify({answer: "Please provide a question!"}), {
      headers: {
        "Content-Type": "application/json"
      },
      status: 400
    })
  }

  const answer = generateAnswer(question)

  return new Response(JSON.stringify(answer), {
    headers: {
      "Content-Type": "application/json"
    },
    status: 200
  })
}
import { generateAnswer } from "@/utils/answering"

export async function POST(request: Request) {
  const { question } = await request.json()
  const answer = generateAnswer(question)

  return new Response(JSON.stringify(answer), {
    headers: {
      "Content-Type": "application/json"
    },
    status: 200
  })
}
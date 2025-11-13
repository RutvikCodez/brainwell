import { NextResponse } from 'next/server'
import { connectToDB } from '@/lib/mongodb'
import Session from '@/models/session'
import User from '@/models/user'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function POST(req: Request) {
  try {
    await connectToDB()
    const { userId, transcript, startTime, endTime } = await req.json()

    const durationMinutes = (new Date(endTime).getTime() - new Date(startTime).getTime()) / 60000

    // 🧩 AI Summary (with Hindi input → English output)
    const text = transcript
      .map((t: { role: string; text: string }) => `${t.role}: ${t.text}`)
      .join('\n')

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
    const aiRes = await model.generateContent(`
You are a helpful AI mental wellness assistant analyzing a therapy conversation.

The entire conversation below may be in **Hindi or mixed language**, but your output must be **100% in English only**.  
Analyze the conversation carefully and generate a **JSON response only**, following this structure strictly:

{
  "todayMood": "a single descriptive English word for user's mood (e.g., calm, anxious, happy, lonely, hopeful)",
  "moodPercentages": {
    "positive": number (0-100),
    "neutral": number (0-100),
    "negative": number (0-100)
  },
  "summary": "a short 3–4 sentence English summary of the conversation",
  "emotionScore": number (0–10),
  "improvementPercent": number (0–100),
  "stressDownPercent": number (0–100),
  "wellnessChecklist": [
    "short English actionable wellness tip 1",
    "short English actionable wellness tip 2",
    "short English actionable wellness tip 3"
  ],
  "aiRecommendations": [
    {
      "title": "short English title of recommendation",
      "description": "1–2 sentence English explanation"
    },
    {
      "title": "short English title of recommendation",
      "description": "1–2 sentence English explanation"
    },
    {
      "title": "short English title of recommendation",
      "description": "1–2 sentence English explanation"
    },
    {
      "title": "short English title of recommendation",
      "description": "1–2 sentence English explanation"
    },
    {
      "title": "short English title of recommendation",
      "description": "1–2 sentence English explanation"
    },
    {
      "title": "short English title of recommendation",
      "description": "1–2 sentence English explanation"
    }
  ],
  "mostDiscussedTopic": "main English topic discussed (e.g., family, work, health, stress)",
  "topWords": [ "top English keywords from conversation" ],
  "topicDistribution": [
    {"topic": "Relationships", "percentage": 40},
    {"topic": "Work", "percentage": 30},
    {"topic": "Health", "percentage": 20},
    {"topic": "Self-Growth", "percentage": 10}
  ]
}

Now, analyze and respond in valid JSON **only**, without any extra text or formatting.

Conversation:
${text}
    `)

    let textResponse = aiRes.response.text()
    textResponse = textResponse.replace(/```json|```/g, '').trim()
    const result = JSON.parse(textResponse)

    const user = await User.findById(userId)
    const previousSessions = await Session.find({ userId })
    const sessionCount = previousSessions.length + 1

    const streak = sessionCount > 1 ? user.streak + 1 : 1
    const avgLast7Score =
      previousSessions.slice(-7).reduce((acc, s) => acc + (s.emotionScore || 0), 0) / 7 || 0
    const last3Summaries = previousSessions.slice(-3).map((s) => s.summary)

    const newSession = await Session.create({
      userId,
      sessionCount,
      streak,
      transcript,
      startTime,
      endTime,
      durationMinutes,
      ...result,
      avgLast7Score,
      last3Summaries,
    })

    return NextResponse.json({ success: true, session: newSession })
  } catch (error) {
    console.error('Session save error:', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}

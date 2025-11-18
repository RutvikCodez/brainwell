import { NextResponse } from 'next/server'
import { connectToDB } from '@/lib/mongodb'
import Session from '@/models/session'

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectToDB()
    const { id } = await params
    const session = await Session.findOne({ userId: id })
    const transcript = session?.transcript || []

    if (!session) {
      return NextResponse.json({ success: false, error: 'Session not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, transcript })
  } catch (error) {
    console.error('Get session by ID error:', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}

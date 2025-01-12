import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  const { name, participants } = await request.json()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const { data: chat, error } = await supabase
    .from('chats')
    .insert({ name })
    .select()
    .single()

  if (error) {
    return new NextResponse(error.message, { status: 500 })
  }

  // Add participants
  const participantRows = participants.map((participantId: string) => ({
    chat_id: chat.id,
    user_id: participantId,
  }))

  const { error: participantError } = await supabase
    .from('chat_participants')
    .insert(participantRows)

  if (participantError) {
    return new NextResponse(participantError.message, { status: 500 })
  }

  return NextResponse.json(chat)
} 
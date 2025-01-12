import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(
  request: Request,
  { params }: { params: { chatId: string } }
) {
  const supabase = createRouteHandlerClient({ cookies })
  const { content } = await request.json()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const { data: message, error } = await supabase
    .from('chat_messages')
    .insert({
      chat_id: params.chatId,
      user_id: user.id,
      content,
    })
    .select()
    .single()

  if (error) {
    return new NextResponse(error.message, { status: 500 })
  }

  return NextResponse.json(message)
} 
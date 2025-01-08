import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  const startTime = Date.now()
  console.log(`[${startTime}] API: Starting fetch for [collection]...`)

  try {
    const { data, error } = await supabase
      .from('[collection]')
      .select('*')
      .order('created_at', { ascending: false })

    const endTime = Date.now()
    console.log(`[${endTime}] API: Fetch completed in ${endTime - startTime}ms`)
    console.log('Data:', data)
    console.log('Error:', error)

    if (error) {
      console.error('Supabase Error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data || [])
  } catch (err) {
    console.error('API Error:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
} 
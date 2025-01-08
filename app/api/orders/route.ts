import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  const startTime = Date.now()
  console.log(`[${startTime}] API: Starting fetch for orders...`)

  try {
    console.log('Executing Supabase query for orders...')
    
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        customer:customers(name)
      `)
      .order('created_at', { ascending: false })

    const endTime = Date.now()
    console.log(`[${endTime}] API: Orders fetch completed in ${endTime - startTime}ms`)
    console.log('Orders count:', data?.length || 0)
    console.log('Orders query result:', { data, error })

    if (error) {
      console.error('Supabase Error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data || [])
  } catch (err) {
    console.error('Orders API Error:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
} 
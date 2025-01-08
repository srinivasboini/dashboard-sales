import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Simple query first
    const { data, error } = await supabase
      .from('products')
      .select('*')

    // Log everything for debugging
    console.log({
      url: supabase.supabaseUrl,
      hasKey: !!supabase.supabaseKey,
      data,
      error,
      count: data?.length ?? 0
    })

    if (error) {
      console.error('Supabase Error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data || [])
  } catch (err) {
    console.error('Products API Error:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
} 
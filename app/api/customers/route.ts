import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    console.log('Fetching customers...')
    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .order('created_at', { ascending: false })

    console.log('Customers Data:', data)
    console.log('Customers Error:', error)

    if (error) {
      console.error('Supabase Error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    if (!data || data.length === 0) {
      console.log('No customers found')
    }

    return NextResponse.json(data || [])
  } catch (err) {
    console.error('Customers API Error:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
} 
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseKey)

// Test connection specifically for products
async function testProductsConnection() {
  try {
    const { count, error } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Products table error:', error)
      return
    }

    console.log('Products table accessible, count:', count)

    // Test a simple query
    const { data, error: queryError } = await supabase
      .from('products')
      .select('name')
      .limit(1)

    if (queryError) {
      console.error('Products query error:', queryError)
      return
    }

    console.log('Sample product:', data?.[0])

  } catch (err) {
    console.error('Connection test failed:', err)
  }
}

// Run the test
testProductsConnection()

export { supabase } 
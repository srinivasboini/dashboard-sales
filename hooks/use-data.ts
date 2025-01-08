import useSWR from 'swr'

const fetcher = async (url: string) => {
  const startTime = Date.now()
  console.log(`[${startTime}] Fetcher: Starting fetch for ${url}...`)

  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json()
    
    const endTime = Date.now()
    console.log(`[${endTime}] Fetcher: Completed in ${endTime - startTime}ms`)
    console.log('Data:', data)
    
    return data
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export function useCustomers() {
  const { data, error, isLoading } = useSWR('/api/customers', fetcher, {
    onSuccess: (data) => console.log('Customers loaded:', data?.length || 0, 'records'),
    onError: (err) => console.error('Customers error:', err)
  })

  return { customers: data, isLoading, isError: error }
}

export function useProducts() {
  const { data, error, isLoading } = useSWR('/api/products', fetcher, {
    onSuccess: (data) => console.log('Products loaded:', data?.length || 0, 'records'),
    onError: (err) => console.error('Products error:', err)
  })

  return { products: data, isLoading, isError: error }
}

export function useOrders() {
  const { data, error, isLoading } = useSWR('/api/orders', fetcher, {
    onSuccess: (data) => console.log('Orders loaded:', data?.length || 0, 'records'),
    onError: (err) => console.error('Orders error:', err)
  })

  return { orders: data, isLoading, isError: error }
} 
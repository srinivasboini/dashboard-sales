export type Product = {
  id: string
  name: string
  description: string
  price: number
  stock: number
  category: string
  created_at: string
}

export type Customer = {
  id: string
  name: string
  email: string
  phone: string
  status: string[]
  rating: number
  orders_count: number
  total_spent: number
  last_order_date: string
  last_order_amount: number
  notes?: string
  created_at: string
}

export type Order = {
  id: string
  customer_id: string
  total_amount: number
  status: string
  shipping_address: string
  shipping_city: string
  shipping_state: string
  shipping_zip: string
  shipping_method: string
  created_at: string
  updated_at: string
}

export type OrderItem = {
  id: string
  order_id: string
  product_id: string
  quantity: number
  price: number
  created_at: string
} 
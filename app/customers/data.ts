export type CustomerStatus = 'returning' | 'vip' | 'active' | 'new' | 'banned'

export interface Customer {
  id: string
  avatar: string
  name: string
  statuses: CustomerStatus[]
  rating: number
  orders: number
  ltv: number
  lastOrder: {
    amount: number
    date: string
  }
  phone: string
  notes?: string
  favoriteItems?: string[]
}

export const customers: Customer[] = [
  {
    id: "1",
    avatar: "/avatars/carmen.jpg",
    name: "Carmen Beltrán",
    statuses: ["returning", "vip", "active"],
    rating: 4.6,
    orders: 23,
    ltv: 38900,
    lastOrder: {
      amount: 45,
      date: "3d ago"
    },
    phone: "689-954-9674",
    notes: "Likes to do larger orders. Prefer email, don't prefer phone calls.",
    favoriteItems: ["item1", "item2", "item3"]
  },
  {
    id: "2",
    avatar: "/avatars/caspar.jpg",
    name: "Caspar Sawrey",
    statuses: ["returning", "vip", "active"],
    rating: 5.0,
    orders: 12,
    ltv: 28900,
    lastOrder: {
      amount: 45,
      date: "10d ago"
    },
    phone: "482-881-5424",
    notes: "Premium customer, always pays on time.",
    favoriteItems: ["item4", "item5"]
  },
  {
    id: "3",
    avatar: "/avatars/jana.jpg",
    name: "Jana Strassmann",
    statuses: ["returning"],
    rating: 4.6,
    orders: 1,
    ltv: 23083,
    lastOrder: {
      amount: 45,
      date: "3d ago"
    },
    phone: "817-947-6604",
    notes: "New returning customer, potential for VIP status."
  },
  {
    id: "4",
    avatar: "/avatars/lilah.jpg",
    name: "Lilah Ioselev",
    statuses: ["returning", "active"],
    rating: 4.2,
    orders: 4,
    ltv: 38900,
    lastOrder: {
      amount: 45,
      date: "3d ago"
    },
    phone: "902-938-8817",
    favoriteItems: ["item1", "item6", "item7"]
  },
  {
    id: "5",
    avatar: "/avatars/oka.jpg",
    name: "Oka Tomoaki",
    statuses: ["returning"],
    rating: 4.6,
    orders: 2,
    ltv: 28900,
    lastOrder: {
      amount: 45,
      date: "3d ago"
    },
    phone: "079-663-5092"
  },
  {
    id: "6",
    avatar: "/avatars/unknown.jpg",
    name: "Unknown #9493",
    statuses: ["new", "banned"],
    rating: 1.2,
    orders: 0,
    ltv: 19029,
    lastOrder: {
      amount: 0,
      date: "None"
    },
    phone: "Unknown",
    notes: "Suspicious activity detected"
  },
  {
    id: "7",
    avatar: "/avatars/santiago.jpg",
    name: "Santiago Valentin",
    statuses: ["returning"],
    rating: 3.6,
    orders: 6,
    ltv: 23083,
    lastOrder: {
      amount: 45,
      date: "3d ago"
    },
    phone: "844-094-5873"
  },
  {
    id: "8",
    avatar: "/avatars/marcus.jpg",
    name: "Marcus Chen",
    statuses: ["vip", "active"],
    rating: 4.8,
    orders: 32,
    ltv: 52400,
    lastOrder: {
      amount: 120,
      date: "1d ago"
    },
    phone: "415-555-0123",
    notes: "Prefers premium products, frequent large orders",
    favoriteItems: ["item8", "item9", "item10", "item11"]
  },
  {
    id: "9",
    avatar: "/avatars/sophia.jpg",
    name: "Sophia Martinez",
    statuses: ["new", "active"],
    rating: 4.0,
    orders: 2,
    ltv: 1200,
    lastOrder: {
      amount: 75,
      date: "2d ago"
    },
    phone: "512-555-0234",
    notes: "Shows high potential, interested in premium membership"
  },
  {
    id: "10",
    avatar: "/avatars/aisha.jpg",
    name: "Aisha Patel",
    statuses: ["returning", "vip"],
    rating: 4.9,
    orders: 28,
    ltv: 43500,
    lastOrder: {
      amount: 220,
      date: "12h ago"
    },
    phone: "647-555-0345",
    favoriteItems: ["item12", "item13", "item14"]
  },
  {
    id: "11",
    avatar: "/avatars/lucas.jpg",
    name: "Lucas Silva",
    statuses: ["returning", "active"],
    rating: 4.3,
    orders: 15,
    ltv: 18750,
    lastOrder: {
      amount: 95,
      date: "5d ago"
    },
    phone: "213-555-0456"
  },
  {
    id: "12",
    avatar: "/avatars/emma.jpg",
    name: "Emma Thompson",
    statuses: ["banned"],
    rating: 2.1,
    orders: 3,
    ltv: 2300,
    lastOrder: {
      amount: 30,
      date: "2m ago"
    },
    phone: "Unknown",
    notes: "Account suspended due to payment issues"
  }
] 
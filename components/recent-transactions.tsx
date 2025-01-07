import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const transactions = [
  {
    id: "#847-392",
    product: "Vintage T-shirt",
    sales: 11,
    amount: "$440.03",
    status: "success"
  },
  {
    id: "#732-293",
    product: "Black T-shirt",
    sales: 3,
    amount: "$80.00",
    status: "pending"
  },
  {
    id: "#732-328",
    product: "White Polo",
    sales: 4,
    amount: "$102.03",
    status: "success"
  }
]

export function RecentTransactions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID Product</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Sales</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.id}</TableCell>
            <TableCell>{transaction.product}</TableCell>
            <TableCell>{transaction.sales}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>
              <Badge variant={transaction.status === "success" ? "success" : "warning"}>
                {transaction.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


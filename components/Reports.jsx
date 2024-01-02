"use client";

import { useStore } from "../lib/store";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { CardContent, Card } from "./ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "./ui/table";

function Reports() {
  const transactions = useStore((state) => state.transactions);
  const setTransactions = useStore((state) => state.setTransactions);

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  return (
    <>
      <h2 className="text-xl font-semibold text-left">Reports</h2>
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody className="text-left">
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.title}</TableCell>
                  <TableCell
                    className={`${
                      transaction.transactionType === "expense"
                        ? "text-rose-600"
                        : "text-green-600"
                    }`}
                  >
                    ${transaction.amount}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => handleDelete(transaction.id)}
                    >
                      <Trash strokeWidth={1} size={24} className="text-white" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}

export default Reports;

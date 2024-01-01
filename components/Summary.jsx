import { CardContent, Card, CardDescription, CardTitle } from "./ui/card";
import { useState, useEffect } from "react";

function Summary({ transactions }) {
  const [summary, setSummary] = useState({
    totalTransactions: 0,
    totalAmount: 0,
  });

  const calculateTotalAmount = () => {
    const sum = transactions.reduce((total, transaction) => {
      return transaction.transactionType === "income"
        ? total + transaction.amount
        : total - transaction.amount;
    }, 0);

    return sum;
  };

  useEffect(() => {
    const totalAmount = calculateTotalAmount();
    setSummary({
      totalTransactions: transactions.length,
      totalAmount: totalAmount,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  return (
    <>
      <h2 className="text-xl font-semibold text-left">Summary</h2>
      <Card>
        <CardContent className="flex justify-around gap-4 pt-6">
          <div className="flex flex-col gap-3">
            <CardDescription>Total Transactions</CardDescription>
            <CardTitle>{summary.totalTransactions}</CardTitle>
          </div>
          <div className="flex flex-col gap-3">
            <CardDescription>Total Amount</CardDescription>
            <CardTitle>${summary.totalAmount}</CardTitle>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default Summary;

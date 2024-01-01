"use client";
import { useState } from "react";
import EnterTransactions from "../../components/EnterTranscations";
import Summary from "../../components/Summary";
import Reports from "../../components/Reports";

function Component() {
  const [transactions, setTransactions] = useState([
    {
      id: "001",
      date: "Dec 29, 2023, 1:57 AM",
      title: "Tickets",
      amount: 1000,
      transactionType: "income",
    },
    {
      id: "002",
      date: "Dec 27,2023",
      title: "Tickets",
      amount: 500,
      transactionType: "expense",
    },
  ]);

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const handleFormSubmit = (format) => {
    console.log("Received format in parent:", format);
    setTransactions([...transactions, format]);
  };

  return (
    <main className="h-full w-full flex flex-col gap-6 pb-6">
      <h2 className="text-xl font-semibold text-left">Enter Transactions</h2>

      <EnterTransactions onFormSubmit={handleFormSubmit} />
      <Summary transactions={transactions} />
      <Reports transactions={transactions} handleDelete={handleDelete} />
    </main>
  );
}

export default Component;

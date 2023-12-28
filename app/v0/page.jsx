"use client";

import { useState } from "react";
import EnterTransactions from "../../components/EnterTranscations";
import Summary from "../../components/Summary";
import Reports from "../../components/Reports";

function Component() {
  const [summary, setSummary] = useState({
    totalTransactions: 0,
    totalAmount: 0,
  });

  const transactions = [
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
      amount: 1000,
      transactionType: "expense",
    },
  ];

  const handleFormSubmit = (format) => {
    console.log("Received format in parent:", format);
  };

  return (
    <main className="h-full w-full flex flex-col gap-6 pb-6">
      <h2 className="text-xl font-semibold text-left">Enter Transactions</h2>

      <EnterTransactions onFormSubmit={handleFormSubmit} />
      <Summary summary={summary} />
      <Reports transactions={transactions} />
    </main>
  );
}

export default Component;

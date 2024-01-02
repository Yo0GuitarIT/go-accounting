import { create } from "zustand";

const useStore = create((set) => ({
  transactions: [
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
  ],
  setTransactions: (newTransactions) => set({ transactions: newTransactions }),
}));

export { useStore };

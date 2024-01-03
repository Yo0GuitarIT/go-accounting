import { create } from "zustand";

const useStore = create((set) => ({
  userId: null,
  transactions: [],
  setTransactions: (format) => set({ transactions: format }),
  setUserId: (id) => set({ userId: id }),
}));

export { useStore };

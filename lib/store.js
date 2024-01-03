import { create } from "zustand";

const useStore = create((set) => ({
  userId: null,
  setUserId: (id) => set({ userId: id }),

  transactions: [],
  setTransactions: (format) => set({ transactions: format }),
  
  show: false,
  setShow: (state) => set({ show: state }),

  summary: [{
    totalTransactions: 0,
    totalAmount: 0,
  }],
  setSummary: (total) => set({ summary: total }),
}));

export { useStore };

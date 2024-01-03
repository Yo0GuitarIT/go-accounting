"use client";

import { useAuth } from "@clerk/nextjs";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";
import { useEffect } from "react";
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
  const { transactions, setTransactions, userId, setUserId } = useStore();
  const { getToken, destroy } = useAuth();

  const getUID = async () => {
    const auth = getAuth();
    const token = await getToken({ template: "integration_firebase" });
    const userCredentials = await signInWithCustomToken(auth, token);
    const IdFromDatabase = userCredentials.user.uid;
    setUserId(IdFromDatabase);
  };

  useEffect(() => {
    getUID();
    return destroy;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    if (userId) {
      const querySnapshot = await getDocs(collection(db, userId));
      const formatToStore = [];
      querySnapshot.forEach((doc) => {
        const id = doc.id;
        const data = doc.data();
        const format = {
          id: id,
          date: data.date,
          title: data.title,
          amount: data.amount,
          transactionType: data.transactionType,
        };
        formatToStore.push(format);
      });
      setTransactions(formatToStore);
    }
  };

  useEffect(() => {
    loadData(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const handleDelete = async (id) => {
    try {
      await deleteFromDatabase(id);
      const updatedTransactions = transactions.filter(
        (transaction) => transaction.id !== id
      );
      setTransactions(updatedTransactions);
    } catch (error) {
      console.error("Error deleting from database:", error);
    }
  };

  const deleteFromDatabase = async (id) => {
    await deleteDoc(doc(db, userId, id));
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

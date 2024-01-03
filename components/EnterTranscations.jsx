"use client";

import { useState, useEffect } from "react";
import { db } from "../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useStore } from "../lib/store";
import { CardContent, Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const generateRandomId = () => {
  const prefix = "XXX";
  const randomPart = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");
  return prefix + randomPart;
};

const getCurrentDateWithTime = () => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  const currentDateTime = new Date().toLocaleString("en-US", options);
  return currentDateTime;
};

const getIDandDate = () => {
  const transactionID = generateRandomId();
  const currentDate = getCurrentDateWithTime();
  return { transactionID, currentDate };
};

function EnterTranscations() {
  const { transactions, setTransactions, userId } = useStore();
  const [format, setFormat] = useState({
    id: "",
    date: "",
    title: "",
    amount: "",
    transactionType: "",
  });

  useEffect(() => {
    const { transactionID, currentDate } = getIDandDate();
    setFormat({ ...format, id: transactionID, date: currentDate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sentDataToDB = async (userId, format) => {
    try {
      const docRef = await addDoc(collection(db, userId), format);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleTransactionType = (value) =>
    setFormat({ ...format, transactionType: value });
  const handleTitle = (value) => setFormat({ ...format, title: value });
  const handleAmount = (value) =>
    setFormat({ ...format, amount: parseInt(value, 10) || 0 });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await sentDataToDB(userId, format);
    toast("Transaction has been created", {
      description: `${format.title} - ${format.amount} has been recorded`,
      action: {
        label: "Close",
        onClick: () => console.log("Close"),
      },
    });
    setTransactions([format, ...transactions]);
    resetForm();
  };

  const resetForm = () => {
    const { transactionID, currentDate } = getIDandDate();
    setFormat({
      ...format,
      id: transactionID,
      date: currentDate,
      title: "",
      amount: "",
      transactionType: "",
    });
  };

  return (
    <Card>
      <CardContent>
        <form className="grid gap-4 pt-6">
          <Select
            onValueChange={(value) => handleTransactionType(value)}
            value={format.transactionType}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Transaction Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="income">Income</SelectItem>
              <SelectItem value="expense">Expense</SelectItem>
            </SelectContent>
          </Select>
          <Input
            className="w-full"
            placeholder="Title"
            type="text"
            value={format.title}
            onChange={(event) => handleTitle(event.target.value)}
          />
          <Input
            className="w-full"
            placeholder="Amount"
            type="text"
            value={format.amount}
            onChange={(event) => handleAmount(event.target.value)}
          />
          <Button type="submit" onClick={handleSubmit}>
            Add Transaction
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default EnterTranscations;

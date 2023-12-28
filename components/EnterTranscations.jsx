import { useState } from "react";
import { CardContent, Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

function EnterTransitions({ onFormSubmit }) {
  const [format, setFormat] = useState({
    id: "",
    date: "",
    title: "",
    amount: "",
    transactionType: "",
  });

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

  const handleTransactionType = (value) =>
    setFormat({ ...format, transactionType: value });
  const handleTitle = (value) => setFormat({ ...format, title: value });
  const handleAmount = (value) => setFormat({ ...format, amount: value });

  const handleSubmit = (event) => {
    event.preventDefault();
    const transactionID = generateRandomId();
    const currentDate = getCurrentDateWithTime();

    setFormat({ ...format, id: transactionID, date: currentDate });

    onFormSubmit(format);
  };

  return (
    <Card>
      <CardContent>
        <form className="grid gap-4 pt-6">
          <Select onValueChange={(value) => handleTransactionType(value)}>
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
            onChange={(event) => handleTitle(event.target.value)}
          />
          <Input
            className="w-full"
            placeholder="Amount"
            type="text"
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

export default EnterTransitions;

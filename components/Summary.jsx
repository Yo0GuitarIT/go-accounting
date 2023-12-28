import { CardContent, Card, CardDescription, CardTitle } from "./ui/card";

function Summary({summary}) {
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

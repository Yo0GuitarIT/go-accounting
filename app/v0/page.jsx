import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  CardContent,
  Card,
  CardDescription,
  CardTitle,
} from "../../components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "../../components/ui/table";
import { Trash } from "lucide-react";

function Component() {
  return (
    <>
      <main className="flex flex-col gap-6 p-6">
        <h2 className="text-xl font-semibold">Enter Transactions</h2>
        <Card>
          <CardContent>
            <form className="grid gap-4 pt-6">
              <Input className="w-full" placeholder="Title" type="text" />
              <Input className="w-full" placeholder="Amount" type="text" />
              <Button type="submit">Add Transaction</Button>
            </form>
          </CardContent>
        </Card>
        <h2 className="text-xl font-semibold">Summary</h2>
        <Card>
          <CardContent className="flex gap-4 pt-6">
            <div>
              <CardDescription>Total Transactions</CardDescription>
              <CardTitle>10</CardTitle>
            </div>
            <div>
              <CardDescription>Total Amount</CardDescription>
              <CardTitle>$5000.00</CardTitle>
            </div>
          </CardContent>
        </Card>
        <h2 className="text-xl font-semibold">Reports</h2>
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
              <TableBody>
                <TableRow>
                  <TableCell>Dec 28, 2023</TableCell>
                  <TableCell>Payment</TableCell>
                  <TableCell>$500.00</TableCell>
                  <TableCell className="text-right">
                    <Button size="icon" variant="destructive">
                      <Trash strokeWidth={1} size={24} className="text-white" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </>
  );
}

export default Component;
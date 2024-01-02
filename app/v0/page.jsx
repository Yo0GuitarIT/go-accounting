import EnterTransactions from "../../components/EnterTranscations";
import Summary from "../../components/Summary";
import Reports from "../../components/Reports";

function Component() {
  return (
    <main className="h-full w-full flex flex-col gap-6 pb-6">
      <h2 className="text-xl font-semibold text-left">Enter Transactions</h2>

      <EnterTransactions  />
      <Summary />
      <Reports />
    </main>
  );
}

export default Component;

import EnterTransactions from "../../components/EnterTranscations";
import Summary from "../../components/Summary";
import Reports from "../../components/Reports";

function AccountingPage() {
  return (
    <main className=" container h-full w-full gap-6 pb-6 md:flex block">
      <div className="md:w-1/2 w-full">
        <EnterTransactions />
        <Summary />
      </div>
      <Reports />
    </main>
  );
}

export default AccountingPage;

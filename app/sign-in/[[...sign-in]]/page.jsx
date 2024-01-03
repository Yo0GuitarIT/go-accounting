import { SignIn } from "@clerk/nextjs";

function signInPage() {
  return (
    <div
      className="flex flex-col justify-center items-center w-screen"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="flex w-full justify-center">
        <SignIn appearance={{
          elements: {
            formButtonPrimary:
              "bg-slate-500 hover:bg-slate-400 text-sm normal-case",
          },
        }}/>
      </div>
    </div>
  );
}

export default signInPage;

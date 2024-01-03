import { SignUp } from "@clerk/nextjs";

function signUpPage() {
  return (
    <div
      className="flex flex-col justify-center items-center w-screen"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="flex w-full justify-center">
        <SignUp appearance={{
          elements: {
            formButtonPrimary:
              "bg-slate-500 hover:bg-slate-400 text-sm normal-case",
          },
        }}/>
      </div>
    </div>
  );
}

export default signUpPage;

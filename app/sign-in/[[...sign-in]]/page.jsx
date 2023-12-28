import { SignIn } from "@clerk/nextjs";

function signInPage() {
  return (
    <div className="flex w-full justify-center">
      <SignIn />
    </div>
  );
}

export default signInPage;

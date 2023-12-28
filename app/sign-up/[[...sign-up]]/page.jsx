import { SignUp } from "@clerk/nextjs";

function signUpPage() {
  return (
    <div className="flex w-full justify-center">
      <SignUp />
    </div>
  );
}

export default signUpPage;

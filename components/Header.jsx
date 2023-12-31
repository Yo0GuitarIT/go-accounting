import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";

export function Header() {
  const { userId } = auth();

  return (
    <nav className="w-full h-20  flex justify-center">
      <div className="container flex justify-between items-center ">
        <Link href="/" className=" text-xl font-bold">
          Go Accounting!
        </Link>

        <div className="flex items-center gap-5">
          {!userId && (
            <>
              <Link href="/sign-up">Sign up</Link>
              <Link href="/sign-in">Sign in</Link>
            </>
          )}

          {userId && (
            <>
              <UserButton afterSignOutUrl="/" />
            </>
          )}

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

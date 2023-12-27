import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";

export function Header() {
  const { userId } = auth();

  return (
    <nav className="w-full h-16 bg-blue-500 flex justify-center">
      <div className="container flex justify-between items-center px-2">
        <Link href="/" className="text-white text-xl font-bold">
          Go Accounting
        </Link>

        <div className="flex gap-4 items-center text-gray-100 hover:text-white">
          {!userId && (
            <>
              <Link href="/sign-up" >
                Sign up
              </Link>
              <Link href="/sign-in" >
                Sign in
              </Link>{" "}
            </>
          )}
          {userId && <Link href="/profile">Profile</Link>}
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
}

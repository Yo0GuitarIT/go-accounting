import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";
import { ClipboardEdit } from "lucide-react";

export function Header() {
  const { userId } = auth();

  return (
    <nav className="w-full h-20  flex justify-center">
      <div className="container flex justify-between items-center ">
        <div className="flex gap-1">
          <ClipboardEdit strokeWidth={1.5} />
          <Link href="/" className=" text-xl font-bold">
            Go Accounting!
          </Link>
        </div>

        <div className="flex items-center gap-5">
          {userId && <UserButton afterSignOutUrl="/" />}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

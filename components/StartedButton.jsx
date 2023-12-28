"use client";

import Link from "next/link";
import { Button } from "./ui/button";

function StartedButton() {
  return (
    <div className="flex gap-4 justify-center">
      <Link href="/dashboard" className="hover:text-rose-600">
        <Button>Get Started</Button>
      </Link>

      <Link href="/v0" className="hover:text-rose-600">
        <Button>test</Button>
      </Link>
    </div>
  );
}

export default StartedButton;

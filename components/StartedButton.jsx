"use client";

import Link from "next/link";
import { Button } from "./ui/button";

function StartedButton() {
  return (
    <div className="flex gap-4 justify-center">
      <Link href="/v0" >
        <Button>Get Started</Button>
      </Link>
    </div>
  );
}

export default StartedButton;

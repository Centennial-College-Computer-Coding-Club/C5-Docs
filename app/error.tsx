"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import chalk from "chalk";

const log = console.log;

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    log(`%c${error.message}`, chalk.red.bold);

  }, [error]);

  return (
    <div className="min-h-[99vh] px-2 py-8 flex flex-col gap-3 items-start">
      <div>
        <h2 className="text-5xl font-bold">Oops!</h2>
        <p className="text-muted-foreground">Something went wrong!</p>
      </div>
      <Button
        onClick={
          // NOTE: Attempt to Recover by Re-Rendering the Component
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}

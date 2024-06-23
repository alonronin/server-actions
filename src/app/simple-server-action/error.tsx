"use client";

import { Button } from "@/components/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="bg-red-100 border-red-800 text-red-500 p-4 rounded flex flex-col gap-4 items-start">
      {error.message}

      <Button onClick={() => reset()}>Back</Button>
    </div>
  );
}

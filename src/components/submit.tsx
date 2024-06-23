"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/button";

export function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      Submit {JSON.stringify(pending)}
    </Button>
  );
}

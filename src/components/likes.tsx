"use client";

import { Button } from "@/components/button";
import { usePathname } from "next/navigation";
import { addLikesAction } from "@/actions";
import { useTransition } from "react";

export function Likes({ likes }: { likes: any[] }) {
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  return (
    <Button
      disabled={pending}
      onClick={() =>
        startTransition(async () => await addLikesAction({ url: pathname }))
      }
    >
      Likes {likes.length}
    </Button>
  );
}

"use client";

import { Input } from "@/components/input";
import { Form } from "@/components/form";
import { Submit } from "@/components/submit";
import { addUserWithStateAction } from "@/actions";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function UserForm() {
  const router = useRouter();

  const [state, action] = useFormState(addUserWithStateAction, {});

  useEffect(() => {
    if (state.success) router.refresh();
  }, [state.success]);
  return (
    <>
      {state.errors && (
        <div className="bg-red-100 border-red-800 text-red-800 p-4 rouned">
          <ul className="felx felx-col">
            {state.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <Form action={action}>
        <Input type="text" name="name" placeholder="Name" />
        <Input type="email" name="email" placeholder="Email" />
        <input type="hidden" name="url" value="/server-action-client-form" />

        <Submit />
      </Form>
    </>
  );
}

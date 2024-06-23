import { Input } from "@/components/input";
import { Form } from "@/components/form";
import { redirect } from "next/navigation";
import { Submit } from "@/app/simple-server-action/submit";
import { addUserAction } from "@/actions";

export function UserForm() {
  return (
    <Form action={addUserAction}>
      <Input type="text" name="name" placeholder="Name" />
      <Input type="email" name="email" placeholder="Email" />
      <input type="hidden" name="url" value="/simple-server-action" />
      <Submit />
    </Form>
  );
}

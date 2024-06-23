"use client";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Form } from "@/components/form";

export function UserForm() {
  function handleSubmit(formData: FormData) {
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <Form action={handleSubmit}>
      <Input type="text" name="name" placeholder="Name" />
      <Input type="email" name="email" placeholder="Email" />

      <Button type="submit">Submit</Button>
    </Form>
  );
}

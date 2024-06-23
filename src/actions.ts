"use server";

import { redirect } from "next/navigation";

export async function addUserAction(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const url = formData.get("url");

  if (!name || !email) {
    throw new Error("Name and email are required");
  }
  await fetch(`${process.env.API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  });

  redirect((url ?? "/") as string);
}

export async function addUserWithStateAction(
  initialState: any,
  formData: FormData,
): Promise<{
  success?: boolean;
  errors?: string[];
}> {
  const name = formData.get("name");
  const email = formData.get("email");

  if (!name || !email) {
    return {
      errors: ["Name is required", "Email is required"],
    };
  }

  try {
    await fetch(`${process.env.API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
  } catch (error) {
    if (error) return { errors: [error.toString()] };
  }

  return { success: true };
}

export async function addLikesAction({ url }: { url: string }) {
  await fetch(`${process.env.API_URL}/likes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
    }),
  });

  redirect(url);
}

export async function removeUserAction(userId: string) {
  await fetch(`${process.env.API_URL}/users/${userId}`, {
    method: "DELETE",
  });

  redirect("/simple-server-action");
}

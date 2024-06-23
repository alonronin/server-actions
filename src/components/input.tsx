import { ComponentProps } from "react";

export function Input({ type = "text", ...props }: ComponentProps<"input">) {
  return (
    <input
      type={type}
      className="px-4 py-2 bg-white text-black rounded"
      {...props}
    />
  );
}

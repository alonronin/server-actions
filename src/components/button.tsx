import { ComponentProps } from "react";

export function Button(props: ComponentProps<"button">) {
  return (
    <button
      className="rounded px-2 py-4 bg-white text-black hover:bg-gray-200 disabled:bg-gray-500"
      {...props}
    />
  );
}

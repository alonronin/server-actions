import { ComponentProps } from "react";

export function Form(props: ComponentProps<"form">) {
  return <form className="flex flex-col gap-4" {...props} />;
}

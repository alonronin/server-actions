import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold">Server Actions!</h1>

      <div className="flex flex-col gap-4">
        <Link href={"/client-action"}>Client Action</Link>
        <Link href={"/simple-server-action"}>Simple Server Action</Link>
        <Link href={"/server-action-client-form"}>
          Server Action with client form
        </Link>
      </div>
    </>
  );
}

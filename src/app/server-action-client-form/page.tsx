import { UserForm } from "./form";

export default async function Page() {
  const users = await fetch(`${process.env.API_URL}/users`, {
    cache: "no-cache",
  }).then((res) => res.json());
  return (
    <>
      <h1 className="text-4xl font-bold">Simple Server Actions!</h1>

      {users.map((user: { id: string; name: string; email: string }) => (
        <div key={user.id} className="flex gap-2">
          <p>{user.name}</p>
          <p>({user.email})</p>
        </div>
      ))}

      <UserForm />
    </>
  );
}

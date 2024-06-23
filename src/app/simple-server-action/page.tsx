import { UserForm } from "./form";
import { Likes } from "@/components/likes";
import { removeUserAction } from "@/actions";
import { remove } from "@jridgewell/set-array";

export default async function Page() {
  const users = await fetch(`${process.env.API_URL}/users`, {
    cache: "no-cache",
  }).then((res) => res.json());

  const likes = await fetch(
    `${process.env.API_URL}/likes?url=/simple-server-action`,
    {
      cache: "no-cache",
    },
  ).then((res) => res.json());
  return (
    <>
      <h1 className="text-4xl font-bold">
        Simple Server Actions! <Likes likes={likes} />
      </h1>

      <form>
        {users.map((user: { id: string; name: string; email: string }) => {
          const action = removeUserAction.bind(null, user.id);
          return (
            <div key={user.id} className="flex gap-2 items-center">
              <button
                formAction={action}
                className="hover:bg-red-300 bg-red-100 text-red-800 border-red-800 border rounded px-4 py-2 font-bold"
              >
                X
              </button>
              <p>{user.name}</p>
              <p>({user.email})</p>
            </div>
          );
        })}
      </form>

      <UserForm />
    </>
  );
}

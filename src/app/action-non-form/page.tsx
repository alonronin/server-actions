import { Likes } from "@/components/likes";

export default async function Page() {
  const likes = await fetch(
    `${process.env.API_URL}/likes?url=/action-non-form`,
    {
      cache: "no-cache",
    },
  ).then((res) => res.json());
  return <Likes likes={likes} />;
}

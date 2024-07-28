import { getSortedPostsData } from "../lib/posts";

export async function generateStaticParams() {
  const allPostsData = await getSortedPostsData();

  return allPostsData.map((post) => {
    return {
      params: {
        slug: post.id,
      },
    };
  });
}

export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}

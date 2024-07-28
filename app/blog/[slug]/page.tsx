import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { getPostData } from "../../../lib/posts";

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

type PostData = {
  title: string;
  date: string;
  contentHtml: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.slug);

  return {
    title: postData.title,
  };
}

// export async function generateStaticParams() {
//   const files = fs.readdirSync(postsDirectory);

//   const allPostsData = files.map((fileName) => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, "");

//     // Read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf8");

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     // Combine the data with the id
//     return {
//       id,
//       data: matterResult.data,
//     };
//   });

//   return allPostsData.sort((a, b) => {
//     if (a.data["date"] < b.data.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }

export default async function Page({ params }) {
  const { slug } = params;

  const postData = await getPostData(slug);

  return (
    <>
      {/* Post Title */}
      <h1 className='font-extrabold text-3xl mb-1'>{postData.title}</h1>

      <div className='text-gray-500 font-medium mb-5'>
        <div> {postData.date} </div>
      </div>

      {/* Post Content */}
      <div
        className='text-gray-600'
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </>
  )
}

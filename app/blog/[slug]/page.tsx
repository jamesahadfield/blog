import { getPostData, getSortedPostsData } from "../../../lib/posts";

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

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.slug);

  return {
    title: postData.title,
  };
}

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

export default async function Page({ params }) {
  const { slug } = params;

  const postData = await getPostData(slug);

  return (
    <>
      {/* Post Title */}
      <h1 className="font-extrabold text-3xl mb-1">{postData.title}</h1>

      <div className="text-gray-500 font-medium mb-5">
        <div> {postData.date} </div>
      </div>

      {/* Post Content */}
      <div
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </>
  );
}

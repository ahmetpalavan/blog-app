import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";

const query = groq`
*[_type='post']{
  ...,
  author->
  categories[]->
} | order(_createdAt desc)
`;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={(
        <div role="status">
          <p className="text-center text-[#f7ab0a] animate-pulse">
            Loading Preview Data...
          </p>
        </div>
      )}>
        <PreviewBlogList />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return (
    <div>
      <h1>Not in Preview Mode</h1>
    </div>
  );
}

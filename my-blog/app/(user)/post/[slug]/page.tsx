/** @format */

import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import { client } from "../../../../lib/sanity.client";
import { urlFor } from "../../../../lib/urlfor";

type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      ...,
      author->,
      categories[]->
    }
  `;
  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-20 pb-28">
      <section className="space-y-2 border border-[#f7ab0a] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image src={urlFor(post.mainImage).url()} alt={post.author.name} className="object-cover mx-auto object-center" fill />
          </div>
          <section className="p-5 bg-[#f7ab0a] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div>
                <Image className="rounded-full" src={urlFor(post.author.image).url()} alt={post.author.name} width={40} height={40} />
                <div className="w-64">
                  <p className="text-lg font-bold">{post.author.name}</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="italic pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                  {post.categories.map((category)=>(
                     <p key={post._id} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                      {category.title}
                     </p> 
                  ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}

export default Post;

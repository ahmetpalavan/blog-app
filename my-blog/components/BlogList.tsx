import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/urlfor";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div >
      <hr className="border border-[#f7ab0a] mb-10" />
      <div>
        {posts.map((post) => (
          <div key={post._id} className="flex flex-col group cursor-pointer">
            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              {post.mainImage && (
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
              )}
              <div className="absolute bottom-0 w-full bg-opacity-20 bg-black items-center backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                <div>
                  <p className="font-bold">{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row md:gap-x-2 gap-y-2 items-center ">
                  {post.categories.map(category=>(
                    <div className="bg-[#f7ab0a] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                      <p>{category.title}</p>
                    </div>
                  ))}        
                </div>
              </div>
            </div>
            <div className="mt-1 flex-1">
              <p className="underline text-lg font-bold">{post.title}</p>
              <p className="text-gray-500">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;

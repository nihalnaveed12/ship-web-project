
import Link from "next/link";
import { Metadata } from "next";
import { Blogs } from "@/data/blog";

export const metadata: Metadata ={
  title: "Blogs - Paphos Sea Cruises",
  description: "Explore our blogs and articles about the best cruise destinations, tips, and more.",
  keywords: "blogs, articles, Paphos, Cyprus, cruise tips, travel advice",
}


export default function BlogsPage() {
  return (
    <div className="">
      <div className="relative top-10 bottom-10 ">
        <img
          src="/backgrounds/blue.jpg"
          alt="Blue wave background"
          className="h-[400px] w-full mb-14"
        />

        {/* Tours Title */}
        <div className="absolute inset-0 flex items-center justify-start px-8 sm:px-16 md:px-24 lg:px-32">
          <h1 className="text-white text-4xl md:text-6xl font-sans font-bold">
            Blogs & Articles
          </h1>
        </div>
      </div>

      <div className="grid sm:grid-cols-2  max-w-6xl mx-auto px-4  gap-x-8 gap-y-16 pb-12">
        {Blogs.map((blog, index) => (
          <Link  href={`/blogs/${blog.slug}`} className="flex flex-col gap-3 shadow-md pb-4 " key={index}>
            <div className="overflow-hidden  aspect-video  rounded-[20px] relative">
              <img
                src={blog.img}
                height={1000}
                width={1000}
                alt={blog.title}
                className="transition-transform hover:scale-110 duration-500 object-cover object-center  relative"
              />
            </div>
            
              <div className="rounded-full border border-blue-800 font-sans w-[55px] px-2 text-center mx-2">
                Blog
              </div>
              <h1  className="text-2xl font-semibold font-sans mx-2">
                {blog.title}
              </h1>
              <p className="text-[10px] font-sans text-zinc-500 mx-2">
               {blog.content.map((content , index) => (
                <div className="" key={index}>
                    {content.type === "paragraph-1" ? (
                      <p>{content.value}</p>
                    ) : (
                      <div className=""></div>
                    )} 
                </div>
               ))}
              </p>
            
          </Link>
        ))}
      </div>
    </div>
  );
}

import { Blogs } from "@/data/blog";

import Link from "next/link";

export default function RecentPosts() {
  return (
    <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold font-sans">Recent Posts</h1>
        <div className="flex flex-col gap-10">

      {Blogs.map((blog, index) => (
        <Link href={`/blogs/${blog.slug}`} className="flex gap-4 items-center" key={index}>
          <img
            src={blog.img}
            alt={blog.title}
            height={1000}
            width={1000}
            className="rounded-[12px] w-[100px] h-[100px]  object-cover"
          />
          <h1 className=" font-semibold font-sans">{blog.title}</h1>
        </Link>
      ))}
        </div>
    </div>
  );
}

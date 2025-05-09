import { BlogContent } from "@/components/blogs/BlogContent";
import { BlogHeader } from "@/components/blogs/BlogHeader";
import RecentPosts from "@/components/blogs/recent-posts";
import { Blogs } from "@/data/blog";


// Static generation ke liye
export async function generateStaticParams() {
  return Blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogsDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const blog = Blogs.find((b) => b.slug === slug);
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="pb-16">
      <div className="relative ">
        <img
          src="/backgrounds/blue.jpg"
          alt="Blue wave background"
        
          className="h-[300px] w-full"
          
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 flex md:flex-row flex-col gap-10 font-sans">
        <div className="md:w-[65%] flex flex-col gap-4 ">
          <BlogHeader title={blog.title} img={blog.img} />
          <BlogContent content={blog.content} />
        </div>
        <div className="md:w-[35%]">
          <RecentPosts />
        </div>
      </div>
    </div>
  );
}

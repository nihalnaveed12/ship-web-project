import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Best Months to Cruise in Cyprus: A Year-Round Guide",
    content:
      "The Mediterranean is an attractive area comprising approximately 20 countries in Southern Europe and North Africa, bordered by...",
    image: "/blogs/blog1.jpg",
    category: "BLOG",
  },
  {
    id: 2,
    title: "Approval Granted for New Marina and Cruise Ship Dock in Paphos",
    content:
      "The Cabinet has given approval for a new marina and cruise ship pier in Paphos, as announced by...",
    image: "/blogs/blogs1.jpg",
    category: "BLOG",
  },
  {
    id: 3,
    title: "Top 10 Mediterranean Cruise Destinations",
    content:
      "Discover the most beautiful ports and islands that make Mediterranean cruises so popular among travelers seeking...",
    image: "/blogs/blogs3.jpg",
    category: "BLOG",
  },
  {
    id: 4,
    title: "Cruise Ship Safety Protocols: What You Need to Know",
    content:
      "Modern cruise ships implement rigorous safety measures to ensure passenger wellbeing. From emergency drills to...",
    image: "/blogs/blogs4.jpg",
    category: "BLOG",
  },
];

export default function BlogsPage() {
  return (
    <div className="">
      <div className="relative h-[450px] ">
        <Image
          src="/backgrounds/blue.jpg"
          alt="Blue wave background"
          fill
          className=""
          priority
        />

        {/* Tours Title */}
        <div className="absolute inset-0 flex items-center justify-start px-8 sm:px-16 md:px-24 lg:px-32">
          <h1 className="text-white text-4xl md:text-6xl font-sans font-bold">
            Blogs & Articles
          </h1>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 max-w-6xl mx-auto px-4  gap-x-8 gap-y-16 pb-12">
        {blogPosts.map((blog, index) => (
          <div className="flex flex-col gap-3 shadow-md pb-4 " key={index}>
            <div className="overflow-hidden  aspect-video  rounded-[20px] relative">
              <Image
                src={blog.image}
                height={1000}
                width={1000}
                alt={blog.title}
                className="transition-transform hover:scale-110 duration-500 object-cover object-center  relative"
              />
            </div>
            
              <div className="rounded-full border border-blue-800 font-sans w-[55px] px-2 text-center mx-2">
                Blog
              </div>
              <h1 className="text-2xl font-semibold font-sans mx-2">
                {blog.title}
              </h1>
              <p className="text-[10px] font-sans text-zinc-500 mx-2">
                {blog.content}
              </p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";

const Blogs = [
  {
    title: "Approval Garandted for New Marina and Cruise Ship Dock in Paphos",
    desc: "The Cabinet has given approval for a new marina and cruise ship pier in Paphos, as announced by Tourism Minister Savvas Perdios. This development, which includes a hotel, marina,...",
  },
  {
    title: "Approval Garandted for New Marina and Cruise Ship Dock in Paphos",
    desc: "The Cabinet has given approval for a new marina and cruise ship pier in Paphos, as announced by Tourism Minister Savvas Perdios. This development, which includes a hotel, marina,...",
  },
  {
    title: "Approval Garandted for New Marina and Cruise Ship Dock in Paphos",
    desc: "The Cabinet has given approval for a new marina and cruise ship pier in Paphos, as announced by Tourism Minister Savvas Perdios. This development, which includes a hotel, marina,...",
  },
  {
    title: "Approval Garandted for New Marina and Cruise Ship Dock in Paphos",
    desc: "The Cabinet has given approval for a new marina and cruise ship pier in Paphos, as announced by Tourism Minister Savvas Perdios. This development, which includes a hotel, marina,...",
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
        {Blogs.map((blog, index) => (
          <div className="flex flex-col gap-2 shadow-md pb-2 " key={index}>
            <Image
              src={"/blogs1.jpg"}
              height={1000}
              width={1000}
              alt={blog.title}
              className=""
            />

            <div className="rounded-full border border-blue-800 font-sans w-[55px] px-2 text-center mx-2">
              Blog
            </div>
            <h1 className="text-2xl font-semibold font-sans mx-2">{blog.title}</h1>
            <p className="text-[10px] font-sans text-zinc-500 mx-2">{blog.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

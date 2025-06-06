
import { destinations } from "@/data/destinations";

// ✅ Static params for static export
export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.href.replace("/destinations/", ""), // adjust if your href looks different
  }));
}

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const destination = destinations.find((dest) => dest.href.includes(slug));

  if (!destination) {
    return <div className="pt-24">Destination not found</div>;
  }

  return (
    <div>
     <div className="relative top-10 bottom-10 ">
        <img
          src="/backgrounds/blue.jpg"
          alt="Blue wave background"
          className="h-[400px] w-full mb-14"
        />

        {/* Tours Title */}
        <div className="absolute inset-0 flex items-center justify-start px-8 sm:px-16 md:px-24 lg:px-32">
          <h1 className="text-white text-4xl md:text-6xl font-sans font-bold">
           {destination.title}
          </h1>
        </div>
      </div>

      <div className="font-sans max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 pb-16 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-semibold">Explore {destination.title}</h1>
            <p className="text-zinc-500 text-xl">{destination.desc}</p>
          </div>

          <div>
            <img
              src={destination.src}
              alt={destination.title}
              height={1000}
              width={1000}
            />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center pb-10">
          Why Visit {destination.title}
        </h1>
        <div className="grid md:grid-cols-2 gap-6 pb-16 items-center">
          <p className="text-zinc-500">{destination.maindesc}</p>
          <p className="text-zinc-500">{destination.maindesc2}</p>
          <p className="text-zinc-500">{destination.maindesc3}</p>
          <p className="text-zinc-500">{destination.maindesc4}</p>
        </div>
      </div>
    </div>
  );
}

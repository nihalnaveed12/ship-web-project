import Link from "next/link";
import { destinations } from "@/data/destinations";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Destinations - Paphos Sea Cruises",

  description: "Explore the stunning destinations with our exclusive tours. Experience the beauty of Cyprus like never before.",

  keywords: "Destinations, Cyprus, tours, cruises, travel, adventure",
}





export default function Destinations() {
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
            Destinations
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pb-12">
        <div className="w-[80%] mx-auto flex flex-col gap-3 font-sans">
          <h1 className="text-4xl font-bold ">Must see Getaways</h1>
          <p className="text-sm text-zinc-500">
            Paphos Sea Cruises offer an unparalleled opportunity to explore
            stunning destinations while enjoying the luxury and comfort of a
            floating resort. Here are some must-see gateways for sea cruises,
            each with its own unique charm and allure:{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto pt-10 gap-7">
          {destinations.map((dest, index) => (
            <div className="flex flex-col gap-2 mb-4 " key={index}>
              <img
                src={dest.src}
                alt={dest.title}
                height={1000}
                width={1000}
                className="rounded-[20px]"
              />
              <h1 className="text-3xl font-sans ">{dest.title}</h1>
              <p className="text-sm text-zinc-500">{dest.desc}</p>
              <Link className="px-4 py-2 bg-[#0A71B8] text-white w-[120px] text-center rounded-[5px]" href={dest.href}>Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import RecentPosts from "@/components/blogs/recent-posts";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blue Lagoon - Paphos Sea Cruises",
  description: "Explore the stunning Blue Lagoon with our exclusive tours. Experience the beauty of Cyprus like never before.",
}


export default function Page() {
  type Locations = {
    name: string;
    para1: string;
    para2: string;
    img: string;
    para3?: string;
    slug: string;
  };

  const blueLagoon: Locations[] = [
    {
      name: "Full Day Blue Lagoon Cruise",
      para1:
        "Embark on a day of opulence and discovery with Sea Stars Blue Lagoon iconic full-day cruise  the only vessel that sails from Paphos to Latchi Harbour. Experience seamless transfers from your Paphos hotel to the tranquil Paphos Harbour (optional), setting the tone for an unforgettable journey.",
      para2:
        "Aboard our lavish three-deck yacht, sail towards exclusive destinations including Coral Bay, Sea Caves, St Georges Island, Akamas, Cape Arnaouti, the original Blue Lagoon, and Latchi Harbour. Immerse yourself in crystal-clear waters during refreshing swim stops, relish delectable canapés, a sumptuous buffet meal, and unlimited local drinks from our open bar.",
      para3:
        "Enjoy complimentary Wi-Fi, live entertainment, and curated features for your ultimate pleasure. Sea Stars Blue Lagoon all-inclusive cruise is not just a voyage; its an exceptional exploration of the enchanting beauty of the west coastline of Cyprus.",
      img: "/tours/tour11.jpg",
      slug: "full-day-blue-lagoon-cruise",
    },

    {
      name: "Blue Lagoon Round Trip",
      para1:
        "Begin your journey with the convenience of our complimentary transfer service, ensuring a seamless transition from your Paphos hotel to the serene Latchi harbour the only vessel that sails from Latchi to Paphos. Set sail on an unforgettable adventure with our luxurious three-deck yacht for a memorable cruise experience!",
      para2:
        "Depart from the scenic Latchi Harbour, cruising towards Aphrodites Baths and the renowned Blue Lagoon. Immerse yourself in the crystal-clear waters during our first swim stop  a perfect start to a day. Indulge in delicious canapés, a sumptuous buffet meal, and unlimited local drinks from our open bar. Swim, sunbathe, and enjoy the scenic views as we cruise along the beautiful coastline  an all-inclusive cruise package offers the perfect day of relaxation and exploration.",
      para3:
        "Cruise Highlights: Scenic Wonders: Glide past Cape Arnaouti, trace the stunning Akamas coastline, and discover the allure of St Georges Island. Marvel at the enchanting Sea Caves, bask in the beauty of Coral Bay, and conclude your journey at the captivating Paphos Harbour.",
      img: "/tours/tour6.jpg",
      slug: "blue-lagoon-round-trip",
    },

    {
      name: "Blue Lagoon Afternoon",
      para1:
        "Embark on an enchanting voyage with our complimentary hotel transfer service, whisking you directly from your accommodation to the captivating Latchi Harbour.",
      para2:
        "Cruise through the mesmerizing Aphrodites Baths and anchor at the renowned Blue Lagoon for an immersive swim stop. Crafted for sightseeing, relaxation, and sun-soaked moments, our journey navigates through Cypruss most famous scenic region.",
      para3:
        "Indulge in a delectable buffet meal and seasonal fruits during the swim stop, complemented by our open bar offering an array of local drinks. Secure your spot for an unforgettable Lagoon escape.",
      img: "/tours/pop-tours.jpg",
      slug: "blue-lagoon-afternoon",
    },

    {
      name: "Blue Lagoon Morning",
      para1:
        "Embark on an enchanting voyage with our complimentary hotel transfer service, whisking you directly from your accommodation to the captivating Latchi Harbour.",
      para2:
        "Cruise through the mesmerizing Aphrodites Baths and anchor at the renowned Blue Lagoon for an immersive swim stop. Crafted for sightseeing, relaxation, and sun-soaked moments, our journey navigates through Cypruss most famous scenic region.",
      para3:
        "Indulge in a delectable buffet meal and seasonal fruits during the swim stop, complemented by our open bar offering an array of local drinks. Secure your spot for an unforgettable Lagoon escape.",
      img: "/tours/tour5.jpeg",
      slug: "blue-lagoon-morning",
    },

    {
      name: "Celebrity Blue Lagoon Afternoon",
      para1:
        "Experience the epitome of luxury with our complimentary transfers from Paphos to Latchi harbour, where you will embark on a remarkable journey aboard our state-of-the-art mega yacht.",
      para2:
        "Departing from the charming Latchi harbour, you will be enveloped by the awe-inspiring beauty of the Mediterranean Sea, passing by the legendary Aphrodites Baths, a site rich in mythology and history.",
      para3:
        "Our voyage continues to the renowned Blue Lagoon, offering the perfect opportunity to luxuriate in a revitalizing swim in the pristine, azure waters. This day is dedicated to relaxation, sightseeing, and basking in the sun as we sail through one of Cypruss most magnificent regions. Join us for a day of opulence and leisure as we treat you to an unforgettable excursion along the captivating coast of Latchi.",
      img: "/tours/pop-tours.jpg",
      slug: "celebrity-blue-lagoon-afternoon",
    },

    {
      name: "Celebrity Blue Lagoon Morning",

      para1:
        "Experience the epitome of luxury with our complimentary transfers from Paphos to Latchi harbour, where you will embark on a remarkable journey aboard our state-ofthe-art mega yacht.",
      para2:
        "Departing from the charming Latchi harbour, you will be enveloped by the awe-inspiring beauty of the Mediterranean Sea, passing by the legendary Aphrodites Baths, a site rich in mythology and history.",
      para3:
        "Our voyage continues to the renowned Blue Lagoon, offering the perfect opportunity to luxuriate in a revitalizing swim in the pristine, azure waters. This day is dedicated to relaxation, sightseeing, and basking in the sun as we sail through one of Cypruss most magnificent regions. Join us for a day of opulence and leisure as we treat you to an unforgettable excursion along the captivating coast of Latchi.",
      img: "/tours/tour4.jpg",
      slug: "celebrity-blue-lagoon-morning",
    },
  ];

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
            Blue Lagoon
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex gap-10 pb-10">
        <div className="md:w-[65%] px-4 flex flex-col gap-10">
          {blueLagoon.map((location, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <Image
                src={location.img}
                alt={location.name}
                height={1000}
                width={1000}
                className="rounded-[12px]"
              />
              <Link
                href={`/tours/${location.slug}`}
                className="text-3xl font-semibold font-sans"
              >
                {location.name}
              </Link>
              <div className="text-[14px] font-sans flex flex-col gap-3 text-zinc-500">
                <p>{location.para1}</p>
                <p>{location.para2}</p>
                <p>{location.para3}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-[35%] ">
          <RecentPosts />
        </div>
      </div>
    </div>
  );
}

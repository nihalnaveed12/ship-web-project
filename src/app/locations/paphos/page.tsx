import RecentPosts from "@/components/blogs/recent-posts";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Paphos - Paphos Sea Cruises",
  description: "Explore the stunning Paphos with our exclusive tours. Experience the beauty of Cyprus like never before.",
  keywords: "Paphos, Cyprus, tours, cruises, travel, adventure",
  authors: [{ name: "Paphos Sea Cruises" }],
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

  const paphosLocations: Locations[] = [
    {
      name: "Vision Day Cruise",
      para1:
        "Embark on a unique Mediterranean adventure aboard Europe’s largest luxury coastal cruiser, designed for the enjoyment of the entire family. Indulge in the extraordinary facilities, including an exhilarating slide, an enchanting lower deck aquarium offering mesmerizing views into the depths of the Mediterranean, and exclusive sunbeds for ultimate relaxation under the sun.",
      para2:
        "Take pleasure in a refreshing swim stop amidst crystal-clear blue waters, followed by a delectable barbecue lunch prepared by our expert chefs on board, complemented by an array of fresh seasonal fruits. Immerse yourself in the experience as you savor unlimited local alcoholic and non-alcoholic drinks from our open bar.",
      img: "/tours/tour7.jpg",
      slug: "vision-day-cruise",
    },
    {
      name: "VIP Cruise",
      para1:
        "Embark on a day of unparalleled luxury as your VIP experience commences with seamless transfers to and from your hotel.",
      para2:
        "This thoughtful touch sets the tone for an exceptional day, ensuring your maritime adventure begins and ends with the utmost convenience and sophistication. Tailored exclusively for adults, VIP Cruising offers a unique and elevated experience on the Mediterranean Sea aboard the exclusive Ocean Flyer yacht.",
      para3:
        "With a limited guest count capped at 75 passengers on a yacht licensed for 150, every moment is designed for intimacy, indulgence, and the epitome of maritime luxury. Join us for a truly unique Mediterranean experience, where VIP begins the moment you step aboard.",
      img: "/tours/tour8.jpg",
      slug: "vip-cruise",
    },

    {
      name: "Pirates Adventure",
      para1:
        "Ahoy, shipmates! Raise the sails and embark on a seafaring adventure along the scenic shore of Paphos (Atlantida Bay).",
      para2:
        "Our family-friendly cruise is brimming with excitement, inviting buccaneers young and old to delight in our thrilling Pirate Show. As the grownups enjoy a day of relaxation, our younger sailors will be captivated by a bounty of entertainment.",
      para3:
        "Set sail with us for a day of fun-filled pirate antics on the only Pirate Ship in Paphos!",
      img: "/tours/tour9.jpg",
      slug: "pirates-adventure",
    },

    {
      name: "Fireworks Show & Dance Night",
      para1:
        "Welcome aboard this Show & Dance night cruise with fireworks  probably the best night out in Paphos! Get ready for an exclusive singing and dancing international show by our experienced entertainment team only available on board the Ocean Vision along with an exceptional dinner experience freshly prepared by our professional chef on board.",
      para2:
        "On the Ocean Vision, the largest coastal cruiser in Europe, you all experience the pioneers in fireworks night cruises. Enjoy waitress service, live music from our talented performers, an exclusive musical dancing show. And do not forget about the open bar and delicious desserts!",
      para3:
        "Take in the breathtaking sunset views and get ready for a stunning fireworks display. Be sure to bring your cameras to save this memorable, unique experience. Get ready to dance, sing, and enjoy an unforgettable night on the water. We can’t wait to show you a great time on our cruise!",
      img: "/tours/tour2.jpg",
      slug: "fireworks-show-dance-night",
    },
    {
      name: "Coral Express Cruise",
      para1:
        "Embark on a picturesque journey along the stunning Paphos coastline, embracing the allure of Coral Bay, the mesmerizing Sea Caves, and the enchanting St Georges Island. Revel in the tranquility of the crystal-clear waters during our refreshing swim stop, offering the perfect opportunity for a dip or leisurely sunbathing on deck.",
      para2:
        "Indulge in a delightful buffet meal and savor seasonal fresh fruit, all while surrounded by the breathtaking maritime landscape. Our open bar presents a selection of local alcoholic and non-alcoholic beverages, ensuring your every moment is accompanied by the finest tastes.",
      para3:
        "Join us on this coastal odyssey, where the beauty of Paphos unfolds at every turn, creating memories as vibrant as the azure seas you all traverse.",
      img: "/tours/tour10.jpg",
      slug: "coral-express-cruise",
    },
    {
      name: "Cyprus & International Show Night with Fireworks",
      para1:
        "Embark on an unforgettable voyage towards Riccos Bay aboard the Ocean Vision, Europes most luxurious coastal cruiser. As the sun begins its majestic descent, ensure your cameras are poised to capture the stunning Paphos sunset, a spectacle of natures beauty. This night cruise is not just an outing—its the pinnacle of Paphos nightlife!",
      para2:
        "Prepare for an evening brimming with entertainment as our experienced team delivers an exclusive international singing and dancing show, found only aboard this vessel. Your culinary journey will be just as thrilling, with a sumptuous dinner freshly prepared by our professional onboard chef. As the night unfolds, the vibrant beats of live traditional Cypriot music invite you to dance under the stars, adding a touch of local culture to your experience.",
      para3:
        "Sip on a selection from our open bar and indulge in delicious desserts as the evening sky prepares to dazzle you with a spectacular fireworks display—a crowning glory to this enchanting evening. The Ocean Vision is not only a ship but a destination in itself, renowned for setting the standard in fireworks night cruises. With waitress service catering to your every need and talented performers setting the stage alive, every moment is designed for your delight. Experience the magic of the Mediterranean: the golden hues of sunset, the melody of music, and the grandeur of fireworks illuminating the night sky. Join us for an evening where elegance, culture, and entertainment converge on the tranquil waters of Paphos.",
      img: "/tours/tour3.jpg",
      slug: "cyprus-international-show-night-with-fireworks",
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
            Paphos
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-10 flex gap-10 flex-col md:flex-row">
        <div className="md:w-[65%]  flex flex-col gap-10">
          {paphosLocations.map((location, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <Image
                src={location.img}
                alt={location.name}
                height={1000}
                width={1000}
                className="rounded-[12px]"
              />
              <Link href={`/tours/${location.slug}`} className="text-3xl font-semibold font-sans">
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

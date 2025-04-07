"use client";
import Image from "next/image";
import {motion} from "framer-motion"
export default function WhyChoose() {
  const items = [
    {
      title: "Competitive Pricing",
      icon: "/price-tag.png",
      desc: "Our cruises stand out with a perfect blend of luxury and affordability.",
    },
    {
      title: "Destinations",
      icon: "/location.png",
      desc: "Discover your dream destination with our cruises.",
    },
    {
      title: "Variety of Cruises",
      icon: "/cruise.png",
      desc: "Explore a diverse range of destinations and experiences.",
    },
    {
      title: "Secure Booking",
      icon: "/booking.png",
      desc: "Enjoy peace of mind with our secure booking system.",
    },
  ];

  return (
    <div className="flex flex-col gap-20 pt-12 pb-24">
      <div className="flex flex-col justify-center gap-4">
        <motion.h2
        initial={{ opacity: 0, x:-100 }}
        whileInView={{
          opacity: 2,
          x: 0,
          transition: { duration: 0.6 },
        }}
        className="text-[16px] text-[#0A71B8] text-center">
          Brilliant reasons
        </motion.h2>
        <motion.h1 
        initial={{ opacity: 0, x:-100 }}
        whileInView={{
          opacity: 2,
          x: 0,
          transition: { duration: 0.6 },
        }}
        className="text-5xl font-sans font-extrabold text-center">
          Why Choose Us
        </motion.h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {items.map((item, index) => (
          <div className="flex flex-col gap-6" key={index}>
            <div className="bg-zinc-50 w-[30%] mx-auto  rounded-full ">
              <Image
                src={item.icon}
                alt={item.title}
                width={1000}
                height={1000}
                className=""
              />
            </div>
            <div className="flex flex-col gap-4">


            <h1 className="text-2xl text-center">{item.title}</h1>       
            <p className="text-zinc-600 text-center text-[16px]">{item.desc}</p>             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

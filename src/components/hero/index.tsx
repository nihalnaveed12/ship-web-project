"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function CruiseHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Animation */}
      <motion.div
       initial={{ opacity: 0, y:25 }}
       whileInView={{
         opacity: 1,
         y: 0,
         transition: { duration: 0.5 },
       }}
        className={`absolute inset-0 w-full  bg-cover bg-center transition-transform duration-[2s] ease-out ${
          isLoaded ? "translate-y-0" : "translate-y-[10%]"
        }`}
        style={{
          backgroundImage: "url(/images/ship-image.png)",
          transformOrigin: "bottom center",
        }}
      />

      {/* Overlay for better text readability */}

      <div className="absolute inset-0 bg-black/5 z-[1]"></div>
      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between font-sans">
        {/* Main Content */}
        <div className="container mx-auto px-6 pt-24 md:pt-28">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              whileInView={{
                opacity: 1,
                x: 15,
                transition: { duration: 0.9 },
              }}
              className="text-white font-script text-xl mb-2 italic"
            >
              Luxury Cruising
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -200 }}
              whileInView={{
                opacity: 1,
                x: 15,
                transition: { duration: 1 },
              }}
              className="text-white text-3xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8"
            >
              The best day &<br />
              night cruises in
              <br />
              Cyprus
            </motion.h1>

            <motion.button
              initial={{ opacity: 0, y:40 , x:0}}
              whileInView={{
                opacity: 1,
                y: 0,
                x: 20,
                transition: { duration: 0.4 },
              }}
            >
              <Link
                href="#tours"
                className="inline-flex items-center bg-[#0099cc] text-white px-6 py-3 rounded-md font-medium hover:bg-[#0088bb] transition-colors"
              >
                Explore Tours Now
                <span className="ml-2">→</span>
              </Link>
            </motion.button>
          </div>
        </div>

        {/* Play Button */}
        <div className="absolute right-10 md:right-40 bottom-15 md:bottom-30 transform -translate-y-1/2">
          <button
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center hover:bg-opacity-100 transition-all shadow-lg"
            aria-label="Play video"
          >
            <Play className="h-6 w-6 text-[#0099cc] ml-1" fill="#0099cc" />
          </button>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import Link from "next/link";
// import { Play } from "lucide-react";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   return (
//     <div
//       className="relative w-full h-screen overflow-hidden bg-cover bg-center"
//       style={{ backgroundImage: "url(/images/ship-image.png" }}
//     >
//       {/* Content Container */}
//       <div className="relative z-10 h-full flex flex-col justify-between">
//         {/* Main Content */}
//         <div className="container mx-auto px-6 pt-24 md:pt-28">
//           <div className="max-w-xl">
//             <p className="text-white font-script text-3xl mb-2">
//               Luxury Cruising
//             </p>

//             <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
//               The best day &<br />
//               night cruises in
//               <br />
//               Cyprus
//             </h1>

//             <Link
//               href="#tours"
//               className="inline-flex items-center bg-[#0099cc] text-white px-6 py-3 rounded-md font-medium hover:bg-[#0088bb] transition-colors"
//             >
//               Explore Tours Now
//               <span className="ml-2">→</span>
//             </Link>
//           </div>
//         </div>

//         {/* Play Button */}
//         <div className="absolute right-10 md:right-40 bottom-15 md:bottom-30 transform -translate-y-1/2">
//           <button
//             className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center hover:bg-opacity-100 transition-all shadow-lg"
//             aria-label="Play video"
//           >
//             <Play className="h-6 w-6 text-[#0099cc] ml-1" fill="#0099cc" />
//           </button>
//         </div>

//         {/* Search Bar */}
//       </div>
//     </div>
//   );
// }

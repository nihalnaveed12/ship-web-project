"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function CruiseHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Array of background images for the carousel
  const backgroundImages = [
    "/mobile-header.jpg",
    "/hero-img/img1.jpg",
    "/hero-img/img2.jpg",
    "/hero-img/img11.jpg",
    "/hero-img/img5.jpg",
    "/hero-img/img8.jpg",
    "/hero-img/img7.jpg",
    "/hero-img/img3.jpg",
    "/hero-img/img9.jpg",
    "/hero-img/img10.jpg",
    "/hero-img/img6.jpg",
    "/hero-img/img13.jpg",
    "/hero-img/img14.jpg",
    "/hero-img/img15.jpg",
    "/hero-img/img4.jpg",
      "/hero-img/img12.jpg",
      "/hero-img/img22.jpg",
      "/hero-img/img16.jpg",
      "/hero-img/img17.jpg",
      "/hero-img/img20.jpg",
      "/hero-img/img18.jpg",
      "/hero-img/img19.jpg",
      "/hero-img/img21.jpg",
  ]

  // Function to move to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1))
  }

  // Function to move to a specific image
  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
    setCurrentImageIndex(index);
    // Reset the interval timer when manually changing images
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(nextImage, 5000)
    }
  }

  useEffect(() => {
    setIsLoaded(true)

    // Start the carousel interval
    intervalRef.current = setInterval(nextImage, 5000)

    // Clean up the interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [nextImage])

  return (
    <div className="relative w-full sm:h-[650px] h-[500px] overflow-hidden">
      {/* Background Images with Animation */}
      {backgroundImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          animate={{
            opacity: currentImageIndex === index ? 1 : 0,
            y: currentImageIndex === index ? 0 : 25,
            transition: {
              opacity: { duration: 1 },
              y: { duration: 1.2 },
            },
          }}
          className={`absolute inset-0 w-full bg-cover bg-center  top-12 transition-transform duration-[2s] ease-out ${
            isLoaded ? "translate-y-0" : "translate-y-[10%]"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            transformOrigin: "bottom center",
            zIndex: currentImageIndex === index ? 0 : -1,
          }}
        />
      ))}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/35 z-[1]"></div>

      {/* Content Container */}
      <div className="relative z-10  flex flex-col justify-between font-sans">
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
              className="text-white font-script text-xl mb-2 mt-4 italic text-shadow-md"
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
              className="text-white text-3xl lg:text-6xl md:text-5xl font-bold leading-[1.1] mb-8 text-shadow-md"
            >
              The Best Day &<br />
              Night Cruises In
              <br />
              Cyprus
            </motion.h1>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="pb-6 flex justify-center z-20 -bottom-30  relative">
          {backgroundImages.slice(0,12).map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer transition-colors shadow-md ${
                currentImageIndex === index ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}



{/* <div className="absolute right-10 md:right-40 bottom-15 md:bottom-30 transform -translate-y-1/2">
  <button
    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center hover:bg-opacity-100 transition-all shadow-lg"
    aria-label="Play video"
  >
    <Play className="h-6 w-6 text-[#0099cc] ml-1" fill="#0099cc" />
  </button>
</div> */}
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {motion} from "framer-motion"

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Best Months to Cruise in Cyprus: A Year-Round Guide",
    content:
      "The Mediterranean is an attractive area comprising approximately 20 countries in Southern Europe and North Africa, bordered by...",
    image: "/blog1.jpg",
    category: "BLOG",
  },
  {
    id: 2,
    title: "Approval Granted for New Marina and Cruise Ship Dock in Paphos",
    content: "The Cabinet has given approval for a new marina and cruise ship pier in Paphos, as announced by...",
    image: "/blog1.jpg",
    category: "BLOG",
  },
  {
    id: 3,
    title: "Top 10 Mediterranean Cruise Destinations",
    content:
      "Discover the most beautiful ports and islands that make Mediterranean cruises so popular among travelers seeking...",
    image: "/blog1.jpg",
    category: "BLOG",
  },
  {
    id: 4,
    title: "Cruise Ship Safety Protocols: What You Need to Know",
    content:
      "Modern cruise ships implement rigorous safety measures to ensure passenger wellbeing. From emergency drills to...",
    image: "/blog1.jpg",
    category: "BLOG",
  },
]

export default function BlogCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  // Setup carousel API
  useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", handleSelect)
    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  // Function to navigate to a specific slide
  const scrollTo = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <div className="">
      <div className="text-center mb-10">
        <motion.h3 
        initial={{ opacity: 0, y:100 }}
        whileInView={{
          opacity: 2,
          y: 0,
          transition: { duration: 0.6 },
        }}
        className="text-blue-500 font-script text-2xl mb-2">Our blog</motion.h3>
        <motion.h2 
        initial={{ opacity: 0, y:100 }}
        whileInView={{
          opacity: 2,
          y: 0,
          transition: { duration: 0.6 },
        }}
        className="text-4xl md:text-5xl font-bold">Travel Tips and Advice</motion.h2>
      </div>

      <div className="relative">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          
          className="w-full"
        >
          <CarouselContent className="">
            {blogPosts.map((post) => (
              <CarouselItem key={post.id} className="md:basis-1/2 ">
                <Card className="border-none shadow-none">
                  <CardContent className="p-0 flex gap-4">
                    <div className="relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={500}
                        height={300}
                        className="rounded-lg object-cover h-[270px]"
                      />
                      <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-3">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-3">{post.content}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Bullet Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {blogPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                current === index ? "bg-blue-500 w-3.5 h-3.5" : "bg-gray-300 hover:bg-gray-400",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


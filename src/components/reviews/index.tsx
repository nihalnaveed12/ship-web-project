
import Image from "next/image";

import {  } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <div className="bg-[#f5f8fc] py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="mb-4 md:mb-0">
            <div className="text-[#0e87b3] text-9xl font-light leading-none">
              &ldquo;&rdquo;
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-[#0e87b3] text-2xl font-medium text-center md:text-left mb-2 font-script">
              Testimonials
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left">
              Customer Reviews
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Review 1 */}
          {[1, 2, 3, 4].map((index) => (
            <div className="bg-white rounded-lg p-6 shadow-sm" key={index}>
              <div className="flex items-center mb-4">
                <Image
                  src="/unnamed.png"
                  alt="Rafał Żukowski"
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
                <div>
                  <h4 className="font-bold">Rafał Żukowski</h4>
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm mb-3">
                I have been on Evening Cruise to Blue Lagoon. It is worth the price
                (it is a bargain even). Nice views...
                <a href="#" className="text-[#0e87b3]">
                  Show More
                </a>
              </p>
              <div className="flex items-center text-xs text-gray-600">
                <Image
                  src="/google.png"
                  alt="Google"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <div>
                  <div>Posted On</div>
                  <div>Google</div>
                </div>
                <div className="ml-auto">3 months ago</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";

import { Facebook, Instagram, Mail, Ship, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full ">
      {/* Top wavy pattern with contact info */}
      <div className="relative bg-[#e8f0f7] py-8 px-4 md:px-8 ">
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute w-full h-full opacity-10"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,0 L0,0 Z"
              fill="currentColor"
              className="text-blue-400"
            ></path>
          </svg>
        </div>

        <div className="relative z-10 container mx-auto text-center">
          <p className="text-[#2c3e50] text-lg mb-4">
            Don&apos;t wait any longer. Contact us!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center justify-center gap-2">
              <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#0066cc"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="#0066cc"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <Link
                href="tel:+35726910200"
                className="text-[#0066cc] font-bold text-xl hover:underline"
              >
                +357 26910200
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <Mail size={20} className="text-[#0066cc]" />
              </div>
              <Link
                href="mailto:info@paphosseacruises.com"
                className="text-[#0066cc] font-bold text-xl hover:underline"
              >
                info@paphosseacruises.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-[#1e3163] text-neutral-400  py-12 px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Navi section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-4 relative">
              <img
                src="/images/Asset-02.png"
                alt="Navi mascot"
                width={120}
                height={120}
                className="mx-auto md:mx-0"
              />
            </div>
            <h3 className="text-2xl font-bold mb-1 text-white">I&apos;m Navi</h3>
            <p className="mb-1 text-white">Your compass navigator</p>
            <p className="text-xl italic mb-2 text-white">Hop aboard</p>
            <p className="mb-4 text-white">
              and let&apos;s discover the beauties of
              <br />
              Cyprus by boat!
            </p>

            <p className="mb-2">Follow us</p>
            <div className="flex gap-2">
              <Link
                href="https://www.facebook.com/paphosseacruises"
                className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
              >
                <Facebook size={20} className="text-[#1e3163]" />
              </Link>
              <Link
                href="https://www.instagram.com/paphosseacruises/"
                className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
              >
                <Instagram size={20} className="text-[#1e3163]" />
              </Link>
              <Link
                href="https://www.tripadvisor.com/Attraction_Review-g190384-d2285337-Reviews-Paphos_Sea_Cruises-Paphos_Paphos_District.html"
                className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                target="_blank"
              >
                <Ship  size={20} className="text-[#1e3163]" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCTgBtpv9xGdEY4RnFHaNBCw"
                className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
              >
                <Youtube size={20} className="text-[#1e3163]" />
              </Link>
            </div>
          </div>

          {/* Useful links */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl text-white font-semibold mb-6 text-center md:text-left">
              Useful
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <Link
                  href="/frequently-asked-questions"
                  className="hover:underline hover:text-neutral-200"
                >
                  FAQ / Useful Info
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:underline hover:text-neutral-200">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/paphos-brochure-lr_compressed.pdf" className="hover:underline hover:text-neutral-200">
                  Brochure
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline hover:text-neutral-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline hover:text-neutral-200">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore links */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl text-white font-semibold mb-6 text-center md:text-left">
              Explore
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <Link href="/tours" className="hover:underline hover:text-neutral-200">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:underline hover:text-neutral-200">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/pickup-points" className="hover:underline hover:text-neutral-200">
                  Pickup Points
                </Link>
              </li>
              <li>
                <Link href="http://cyprusyachtcharters.com/" target="_blank" className="hover:underline hover:text-neutral-200">
                  Private Yacht Charters
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:underline hover:text-neutral-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Book Online section */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl text-white font-semibold mb-6 text-center md:text-left">
              Book Online
            </h3>
            <p className="mb-6 text-center md:text-left text-white">
              Select our sea cruises for stunning views, luxury amenities, and
              personalized itineraries.*
            </p>
            <div className="flex justify-center md:justify-start mb-6">
              <Link
                href="/tours"
                className="bg-[#0088cc] text-white px-6 py-2 rounded hover:bg-[#006699] transition-colors uppercase font-bold"
              >
                Book Now
              </Link>
            </div>
            <div className="flex justify-center md:justify-start gap-2">
              <img
                src="/images/visa.png"
                alt="Visa"
                width={60}
                height={40}
                className="bg-white aspect-square rounded"
              />
              <img
                src="/images/paypal.png"
                alt="Mastercard"
                width={60}
                height={40}
                className="bg-white p-1 rounded"
              />
              <img
                src="/images/card.png"
                alt="PayPal"
                width={60}
                height={40}
                className="bg-white p-1 rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-[#162548] text-white py-4 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>Paphos Sea Cruises. Copyright © 2025. All Rights Reserved.</p>
            
          </div>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:underline hover:text-neutral-200">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:underline hover:text-neutral-200">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#0088cc] text-white p-3 rounded-full hover:bg-[#006699] transition-colors"
          aria-label="Scroll to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 15L12 9L6 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}

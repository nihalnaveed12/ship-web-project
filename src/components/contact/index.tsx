"use client";
import { Mail, PhoneCall, Send } from "lucide-react";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <div className="font-sans">
      <div className="relative top-10 bottom-10 ">
        <img
          src="/backgrounds/blue.jpg"
          alt="Blue wave background"
          className="h-[400px] w-full mb-14"
        />

        {/* Tours Title */}
        <div className="absolute inset-0 flex items-center justify-start px-8 sm:px-16 md:px-24 lg:px-32">
          <h1 className="text-white text-4xl md:text-6xl font-sans font-bold">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-16 justify-center max-w-6xl mx-auto    px-4 pb-12">
        <div className="shadow-xl divide-y-1 divide p-6 h-min rounded-[18px] md:w-[30%] w-full">
          <div className="flex gap-4 py-4">
            <Send color="#0A71B8" />
            <div className="flex flex-col gap-2">
              <h2>Address</h2>
              <p className="text-zinc-400">
                Tombs of the Kings Ave 26, Paphos 8046
              </p>
            </div>
          </div>
          <div className="flex gap-4 py-4">
            <PhoneCall color="#0A71B8" />
            <h2>+357 26910200</h2>
          </div>
          <div className="flex gap-4 py-4">
            <Mail color="#0A71B8" />
            <div className="flex flex-col gap-2">
              <h2>Email</h2>
              <p className="text-[#0A71B8]">info@paphosseacruises.com</p>
            </div>
          </div>
          <div className="flex gap-4 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0,0,256,256"
            >
              <g
                fill="#0a71b8"
                fillRule="nonzero"
                stroke=""
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"></path>
                </g>
              </g>
            </svg>
            <div className=" text-[15px] flex flex-col gap-2">
              <h2 className="font-sans">Get Support Service</h2>
              <p className="text-zinc-400">WhatsApp: +357 99459455</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="max-w-lg ">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Send us a message
            </h2>
            <p className="text-gray-600 mb-8">
              Your inquiries are important to us, and we strive to provide
              timely and helpful responses to every message we receive. Thank
              you for taking the time to get in touch with us. We look forward
              to hearing from you soon!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name *"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A71B8]"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email *"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A71B8]"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A71B8]"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0A71B8] text-white font-medium rounded-md hover:bg-[#0A71C9] cursor-pointer transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

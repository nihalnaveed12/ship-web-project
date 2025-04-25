"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Tours",
      href: "/tours",
    },
    {
      name: "Destination",
      href: "/destinations",
    },
    {
      name: "Pickup Points",
      href: "/pickup-points",
    },
    {
      name: "Blog",
      href: "/blogs",
    },
    {
      name: "FAQ",
      href: "/frequently-asked-questions",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ]

  return (
    <div className="bg-white text-black fixed z-20 top-0 w-full px-4 shadow-sm">
      <div className="max-w-7xl mx-auto md:px-0 h-16 flex items-center justify-between">
        <div className="flex gap-4 md:gap-8 items-center">
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              height={1000}
              width={1000}
              alt="Paphos Sea"
              className="w-[150px] md:w-[200px]"
            />
          </Link>
          <div className="hidden   md:flex gap-4 lg:gap-8">
            {navItems.map((nav, index) => (
              <Link href={nav.href} key={index} className="hover:text-[#0A71B8] font-sans text-[14px] lg:text-[16px]">
                {nav.name}.
              </Link>
            ))}
          </div>
        </div>

        <div className="flex  gap-2">
          <Link href={"/tours"}>
            <Button className="bg-[#0A71B8] px-3 sm:px-4  py-2 h-auto text-sm sm:text-base hover:bg-[#0A71a8] cursor-pointer">
              Book Now
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden ">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col gap-6 px-4 mt-10">
                {navItems.map((nav, index) => (
                  <Link href={nav.href} key={index} className="hover:text-[#0A71B8] font-sans text-[18px]">
                    {nav.name}.
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}


// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "../ui/button";

// export default function Navbar() {
//   const navItems = [
//     {
//       name: "Home",
//       href: "/",
//     },
//     {
//       name: "Tours",
//       href: "/tours",
//     },
//     {
//       name: "Destination",
//       href: "/destinations",
//     },
//     {
//       name: "Pickup Points",
//       href: "/pickup-points",
//     },
//     {
//       name: "Blog",
//       href: "/blogs",
//     },
//     {
//       name: "FAQ",
//       href: "/frequently-asked-questions",
//     },
//     {
//       name: "Contact",
//       href: "/contact",
//     },
//   ];

//   return (
//     <div className="bg-white text-black fixed z-20 top-0 w-full px-4">
//       <div className="max-w-7xl mx-auto md:px-0 h-16 flex items-center  justify-between">
//         <div className="flex gap-8 items-center ">
//           <Link href={"/"}>
          
//           <Image
//             src={"/images/logo.png"}
//             height={1000}
//             width={1000}
//             alt="Paphos Sea"
//             className="w-[200px]"
//           />
//           </Link>
//           <div className="md:flex gap-8 hidden">
//             {navItems.map((nav, index) => (
//               <Link
//                 href={nav.href}
//                 key={index}
//                 className="hover:text-[#0A71B8] font-sans text-[16px]"
//               >
//                 {nav.name}.
//               </Link>
//             ))}
//           </div>
//         </div>

//         <div className="flex items-center pt-1">
//           <Link href={"/tours"}>
          
//           <Button className="bg-[#0A71B8] px-6 py-4 hover:bg-[#0A71a8] cursor-pointer">
//             Book Now
//           </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

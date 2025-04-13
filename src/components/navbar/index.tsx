import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

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
  ];

  return (
    <div className="bg-white text-black fixed z-20 top-0 w-full px-4">
      <div className="max-w-7xl mx-auto md:px-0 h-16 flex items-center  justify-between">
        <div className="flex gap-8 items-center ">
          <Link href={"/"}>
          
          <Image
            src={"/images/logo.png"}
            height={1000}
            width={1000}
            alt="Paphos Sea"
            className="w-[200px]"
          />
          </Link>
          <div className="md:flex gap-8 hidden">
            {navItems.map((nav, index) => (
              <Link
                href={nav.href}
                key={index}
                className="hover:text-[#0A71B8] font-sans text-[16px]"
              >
                {nav.name}.
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center pt-1">
          <Button className="bg-[#0A71B8] px-6 py-4 hover:bg-blue-500 cursor-pointer">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

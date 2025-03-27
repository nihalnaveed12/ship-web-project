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
      href: "/destination",
    },
    {
      name: "Pickup Points",
      href: "/pickup-points",
    },
    {
      name: "Blog",
      href: "/blog",
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
    <div className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-2 md:px-0 h-16 flex items-center">
        <div className="flex gap-8 items-center">
          <Image
            src={"/images/logo.png"}
            height={1000}
            width={1000}
            alt="Paphos Sea"
            className="w-[15%]"
          />
          <div className="flex gap-8">
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

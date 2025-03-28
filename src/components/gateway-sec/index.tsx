import Image from "next/image";
import { Button } from "../ui/button";

export default function GatewaySec() {
  return (
    <div className="flex lg:flex-row flex-col gap-6 px-4">
      <div className="flex gap-10 flex-col lg:w-[30%] w-full justify-center lg:items-start items-center ">
        <h3 className="text-[16px] text-[#0A71B8]">Incredible Escapes</h3>
        <h1 className="text-5xl font-sans font-extrabold">
          Must see <br /> Getaways
        </h1>
        <Button className="bg-[#0A71B8] hover:bg-[#0A71B8] rounded-[6px] px-6 py-4 lg:w-[60%] lg:h-[15%]  cursor-pointer">
          Discover Now
        </Button>
      </div>
      <div className="flex md:flex-row flex-col gap-5 md:w-[70%]  w-full mx-auto">
        <div className="overflow-hidden  rounded-[20px] relative">
          <Image
            src={"/images/gateway1.jpg"}
            alt="Paphos Sea"
            height={1000}
            width={1000}
            className="transition-transform hover:scale-110 duration-500 object-cover relative"
          />
          <h2 className="absolute bottom-2 px-7 text-2xl font-sans  text-white">Blue Lagoon - Akamas</h2>
        </div>
        <div className="overflow-hidden border  rounded-[20px] relative">
          <Image
            src={"/images/gateway2.jpg"}
            alt="Paphos Sea"
            height={1000}
            width={1000}
            className="transition-transform hover:scale-110 duration-500 object-cover "
          />
          <h2 className="absolute bottom-2 px-7 text-2xl font-sans  text-white">Peyia Destinations</h2>
        </div>
      </div>
    </div>
  );
}

import TourCard from "@/components/tour-card";
import ToursCarousels from "@/components/tour-carousels";
import { Button } from "@/components/ui/button";
import { Tours } from "@/data/tours";
import { CalendarDays, Clock, Euro, Route } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export default async function TourDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = Tours.find((tour) => tour.slug === slug);
  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className="">
      <div className=" bg-zinc-100">
        <div className="pt-20 max-w-7xl mx-auto px-4">
          <div className="flex justify-around items-center py-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold font-sans">{tour.title}</h1>
              <h2 className="text-2xl font-semibold font-sans">
                {tour.subtitle}
              </h2>
            </div>
            <div className="">
              <Button className="rounded-full hover:bg-[#0A71B8] text-zinc-400 hover:text-white cursor-pointer bg-white">
                GALLERY
              </Button>
            </div>
          </div>
        </div>

        <div className="">
          <ToursCarousels />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 ">
        <div className="flex sm:flex-row flex-col-reverse gap-16">
          <div className="flex flex-col gap-10 sm:w-[65%]">
            <h2 className="text-2xl font-bold font-sans ">Overview</h2>
            <div className="flex flex-col gap-4 font-sans ">
              <div className="flex flex-col gap-3 text-zinc-600 text-[15px]">
                <p>{tour.desc1}</p>
                <p>{tour.desc2}</p>
                <p>{tour.desc3}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 font-sans max-w-3xl ">
              <h2 className="text-3xl font-semibold font-sans">
                Included Features
              </h2>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {tour.features.map((feature, index) => (
                  <ul className="" key={index}>
                    <li  className=" text-zinc-600 text-[15px] list-disc">
                      {feature}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 sm:w-[35%] w-full">
            <Image
              src={"/icons-tours.png"}
              alt="all inclusive"
              height={1000}
              width={1000}
              className="w-40"
            />

            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <Euro
                  color="#20A9E1"
                  size={36}
                  className="rounded-full border border-[#20A9E1] p-1"
                />
                <div className="font-sans">
                  <h2 className="text-xl font-semibold  text-[#20A9E1]">
                    Price
                  </h2>
                  <p className="text-sm text-zinc-500">
                    €{tour.adultFee} Adult / €{tour.childFee} Child
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <CalendarDays
                  size={36}
                  color="#20a9e1"
                  className="rounded-full border border-[#20A9E1] p-1"
                />
                <div className="font-sans">
                  <h2 className="text-xl font-semibold  text-[#20A9E1]">
                    Days
                  </h2>
                  <p className="text-sm text-zinc-500">{tour.Days}</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <Route
                  size={36}
                  color="#20a9e1"
                  className="rounded-full border border-[#20A9E1] p-1"
                />
                <div className="font-sans">
                  <h2 className="text-xl font-semibold  text-[#20A9E1]">
                    Routes
                  </h2>
                  <p className="text-sm text-zinc-500">{tour.route}</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <Clock
                  size={36}
                  color="#20a9e1"
                  className="rounded-full border border-[#20A9E1] p-1"
                />
                <div className="font-sans">
                  <h2 className="text-xl font-semibold  text-[#20A9E1]">
                    Time
                  </h2>
                  <p className="text-sm text-zinc-500">{tour.time}</p>
                </div>
              </div>
            </div>

            <div className="">
              <Link href={`/booking/${tour.slug}`}>
                <Button className="bg-[#0A71B8] hover:bg-[#0A73a1] cursor-pointer">
                  BOOK THIS CRUISE
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-16">
          <Image
            src={"/paphos-cruises.png"}
            alt="paphos cruise map picture"
            height={1000}
            width={1000}
            className="sm:w-[65%]"
          />
        </div>

        <div className="sm:w-[65%] py-16 ">
          <h1 className="text-3xl font-bold font-sans py-3 sm:text-start text-center">
            You May Like
          </h1>
          <div className="grid md:grid-cols-2 gap-y-6 sm:place-content-start place-content-center">
            {Tours.slice(0, 2).map((tour, index) => (
              <TourCard
                image={tour.image}
                adutlFee={tour.adultFee}
                childFee={tour.childFee}
                hours={tour.hours}
                title={tour.title}
                href={`/tours/${tour.slug}`}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

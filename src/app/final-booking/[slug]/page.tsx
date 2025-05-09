import BookingDetails from "@/components/final-booking/booking-details";
import CustomerInformationForm from "@/components/final-booking/customer-information";
import MoreDetails from "@/components/final-booking/more-details";
import { Tours } from "@/data/tours";




export async function generateStaticParams() {
  return Tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export default async function TourDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const tour = Tours.find((tour) => tour.slug === slug);
  if (!tour) {
    return <div>Tour not found</div>;
  }
  return (
    <div className="pt-16">
      <div className="bg-zinc-100 ">
        <div className="max-w-4xl mx-auto px-4 flex gap-3 flex-col py-10 font-sans ">
          <h1 className="text-4xl font-bold">{tour.title}</h1>
          <h2 className="">{tour.destination}</h2>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 font-sans py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <CustomerInformationForm />
            <MoreDetails />
          </div>

          <div>
            <BookingDetails
              image={tour.image}
              location={tour.route}
              totalAmount={tour.adultFee}
              totalPayableNow={tour.adultFee}
              depositValue={tour.childFee}
              duration={tour.hours}
              name={tour.title}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

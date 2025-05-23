import TourBookingForm from "@/components/book-now/form";
import { Tours } from "@/data/tours";

// Static generation ke liye params
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
  const { slug } = params;

  const tour = Tours.find((tour) => tour.slug === slug);
  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className="pt-16 ">
      <div className="bg-zinc-100 ">
        <div className="max-w-4xl mx-auto px-4 flex gap-3 flex-col py-10 font-sans ">
          <h1 className="text-4xl font-bold">{tour.title}</h1>
          <h2 className="">{tour.destination}</h2>
        </div>
      </div>
      <div>
        <TourBookingForm
          adultFee={tour.adultFee}
          childFee={tour.childFee}
          slug={tour.slug}
        />
      </div>
    </div>
  );
}

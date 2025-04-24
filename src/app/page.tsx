import GatewaySec from "@/components/gateway-sec";
import HeroSection from "@/components/hero";
import Places from "@/components/places-sec";
import PopularToursCarousel from "@/components/pop-tours";
import Reviews from "@/components/reviews";
import SearchBar from "@/components/search-bar";
import TipsAndTricks from "@/components/tips-and-tricks";
import WhyChoose from "@/components/why-choose";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />

      <SearchBar />

      <section>
        <Places />
      </section>

      <PopularToursCarousel />
      <section>
        <GatewaySec />
      </section>
      <section>
        <WhyChoose />
      </section>

      <Reviews />
      <section>
        <TipsAndTricks />
      </section>
    </div>
  );
}

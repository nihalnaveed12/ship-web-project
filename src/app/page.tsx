import GatewaySec from "@/components/gateway-sec";
import Hero from "@/components/hero";
import Places from "@/components/places-sec";
import PopularToursCarousel from "@/components/pop-tours";
import Reviews from "@/components/reviews";
import SearchBar from "@/components/search-bar";
import WhyChoose from "@/components/why-choose";

export default function Home() {
  return (
    <div className="">
      <Hero />

      <section>
        <Places />
      </section>

      <SearchBar />
    
      <PopularToursCarousel />
      <section>
        <GatewaySec />
      </section>
      <section>
         <WhyChoose />
      </section>
      
         <Reviews />
     
    </div>
  );
}

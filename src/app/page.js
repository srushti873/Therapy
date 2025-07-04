import About from "@/components/About";
import FAQ from "@/components/FAQ";
import GetInTouchForm from "@/components/GetInTouchForm";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServicesSection from "@/components/Services";

import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Hero/>
     <About/>
     <Services/>
     <FAQ/>
     <GetInTouchForm/>
    </div>
  );
}

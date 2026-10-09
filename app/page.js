import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Numbers from "@/components/sections/Numbers";
import Proof from "@/components/sections/Proof";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Certifications from "@/components/sections/Certifications";
import Founder from "@/components/sections/Founder";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Numbers />
        <Proof />
        <Work />
        <Services />
        <Certifications />
        <Founder />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

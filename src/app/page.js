import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CryptoSection from "./components/CryptoSection";
import CarouselSection from "./components/CarouselSection";
import AccordionSection from "./components/AccordionSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen  text-white">
      <Navbar />
      <HeroSection />
      <CryptoSection/>
      <CarouselSection/>
      <AccordionSection/>
      <Footer/>
    </main>
  );
}
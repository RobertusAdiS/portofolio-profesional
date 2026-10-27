import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Journey } from "../components/sections/Journey";
import { Projects } from "../components/sections/Projects";
import { Innovation } from "../components/sections/Innovation";
import { Gallery } from "../components/sections/Gallery";
import { Evidence } from "../components/sections/Evidence";
import { Contact } from "../components/sections/Contact";
export function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Innovation />
        <Gallery />
        <Evidence />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

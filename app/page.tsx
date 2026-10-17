import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Expertise from "@/components/sections/Expertise";
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import Certificates from "@/components/sections/Certificates";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Expertise />
        <About />
        <Timeline />
        <Certificates />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

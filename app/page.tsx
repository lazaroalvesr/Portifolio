import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import PracticeGrid from "@/components/PracticeGrid";
import Process from "@/components/Process";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Marquee items={["Inovar", "Inspirar", "Criar", "Construir", "Entregar", "Evoluir"]} variant="small"/>

        <Projects />
        <PracticeGrid />
        <Process />



        <Marquee
          items={[
            "Site profissional",
            "Design personalizado",
            "WhatsApp integrado",
            "Apareça no Google",
            "Layout moderno",
            "Feito sob medida",
            "Acompanhamento direto",
            "Entrega no prazo",
          ]}
          variant="small"
        />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

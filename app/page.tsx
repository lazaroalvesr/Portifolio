import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
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

        <Projects />
        <Services />

        <Marquee items={["Inovar", "Inspirar", "Criar", "Construir", "Entregar", "Evoluir"]} />

        {/* <Testimonials /> */}

        <Marquee
          items={["Design UX", "Design de App", "Dashboard", "Wireframe", "Pesquisa de Usuário"]}
          variant="small"
        />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

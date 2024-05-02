import { About } from "./_components/About";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Projects } from "./_components/Projects";
import { Skills } from "./_components/Skills";
import { ToPresent } from "./_components/To_present";

export default function Home() {
  return (
    <div>
      <ToPresent />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

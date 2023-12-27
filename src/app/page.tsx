import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Formacao from "@/components/Formacao";
import Portifolio from "@/components/Portifolio";
import { Skills } from "@/components/Skill";
import { Sobre } from "@/components/Sobre";
import { Header } from "@/components/header";
import { Main } from "@/components/main";

export default function Home() {
  return (
    <div>
      <Main />
      <Sobre />
      <Skills />
      <Formacao />
      <Portifolio />
      <Contato />
      <Footer />
    </div>
  )
}

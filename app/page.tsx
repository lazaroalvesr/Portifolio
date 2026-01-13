import ContactForm from "./components/Contato";
import { Customers } from "./components/Customers";
import { Main } from "./components/Main";
import { Projetos } from "./components/Projetos";
import { SobreMim } from "./components/SobreMim";

export default function Home() {
  return (
    <div>
      <Main />
      <Customers />
      <SobreMim />
      <Projetos />
      {/* <ContactForm /> */}
    </div>
  );
}

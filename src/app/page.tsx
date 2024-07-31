import { Header } from "@/sections/Header";
import { Titulo } from "@/sections/Titulo";
import { Materias } from "@/sections/Materias";
import { QuienesSomos } from "@/sections/QuienesSomos";
import { Pricing } from "@/sections/Pricing";
import { ContactUs } from "@/sections/ContactUs";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (<>
    <Header />
    <div id="inicio" className="scroll-mt-36"><Titulo /></div>
    <Materias />
    <div id="quienes-somos" className="scroll-mt-36"><QuienesSomos /></div>
    <div id="que-ofrecemos" className="scroll-mt-36"><Pricing /></div>
    <div id="agenda" className="scroll-mt-36"><ContactUs /></div>
    <Footer />
  </>)
}

import { Header } from "@/sections/Header";
import { Titulo } from "@/sections/Titulo";
import { Materias } from "@/sections/Materias";
import { QuienesSomos } from "@/sections/QuienesSomos";
import { Pricing } from "@/sections/Pricing";

export default function Home() {
  return (<>
    <Header />
    <Titulo />
    <Materias />
    <QuienesSomos />
    <Pricing />
  </>)
}

import ArrowRight from "@/assets/arrow-right.svg";
import booksImage from "@/assets/logo.png";
import Image from "next/image";

export const Titulo = () => {
  return (
    <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center lg:justify-between">
          <div className="md:w-[478px]">
            <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              ¿Estás buscando una clase particular?
            </h1>
            <p className="text-2xl text-[#010D3E] tracking-tight mt-6">
            ¡Tenemos lo que necesitas! Contáctanos y revisa nuestros profesores.
            </p>
            <div className="flex gap-2 items-center mt-[30px]">
              <button className="btn bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Contáctanos
              </button>
              <button className="btn bg-transparent text-black px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight gap-1">
                <span>Revisa nuestros profesores</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:flex-1 lg:max-w-sm relative">
            <Image
              src={booksImage}
              alt="Logo grande"
              className="max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

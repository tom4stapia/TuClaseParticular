"use client"

import { motion } from "framer-motion";

export const Materias = () => {
  return (
    <div className="py-8 bg-white md:py-12">
    <div className="container">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div className="flex gap-14 flex-none pr-14" animate={{
          translateX: "-50%",
        }} transition={{duration: 20, repeat: Infinity, ease:"linear", repeatType: "loop",}}>
          <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Matemáticas</h1>
          <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Química</h1>
          <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Física</h1>
          <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Biología</h1>
          <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Historia</h1>
          <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Lenguaje</h1>
          <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Matemáticas</h1>
          <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Química</h1>
          <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Física</h1>
          <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Biología</h1>
          <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Historia</h1>
          <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Lenguaje</h1>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

"use client";

import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Clase única online",
    price: "20.000",
    classTag: "Hora",
    buttonText: "Pide tu clase online",
    popular: false,
    inverse: false,
    features: [
      "Disponibilidad inmediata",
      "Compromiso",
      "Puntualidad",
      "Material de Calidad",
      "Reporte de clases al apoderado",
    ],
  },
  {
    title: "Clase única presencial",
    price: "22.000",
    classTag: "Hora",
    buttonText: "Pide tu clase presencial",
    popular: false,
    inverse: false,
    features: [
      "Disponibilidad inmediata",
      "Compromiso",
      "Puntualidad",
      "Material de Calidad",
      "Reporte de clases al apoderado",
    ],
  },
  {
    title: "Clases presenciales (4 sesiones)",
    price: "78.000",
    classTag: "Mes",
    buttonText: "Pide tus clases mensuales",
    popular: false,
    inverse: false,
    features: [
      "Disponibilidad inmediata",
      "Compromiso",
      "Puntualidad",
      "Material de Calidad",
      "Reporte de clases al apoderado",
      "Apoyo al estudiante 24/7 para resolver dudas"
    ],
  },
];

export const Pricing = () => {
  return (<>
  <section className="py-14 bg-gradient-to-b from-[#FFFFFF]">
    <div className="container">
      <h2 className="section-title">
        ¿Qué ofrecemos?
      </h2>
    </div>
    <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-stretch lg:justify-center">
      {pricingTiers.map(({ title, price, classTag, buttonText,  popular, inverse, features}) => (
        
        <motion.div
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, ease: "easeOut" }} 
            viewport={{ once: true }}  
            key={title}
            className={twMerge("p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-sm w-full", inverse === true && "border-black bg-black text-white")}>
          <div>  
            <h3 className={twMerge("text-lg font-bold text-black/50", inverse===true && "text-white")}>{title}</h3>
            {popular === true && (
              <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20 mt-2">
              <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">Popular</span>
              </div>  
            )}
          </div>
          <div className="flex items-baseline gap-1 mt-[30px]">
            <span className="text-4xl font-bold tracking-tighter leading-none">${price}</span>
            <span className={twMerge("tracking-tight font-bold text-black/50", inverse==true && "text-white/80")}>/ {classTag}</span>
          </div>
          <a href="https://wa.me/56940988254" 
                    target="_blank" className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && "bg-white text-black")}>{buttonText}</a>
          <ul className="flex flex-col gap-5 mt-8">{features.map((feat) => (
            <li className="text-sm flex items-center gap-4" key={feat}>
              <CheckIcon className="h-6 w-6"/>
              <span>{feat}</span>
            </li>
          ))}</ul>
        </motion.div>
      ))}
    </div>

  </section>
  </>);
};

"use client";

import Image from "next/image";
import Contactanos from "@/assets/contactanos.png";
import WhatsappLogo from "@/assets/whatsapp.svg";
import { motion } from "framer-motion";

export const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-14 px-4 bg-white">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2, ease: "easeOut" }} 
        viewport={{ once: true }} 
      >
        <Image
          src={Contactanos} 
          alt="Phone Image"
          quality={100}
          width={420}
          height={420} 
          className="object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/50 to-transparent backdrop-blur-xs"></div>
      </motion.div>
      <div className="text-center mt-10 md:ml-20">
        <div className="max-w-lg">
        <h1 className="section-title">¡Agenda tu clase!</h1>
        <p className="text-justify font-medium text-lg mt-4">
          No dudes en ponerte en contacto con nosotros, estamos aquí para ayudarte. Mándanos un mensaje por WhatsApp y te responderemos a la brevedad.
        </p>
        <p className="text-justify font-medium text-lg mt-4">
          Una vez que nos contactes, nos encargaremos de coordinar tu clase lo más rápido posible. Además, estamos aquí para aclarar cualquier pregunta que tengas.
        </p>
        <p className="text-justify font-medium text-lg mt-4">
        Después de la clase, te enviaremos un reporte detallado de lo que se realizó. Queremos que estés al tanto de todo lo que sucede en la clase de tu hijo/a. ¡Estamos para ayudarte!
        </p>
        <a href="https://wa.me/56940988254" 
                    target="_blank" className="btn btn-primary mt-4">
        <div className="inline-flex items-center">
          <WhatsappLogo className="h-5 w-5 mr-2 align-middle" />
          <span className="align-middle">Escríbenos</span>
        </div>
        </a>
        </div>
      </div>
    </div>
  );
};

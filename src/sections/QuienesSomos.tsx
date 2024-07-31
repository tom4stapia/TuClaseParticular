import { TeacherInformation } from "@/components/TeacherInformation";
import TomasTapia from "@/assets/tomas.webp";  
import TomasFlorenzano from "@/assets/tomas2.webp";
import JuanLeturia from "@/assets/juan.webp";
import PabloBustos from "@/assets/pablo.webp";

export const QuienesSomos = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFFF] py-14">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="tag">Conócenos</div>
        </div>
        <h2 className="section-title mt-6">
          ¿Quiénes somos?
        </h2>
        <div className="flex flex-col lg:flex-row lg:items-start mt-6">
          <div className="flex flex-col justify-center w-full lg:max-w-screen-sm mx-auto lg:mx-0 lg:mr-8">
            <p className="text-justify font-medium text-lg">
              Somos un grupo de <b>exalumnos del Colegio San Ignacio El Bosque</b>, estudiando en las mejores universidades del país y estamos ofreciendo un servicio de <b>clases particulares para estudiantes de 7° básico a 4° medio.</b>
            </p>
            <p className="text-justify mt-2 font-medium text-lg">
            Tenemos <b>más de tres años de experiencia</b> en el área, impartiendo clases particulares a estudiantes y desempeñándonos como ayudantes en diversos ramos en la universidad.
            </p>
            <p className="text-justify mt-2 font-medium text-lg">
              Dentro de las materias que abarcamos se encuentran: <b>Matemáticas, Física, Química, Biología, Lenguaje, Historia, entre otras. </b>
            </p>
            <p className="text-justify mt-2 font-medium text-lg">
            Encuentra al profesor que siempre estuviste buscando para acompañar a tu hijo! No dudes en <a href='https://wa.me/56940988254' target="_blank" className="underline text-[#001E80]"><b>contactarnos</b></a> para resolver tus dudas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6 lg:grid-cols-2 lg:w-full">
            <TeacherInformation
              name="Tomás Tapia"
              career="Ingeniería Civil PUC / 4to año"
              exp1="Ayudante Tecnologías y Aplicaciones Web"
              exp2="Ayudante Programación Avanzada"
              image={TomasTapia}
            />
            <TeacherInformation
              name="Pablo Bustos"
              career="Ingeniería Civil PUC / 4to año"
              exp1="Ayudante Introducción a la Programación"
              exp2="Ayudante Ingeniería de Software"
              image={PabloBustos}
            />
            <TeacherInformation
              name="Tomás Florenzano"
              career="Derecho UCH / 4to año"
              exp1="Ayudante Introducción al Derecho"
              exp2="Presidente de Debate y Litigación SIEB"
              image={TomasFlorenzano}
            />
            <TeacherInformation
              name="Juan Leturia"
              career="Ingeniería Civil PUC / 4to año"
              exp1="Puntaje Nacional PTU Ciencias 2020"
              exp2="Ayudante Ciencia de los Materiales"
              image={JuanLeturia}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
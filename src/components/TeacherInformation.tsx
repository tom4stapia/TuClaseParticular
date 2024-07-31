import Image, { StaticImageData } from "next/image";

interface TeacherInformationProps {
    name: string;
    career: string;
    exp1: string;
    exp2: string;
    image: StaticImageData; 
  }

export const TeacherInformation = ({ name, career, exp1, exp2, image }: TeacherInformationProps) => {
    return (
        <>
        <div className="flex flex-col items-center pb-10">
            <Image src={image} alt="Teacher image" width={120} height={120} quality={100} className="rounded-full shadow-lg"/>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
            <span className="text-sm text-gray dark:text-gray-400">{career}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{exp1}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{exp2}</span>
        </div>
        </>
    );
}
import { getStudent } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: {
    student: string;
  };
};

export default async function Student({ params }: Props) {
  const slug = params.student;
  const student = await getStudent(slug);

  return (
    <div className="max-w-3xl mx-auto py-20">
      <header className="flex items-center justify-between">
        <h1
          className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 
            bg-clip-text text-transparent text-5xl drop-shadow font-extrabold"
        >
          {student.name}
        </h1>
        <a
          href={student.url}
          title="Ver Enlace"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap
          hover:bg-pink-500 hover:text-pink-100 transition"
        >
          Ver este enlace!
        </a>
      </header>
      {/* Content */}
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={student.feedback}></PortableText>
      </div>
      {/* IMAGE */}
      <Image
        src={student.avatar}
        alt={student.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
}

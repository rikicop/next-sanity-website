//import { getProjects } from "@/sanity/sanity-utils";
//import { Project } from "@/types/Project";
import { getStudents } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  //const projects = await getProjects();
  const students = await getStudents();

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Hoola Soy{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Ricardo
        </span>
        !
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Esta es parte de un proyecto en el que reviso el rendimiento de mis
        alumnos de piano
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">Mis Alumnos</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {students.map((student) => (
          <div
            key={student._id}
            className="border border-gray-500 rounded-lg p-3"
          >
            {student.avatar && (
              <Image
                src={student.avatar}
                alt={student.name}
                width={250}
                height={100}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}

            <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {student.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

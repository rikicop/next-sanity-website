//import { getProjects } from "@/sanity/sanity-utils";
//import { Project } from "@/types/Project";
import { getStudents } from "@/sanity/sanity-utils";

export default async function Home() {
  //const projects = await getProjects();
  const students = await getStudents();

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Hello I'm
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
          Ricardo
        </span>
        !
      </h1>
      {students.map((student) => (
        <div key={student._id}>{student.name}</div>
      ))}
    </div>
  );
}

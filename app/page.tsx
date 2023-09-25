//import { getProjects } from "@/sanity/sanity-utils";
//import { Project } from "@/types/Project";
import { getStudents } from "@/sanity/sanity-utils";

export default async function Home() {
  //const projects = await getProjects();
  const students = await getStudents();

  return (
    <div>
      {students.map((student) => (
        <div key={student._id}>{student.name}</div>
      ))}
    </div>
  );
}

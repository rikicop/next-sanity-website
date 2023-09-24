//import { getProjects } from "@/sanity/sanity-utils";
import { getStudents } from "@/sanity/sanity-utils";
//import { Project } from "@/types/Project";
import { Student } from "@/types/Student";

export default async function Home() {
  //const projects = await getProjects();
  const students = await getStudents();

  return (
    <div>
      {students.map((student: Student) => (
        <div key={student._id}>{student.name}</div>
      ))}
    </div>
  );
}

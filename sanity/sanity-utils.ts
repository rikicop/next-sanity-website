import { Project } from "@/types/Project";
import { Student } from "@/types/Student";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "kk8b4z7o",

    dataset: "production",

    apiVersion: "2023-07-06",
  });

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}

export async function getStudents(): Promise<Student[]> {
  const client = createClient({
    projectId: "kk8b4z7o",

    dataset: "production",

    apiVersion: "2023-07-06",
  });

  return client.fetch(
    groq`*[_type == "student"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "avatar": avatar.asset->url,
      url,
      feedback
    }`
  );
}

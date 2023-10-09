import { Project } from "@/types/Project";
import { Student } from "@/types/Student";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
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
  return createClient(clientConfig).fetch(
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

export async function getStudent(slug: string): Promise<Student> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "student" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "avatar": avatar.asset->url,
      url,
      feedback
    }`,
    { slug }
  );
}

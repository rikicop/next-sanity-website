import { Project } from "@/types/Project";
import { Student } from "@/types/Student";
import { Page } from "@/types/Page";

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
      notes
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
      notes
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug":slug.current

    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAd,
      title,
      "slug":slug.current,
      content
    }`,
    { slug }
  );
}

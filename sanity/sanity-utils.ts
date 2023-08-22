import { createClient, groq } from "next-sanity";

export async function getProjects() {
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

import { PortableTextBlock } from "sanity";

export type Student = {
  _id: string;

  _createdAt: Date;

  name: string;

  slug: string;

  avatar: string;

  url: string;

  feedback: PortableTextBlock[];
};

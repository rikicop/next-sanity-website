import { PortableTextBlock } from "sanity";

export type Student = {
  _id: string;

  _createdAt: Date;

  week: Date;

  assistance: boolean; // Si asistió o no a clases ese día

  narcissus: boolean; // Relativa carencia de empatía(manejar con discreción)

  name: string; // Estudiante

  slug: string;

  avatar: string; // Foto

  url: string;

  piece: string; // Pieza

  goals: string; // Objetivos (puede ser una matriz de cadenas si hay varios objetivos)

  excerpt: string; // Fragmento

  notes: PortableTextBlock[]; // Notas u Observaciones
};

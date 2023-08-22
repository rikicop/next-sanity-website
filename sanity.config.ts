import { defineConfig } from "sanity";

import { deskTool } from "sanity/desk";

import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "kk8b4z7o",

  dataset: "production",

  title: "Mi Administrador De Estudiantes",

  apiVersion: "2023-07-06",

  basePath: "/admin",

  plugins: [deskTool()],

  schema: { types: schemas },
});

export default config;

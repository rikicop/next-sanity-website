import { defineConfig } from "sanity";

import { deskTool } from "sanity/desk";

import {visionTool} from '@sanity/vision';

import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "kk8b4z7o",

  dataset: "production",

  title: "Mi Administrador De Estudiantes",

  apiVersion: "2023-07-06",

  basePath: "/admin",

  plugins: [deskTool(),visionTool()],

  schema: { types: schemas },
});

export default config;

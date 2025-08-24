import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import post from "./schemas/post";

export default defineConfig({
  name: "default",
  title: "My Project",

  // 👇 required for Sanity CLI & frontend API
  projectId: "5blpo5tj",
  dataset: "production",

  // 👇 add this block
  api: {
    projectId: "5blpo5tj",
    dataset: "production",
  },

  plugins: [deskTool()],
  schema: {
    types: [post],
  },
});

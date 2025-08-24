import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "5blpo5tj", // your project ID
  dataset: "production",
  apiVersion: "2025-08-24", // use today’s date or lock to a version
  useCdn: true,
});

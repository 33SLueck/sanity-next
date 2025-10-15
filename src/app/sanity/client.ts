import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "dcl5udk4",
  dataset: "production",
  apiVersion: "2025-10-15",
  useCdn: false,
});
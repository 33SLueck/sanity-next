import { schemaTypes } from "./schemas";

const projectId: string = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset: string = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";

export const studioConfig = {
  projectId,
  dataset,
  title: "Sanity Studio",
  schema: { types: schemaTypes },
};

export default studioConfig;

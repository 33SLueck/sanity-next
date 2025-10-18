export const post = {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "slug", type: "slug", title: "Slug", options: { source: "title" } },
    { name: "publishedAt", type: "datetime", title: "Published at" },
    { name: "author", type: "reference", to: [{ type: "author" }] },
    { name: "image", type: "image", title: "Image" },
    { name: "body", type: "array", of: [{ type: "block" }], title: "Body" },
  ],
};

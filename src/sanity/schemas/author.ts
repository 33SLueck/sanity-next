const author = {
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    { name: "name", type: "string", title: "Name" },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 96 },
    },
    { name: "image", type: "image", title: "Image" },
    { name: "bio", type: "array", title: "Bio", of: [{ type: "block" }] },
  ],
};

export default author;

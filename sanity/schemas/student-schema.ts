const student = {
  name: "student",
  title: "Students",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "sheet",
      title: "Sheet",
      type: "string",
    },
    {
      name: "fragment",
      title: "Fragment",
      type: "string",
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "feedback",
      title: "Feedback",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default student;

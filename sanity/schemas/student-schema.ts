const student = {
  name: "student",
  title: "Students",
  type: "document",
  fields: [
    {
      name: "week",
      title: "Week",
      type: "date",
    },
    {
      name: "assistance",
      title: "Assistance",
      type: "boolean",
    },
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
      name: "piece",
      title: "Piece",
      type: "string",
    },
    {
      name: "goals",
      title: "Goals",
      type: "string",
    },
    {
      name: "excerpt",
      title: "Excerpt",
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
      name: "notes",
      title: "Notes",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default student;

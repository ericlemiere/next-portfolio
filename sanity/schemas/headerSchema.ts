const header = {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Header",
      hidden: true,
    },
    {
      name: "nav",
      title: "Navigation",
      type: "array",
      of: [{ type: "page" }],
    },
  ],
};

export default header;

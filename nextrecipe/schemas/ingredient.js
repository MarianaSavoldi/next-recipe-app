const ingredient_schema = {
  name: "ingredient",
  title: "Ingredient",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Ingredient Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      option: {
        hotspot: true,
      },
    },
    {
      name: "notes",
      title: "Notes",
      type: "text",
    },
  ],
};

export default ingredient_schema;

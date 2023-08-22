// patient.js
import { defineType, defineField } from "sanity";

export const patient = defineType({
  name: "patient", 
  type: "document", // the type of the schema type
  title: "Patient", // the human-readable label for the schema type
  fields: [
    defineField({
      name: "id", // the name of the field
      type: "number", // the type of the field
      title: "ID", // the human-readable label for the field
      description: "A unique identifier for the patient", // a short description of how to use the field
      validation: (Rule) => Rule.required(), // a validation rule that ensures the field is not empty
    }),
    defineField({
      name: "age",
      type: "number",
      title: "Age",
      description: "The age of the patient in years",
      validation: (Rule) => Rule.required().positive().integer(), // a validation rule that ensures the field is not empty, positive, and an integer
    }),
    defineField({
      name: "gender",
      type: "string",
      title: "Gender",
      description: "The gender of the patient",
      options: {
        list: [
          // a list of predefined values for the field
          { title: "Male", value: "male" },
          { title: "Female", value: "female" },
          { title: "Other", value: "other" },
        ],
        layout: "radio", // a layout option that displays the values as radio buttons
      },
    }),
    defineField({
      name: "sessions",
      type: "number",
      title: "Sessions",
      description:
        "The number of therapy sessions completed by the patient",
      validation: (Rule) => Rule.required().positive().integer(), // a validation rule that ensures the field is not empty, positive, and an integer
    }),
    defineField({
      name: "goals",
      type: "array",
      title: "Goals",
      description:
        "The list of goals set by the patient or therapist for the therapy outcome",
      of: [
        // an array of schema types that can be added to the array field
        {
          type: "string", // a string schema type
          validation: (Rule) => Rule.required(), // a validation rule that ensures each string is not empty
        },
      ],
    }),
    defineField({
      name: "copingStrategies",
      type: "array",
      title: "Coping Strategies",
      description:
        "The list of coping strategies taught by the therapist or learned by the patient to deal with their condition",
      of: [
        {
          type: "string", // a string schema type
          validation: (Rule) => Rule.required(), // a validation rule that ensures each string is not empty
        },
      ],
    }),
    defineField({
      name: "feedback",
      type: "text",
      title: "Feedback",
      description:
        "The feedback given by the patient or therapist about their experience with the therapy",
    }),
  ],
});


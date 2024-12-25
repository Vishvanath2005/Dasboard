import * as Yup from "yup";

export const Packages_Schema = Yup.object({
  packages_name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  pricing: Yup.string()
    .required("Pricing is required")
    .min(2, "Pricing must be at least 2 characters"),
  credit: Yup.string()
    .required("District is required")
    .min(2, "Name must be at least 2 characters"),
  desciption: Yup.string()
    .optional()
    .max(500, "Description must be at most 500 characters"),
});

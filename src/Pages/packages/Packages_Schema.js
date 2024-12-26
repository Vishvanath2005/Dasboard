import * as yup from "yup";

export const Packages_Schema = yup.object().shape({
  id: yup.string().required("Package ID is required."),
  packageName: yup.string().required("Package Name is required."),
  pricing: yup
    .number()
    .typeError("Pricing must be a number.")
    .positive("Pricing must be greater than zero.")
    .required("Pricing is required."),
  status: yup
    .string()
    .oneOf(["Active", "Inactive"], "Invalid status selection.")
    .required("Status is required."),
  credit: yup
    .number()
    .typeError("Credits must be a number.")
    .positive("Credits must be greater than zero.")
    .required("Credits are required."),
  lastUpdate: yup.string().required("Last Update is required."),
  description: yup.string().required("Description is required."),
});

// validationSchema.js
import * as Yup from "yup";

export const validationSchema = Yup.object({
  institution_name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  address: Yup.string()
    .required("Address is required")
    .min(2, "Name must be at least 2 characters"),
  district: Yup.string()
    .required("District is required")
    .min(2, "Name must be at least 2 characters"),
  state: Yup.string()
    .required("State is required")
    .min(2, "Name must be at least 2 characters"),
  SPOC_name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  SPOC_phone: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
});

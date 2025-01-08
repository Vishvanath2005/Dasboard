import * as Yup from "yup";

export const Enquries_Schema = Yup.object({
  institution_name: Yup.string().required("Institution Name is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^[0-9]+$/, "Phone number must be numeric"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  institution: Yup.string().required("Institution is required"),
  subject: Yup.string().required("Subject is required"),
  status: Yup.string()
    .required("Status is required")
    .oneOf(
      ["active", "inactive", "pending", "completed"],
      "Invalid status selected"
    ),
  date: Yup.date().required("Date is required"),
  note: Yup.string().optional().max(500, "Note must be at most 500 characters"),
});

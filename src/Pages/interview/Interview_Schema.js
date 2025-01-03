import * as yup from "yup";

export const Interview_Schema = yup.object({
  id: yup.number().required("ID is required"),
  interviewId: yup.string().required("Interview ID is required"),
  roomNo: yup.string().required("Room number is required"),
  userId: yup.string().required("User ID is required"),
  userName: yup
    .string()
    .required("User name is required")
    .min(2, "User name must be at least 2 characters"),
  date: yup
    .string()
    .required("Date is required")
    .matches(
      /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/,
      "Date must follow the format: MM/DD/YYYY"
    ),
  slot_Time: yup
    .string()
    .required("Slot time is required")
    .oneOf(["60", "120", "180"], "Slot time must be one of the predefined options"),
  status: yup
    .string()
    .required("Status is required")
    .oneOf(["active", "inactive", "pending", "completed"], "Invalid status selected"),
});

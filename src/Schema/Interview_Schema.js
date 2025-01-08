import * as yup from "yup";

export const Interview_Schema = yup.object({
  interviewId: yup.string().required("Interview ID is required"),
  roomNo: yup.string().required("Room number is required"),
  userId: yup.string().required("User ID is required"),
  userName: yup
    .string()
    .required("User name is required")
    .min(2, "User name must be at least 2 characters"),
  
  slot_Time: yup
    .string()
    .required("Slot time is required")
    .oneOf(["60", "120", "180"], "Slot time must be one of the predefined options"),
  status: yup
    .string()
    .required("Status is required")
    .oneOf(["active", "inactive", "pending", "completed"], "Invalid status selected"),
});

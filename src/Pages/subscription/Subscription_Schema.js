import * as Yup from "yup";

const Subscription_Schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  category: Yup.string().required("Category is required"),
  paymentMode: Yup.string().required("Payment mode is required"),
  transactionDetails: Yup.string().required("Transaction details are required"),
  paymentStatus: Yup.string()
    .oneOf(["online", "website"], "Invalid payment status")
    .required("Payment status is required"),
  package: Yup.string().required("Package name is required"),
  credit: Yup.number()
    .typeError("Credit must be a number")
    .min(1, "Credit must be at least 1")
    .required("Credit is required"),
});

export default Subscription_Schema;

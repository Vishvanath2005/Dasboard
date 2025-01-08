import * as Yup from 'yup';

const Leads_Schema = Yup.object().shape({
    complaint_raised_from: Yup.string()
    .required('Complaint Raised From is required')
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email ID is required'),
  address: Yup.string()
    .required('Address is required')
    .min(2, "Address must be at least 2 characters"),
  city: Yup.string()
    .required('City is required')
    .min(2, "City must be at least 2 characters"),
  state: Yup.string()
    .required('State is required')
    .min(2, "State must be at least 2 characters"),
  note: Yup.string()
    .max(500, 'Note must be less than 500 characters')
    .required('Note is required'),
});

export default Leads_Schema;

import * as Yup from 'yup';

const User_Schema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .max(50, 'Name cannot exceed 50 characters'),
  credits: Yup.number()
    .required('Credits are required')
    .min(0, 'Credits cannot be negative'),
  gender: Yup.string()
    .oneOf(['Male', 'Female', 'Other'], 'Invalid gender selection')
    .required('Gender is required'),
  dateOfBirth: Yup.date()
    .required('Date of birth is required')
    .max(new Date(), 'Date of birth cannot be in the future'),
  age: Yup.number()
    .required('Age is required')
    .min(0, 'Age must be at least 0')
    .max(120, 'Age must be less than or equal to 120'),
  department: Yup.string()
  .oneOf(['Dept1', 'Dept2', 'Dept3'], 'Invalid gender selection')
    .required('Department is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  apartment: Yup.string()
    .required('Apartment is required'),
  city: Yup.string()
    .required('City is required'),
  state: Yup.string()
    .required('State is required'),
  pinCode: Yup.string()
    .matches(/^[0-9]{6}$/, 'Pin code must be 6 digits')
    .required('Pin code is required'),
  skills: Yup.array()
    .of(Yup.string())
    .min(1, 'At least one skill is required'),
  strongerAreas: Yup.array()
    .of(Yup.string())
    .min(1, 'At least one strong area is required'),
  needToImprove: Yup.array()
    .of(Yup.string())
    .min(1, 'At least one improvement area is required'),
  emotionalStatus: Yup.array()
  .of(Yup.string())
  .min(1, 'At least one improvement area is required'),
  description: Yup.string()
    .max(500, 'Description cannot exceed 500 characters'),
});

export default User_Schema;

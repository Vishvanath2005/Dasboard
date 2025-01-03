import * as Yup from 'yup';

const LeadsFU_Schema = Yup.object().shape({
  note: Yup.string()
    .max(500, 'Note must be less than 500 characters')
    .required('Note is required'),
    nextFollowUp: Yup.date().required("Date is required"),
});

export default LeadsFU_Schema;

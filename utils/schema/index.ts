import { phoneRegExp } from '../constants';
import * as yup from 'yup';

export const ShiftRegistrationSchema = yup.object().shape({
  phone_number: yup.string().required('Phone number is required field').matches(phoneRegExp, 'Invalid phone number'),
  first_name: yup.string().required('First name is required field'),
  last_name: yup.string().required('Last name is required field'),
  birthday: yup.string().required('Birthday is required field'),
  postcode: yup.string().required('Postcode is required field'),
  ni_number: yup.string().required('Ni number is required field'),
  email: yup.string().required('Email is required field').email('Invalid Email'),
  password: yup.string().required('Password is required field'),
});

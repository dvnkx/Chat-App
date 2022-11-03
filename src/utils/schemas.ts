import * as Yup from 'yup';

export const authSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is a required field')
    .email('Invalid email format'),
  password: Yup.string()
    .required('Password is a required field')
    .min(8, 'Password must be at least 8 characters'),
});

export const profileSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Name must be at least 1 characters')
    .max(16, 'Name mustn`t be more than 16 characters')
    .required('Name is a required field'),
  surname: Yup.string()
    .min(1, 'Surnema must be at least 1 characters')
    .max(20, 'Surname mustn`t be more than 20 characters '),
});

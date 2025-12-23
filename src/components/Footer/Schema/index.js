import * as Yup from 'yup';


export const emailSubscriberSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Enter email address'),
});

export const emailSubscriberInitialValues = {
  email: '',
}
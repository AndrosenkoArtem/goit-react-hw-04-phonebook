import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Label, Button } from './ContactForm.styled';
const contactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name'
    )
    .required('Obligatory field'),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number format'
    )
    .required('Obligatory field'),
});
export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) => {
        return onSubmit({ ...values, id: nanoid() }, actions.resetForm());
      }}
      validationSchema={contactSchema}
    >
      <Form>
        <Label>
          <div>Name</div>
          <Field type="text" name="name"></Field>
          <ErrorMessage name="name" component="span" />
        </Label>
        <Label>
          <div>Number</div>
          <Field type="tel" name="number"></Field>
          <ErrorMessage name="number" component="span" />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
ContactForm.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

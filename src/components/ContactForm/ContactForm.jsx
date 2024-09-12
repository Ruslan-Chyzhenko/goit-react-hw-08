import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    const { name, number } = values;

    dispatch(addContact({ name, number }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.fieldContainer}>
          <label htmlFor="name" className={css.label}>
            Name
          </label>
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        <div className={css.fieldContainer}>
          <label htmlFor="number" className={css.label}>
            Number
          </label>
          <Field className={css.field} type="text" name="number" />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>
        <div className={css.buttonContainer}>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}

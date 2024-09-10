// Додайте у файл redux/auth/operations.js операції, оголошені за допомогою createAsyncThunk, для роботи з користувачем:
// register - для реєстрації нового користувача. Базовий тип екшену "auth/register". Використовується у компоненті RegistrationForm на сторінці реєстрації.

import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password too short").required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="name" type="text" placeholder="Name" />
        <Field name="email" type="email" placeholder="Email" />
        <Field name="password" type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;

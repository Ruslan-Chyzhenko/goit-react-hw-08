// login - для логіну існуючого користувача. Базовий тип екшену "auth/login".
// Використовується у компоненті LoginForm на сторінці логіну.

import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
// import css from "./LoginForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password too short").required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
        actions.resetForm();
      })
      .catch(() => {
        console.log("login error");
      });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="email" type="email" placeholder="Email" />
        <Field name="password" type="password" placeholder="Password" />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

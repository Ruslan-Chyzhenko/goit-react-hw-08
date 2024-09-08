// refreshUser - оновлення користувача за токеном. Базовий тип екшену "auth/refresh".
// Використовується у компоненті App під час його монтування.

// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchContacts } from "../../redux/contactsOps";

import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import Layout from "../Layout";
import PrivateRoute from "../PrivateRoute";
import RestrictedRoute from "../RestrictedRoute";

// import ContactList from "../ContactList/ContactList";
// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
// import css from "../App/App.module.css";

//

export default function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // return (
  //   <div className={css.container}>
  //     <h1>PhoneBook</h1>
  //     <ContactForm />
  //     <SearchBox />
  //     <ContactList />
  //   </div>
  // );
  // }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
}

{
  /* // return (
//     <Layout>
//       <AppBar />
//       <ContactForm />
// { */
}
{
  /* //   isLoading && !error && <b>Request in progress...</b>;
// }
//       <ContactList />
//     </Layout>
//   );
// }; */
}

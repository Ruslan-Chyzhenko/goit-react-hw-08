// refreshUser - оновлення користувача за токеном. Базовий тип екшену "auth/refresh".
// Використовується у компоненті App під час його монтування.

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";

import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import css from "../App/App.module.css";

//

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>PhoneBook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

//  return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/register" element={<RegistrationPage />} />
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
//     </Routes>
//   );
// }

// return (
//     <Layout>
//       <AppBar />
//       <ContactForm />
// {
//   isLoading && !error && <b>Request in progress...</b>;
// }
//       <ContactList />
//     </Layout>
//   );
// };

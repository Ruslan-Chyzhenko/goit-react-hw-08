import ContactEditor from "../../components/ContactEditor/ContactEditor";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";

import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading, selectContacts } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <div>{isLoading && "Request in progress..."}</div>
      {contacts && contacts.length > 0 ? (
        <ContactList contacts={contacts} />
      ) : (
        <p>No contacts found</p>
      )}
      <ContactForm />
      <SearchBox />
    </>
  );
};

export default ContactsPage;

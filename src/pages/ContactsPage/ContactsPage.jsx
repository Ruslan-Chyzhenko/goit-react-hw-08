import ContactEditor from "../../components/Contact/ContactEditor";
import ContactList from "../../components/Contact/ContactList";

const ContactsPage = () => {
  return (
    <>
      <h1>Your Contacts</h1>
      <ContactEditor />
      <ContactList />
    </>
  );
};

export default ContactsPage;

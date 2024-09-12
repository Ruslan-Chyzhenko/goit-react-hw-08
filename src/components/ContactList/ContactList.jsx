import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../redux/contacts/selectors";

import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilter) || [];

  function handleDelete(contactId) {
    dispatch(deleteContact(contactId));
  }

  return (
    <div className={css.gridContainer}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={handleDelete}
            />
          </li>
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default ContactList;

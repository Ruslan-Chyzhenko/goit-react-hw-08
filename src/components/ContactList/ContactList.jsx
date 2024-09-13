import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";

import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts) || [];

  function handleDelete(contactId) {
    dispatch(deleteContact(contactId));
  }

  return (
    <>
      <ul className={css.gridContainer}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <li className={css.item} key={contact.id}>
              <Contact
                id={contact.id}
                name={contact.name}
                number={contact.number}
                onDelete={() => handleDelete(contact.id)}
              />
            </li>
          ))
        ) : (
          <p></p>
        )}
      </ul>
    </>
  );
};

export default ContactList;

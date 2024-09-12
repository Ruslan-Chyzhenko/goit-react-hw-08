import { useDispatch } from "react-redux";
import { useState } from "react";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactEditor.module.css";

const ContactEditor = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || number.trim() === "") {
      alert("Both fields are required.");
      return;
    }
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        name="name"
        className={css.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <input
        name="number"
        className={css.input}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter number"
      />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactEditor;

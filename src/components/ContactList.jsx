import React from "react";
import Contact from "./Contact";
import "./ContactList.css";

const ContactList = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className="classList">
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;

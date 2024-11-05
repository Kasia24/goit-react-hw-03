import React from "react";

const Contact = ({ contact, deleteContact }) => (
  <li className="classContact">
    {contact.name}: {contact.number}
    <button onClick={() => deleteContact(contact.id)}>Delete</button>
  </li>
);

export default Contact;

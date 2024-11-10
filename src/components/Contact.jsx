import React from "react";
import "./Contact.css";

const Contact = ({ contact, deleteContact }) => (
  <li className="classContact">
    {contact.name} {contact.number}
    <button onClick={() => deleteContact(contact.id)}>Delete</button>
  </li>
);

export default Contact;

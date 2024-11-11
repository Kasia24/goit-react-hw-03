import React from "react";
import "./Contact.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ contact, deleteContact }) => (
  <li className="classContact">
    <span className="classSpan">
      <FaUser style={{ marginRight: "8px" }} />
      {contact.name}
    </span>
    <span>
      <FaPhone style={{ marginRight: "8px" }} />
      {contact.number}
    </span>
    <button onClick={() => deleteContact(contact.id)} className="btn">
      Delete
    </button>
  </li>
);

export default Contact;

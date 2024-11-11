import React from "react";
import "./Contact.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ contact, deleteContact }) => (
  <li className="classContact">
    <FaUser style={{ marginRight: "8px" }} />
    {contact.name}
    <FaPhone style={{ marginRight: "8px" }} />
    {contact.number}
    <button onClick={() => deleteContact(contact.id)} className="btn">
      Delete
    </button>
  </li>
);

export default Contact;

import React from "react";
import "./Contact.css";

const Contact = ({ contact, deleteContact }) => (
  <li className="classContact">
    {contact.name} {contact.number}
    <button onClick={() => deleteContact(contact.id)} className="btn">
      Delete
    </button>
  </li>
);

export default Contact;


<div class="contact-info">
    <span class="icon user-icon">👤</span>
    <span class="contact-name">Rosie Simpson</span>
    <button class="delete-button">Delete</button>
  </div>
  <div class="contact-phone">
    <span class="icon phone-icon">📞</span>
    <span class="phone-number">459-12-56</span>
  </div>

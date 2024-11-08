import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import "./ContactForm.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .required("Name is required"),
  number: Yup.string().required("Number is required"),
});

const ContactForm = ({ addContact }) => (
  <Formik
    initialValues={{ name: "", number: "" }}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      addContact({ ...values, id: nanoid() });
      resetForm();
    }}
  >
    <Form className="classForm">
      <label className="classLabel">
        Name
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />
      </label>
      <label className="classLabel">
        Number
        <Field type="text" name="number" />
        <ErrorMessage name="number" component="div" />
      </label>
      <button type="submit" className="classBtn">
        Add Contact
      </button>
    </Form>
  </Formik>
);

export default ContactForm;

import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm />
      <section>
        <h2>Our Contact Information</h2>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@company.com</p>
      </section>
    </div>
  );
};

export default ContactUs;

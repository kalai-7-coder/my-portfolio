import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! (Form submission simulation)');
    // Later you can use EmailJS or backend to send to: kalaiyamuthanvip@gmail.com
    setQuery('');
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Phone: +91 9629542316</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Write your message here..."
          rows="5"
          required
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;

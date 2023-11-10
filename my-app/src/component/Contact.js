// src/components/Contact.js
import React from 'react';

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>Feel free to contact us on social media:</p>
    <button onClick={() => window.location.href = 'https://twitter.com'}>
      Access Twitter
    </button>
  </div>
);

export default Contact;


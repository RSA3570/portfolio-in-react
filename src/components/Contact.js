import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700">Email: <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">your.email@example.com</a></p>
        <p className="text-gray-700">LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-500 hover:underline">yourprofile</a></p>
      </div>
    </section>
  );
};

export default Contact;

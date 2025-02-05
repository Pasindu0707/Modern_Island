import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.inquiry,
    };

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        emailParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      setSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-lg">
            Have any questions or inquiries? We'd love to hear from you! Fill
            out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
          {/* Contact Details */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <strong className="text-yellow-400">Name:</strong> Mayura
                Fernando
              </li>
              <li>
                <strong className="text-yellow-400">Phone:</strong> +94 77 298
                6680
              </li>
              <li>
                <strong className="text-yellow-400">Email:</strong>{' '}
                <a
                  href="mailto:modernislandofficial@gmail.com"
                  className="hover:underline"
                >
                  modernislandofficial@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="inquiry"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Inquiry
                  </label>
                  <textarea
                    id="inquiry"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>
              </form>
            ) : (
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-400">
                  Your message has been sent successfully. We'll get back to you
                  soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

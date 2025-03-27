import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', inquiry: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.inquiry,
    };

    try {
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams, 'YOUR_PUBLIC_KEY');
      setSubmitted(true);
      setFormData({ name: '', email: '', inquiry: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen animated-bg text-white py-20 px-4 scroll-mt-20">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-8">
          <div className="section-title-container">
            <h2 className="gradient-text text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-300 text-lg">We'd love to hear from you!</p>
          </div>

          <div className="modern-card">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4 text-base text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-pink-400">Name:</span>
                <span>Mayura Fernando</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-400">Phone:</span>
                <a href="tel:+94772986680" className="hover:text-pink-400 transition-colors">
                  +94 77 298 6680
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-400">Email:</span>
                <a 
                  href="mailto:modernislandofficial@gmail.com" 
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  modernislandofficial@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="modern-card p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'inquiry'].map((field) => (
                <div key={field} className="space-y-2">
                  <label 
                    htmlFor={field} 
                    className="block text-sm font-medium text-pink-400 capitalize"
                  >
                    {field}
                  </label>
                  {field === 'inquiry' ? (
                    <textarea 
                      id={field}
                      name={field}
                      rows="4"
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="glass-effect w-full px-4 py-3 text-white rounded-xl"
                      placeholder="Your message..."
                    />
                  ) : (
                    <input 
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="glass-effect w-full px-4 py-3 text-white rounded-xl"
                      placeholder={`Your ${field}...`}
                    />
                  )}
                </div>
              ))}

              {error && (
                <div className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="modern-button w-full"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </form>
          ) : (
            <motion.div 
              className="text-center p-8 glass-effect rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-3 gradient-text">Thank You!</h3>
              <p className="text-gray-300">We'll get back to you soon!</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default ContactForm;
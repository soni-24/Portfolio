import React, { useState } from "react";
import Section from "./Section";


 const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // In a real application, you would handle form submission here (e.g., send data to a backend service)
      alert("Thank you for your message! This is a demo. In a real app, this would be sent to Soni.");
    };

    return (
      <Section id="contact" className="bg-black text-white">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400">Contact</h2>
          <div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-xl shadow-2xl">
            <h3 className="text-3xl font-semibold mb-6">Let's Connect</h3>
            <p className="mb-6 text-lg">
              Feel free to reach out to me via email or through the form below.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-4 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-4 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
              <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} className="w-full p-4 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" required></textarea>
              <button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 transition-colors text-white py-4 rounded-full text-lg font-semibold shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>
    );
  };
  

export default ContactSection
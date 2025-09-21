import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import DraggableIdCard from "./DraggableIdCard";
import { socialLinksData } from "../constants";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.message || "Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Failed to send. Try again.");
    }
  };

  return (
    <AnimatedSection id="contact">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          I'm currently open to new opportunities. Have a question or want to work together? Drop me a line!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* Left: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <form
            className="space-y-6 bg-black/10 p-8 rounded-lg border border-white/30"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black border border-white/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-white/50 focus:outline-none transition"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black border border-white/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-white/50 focus:outline-none transition"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black border border-white/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-white/50 focus:outline-none transition"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full relative inline-block px-8 py-3 font-semibold text-white overflow-hidden border border-white/30 rounded-lg group hover:text-black"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative z-10">Send Message</span>
            </button>
            {status && <p className="mt-4 text-sm text-gray-300">{status}</p>}
          </form>
        </motion.div>

        {/* Right: Draggable ID Card */}
        <div className="relative h-96 flex items-center justify-center order-first lg:order-last min-h-[400px]">
          <DraggableIdCard />
        </div>
      </div>

      {/* Social Links below */}
      <div className="flex justify-center space-x-6 mt-20">
        {socialLinksData.map((social) => (
          <a
            key={social.name}
            href={social.url}
            aria-label={social.name}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
            style={{ color: social.color }}
          >
            <social.icon className="w-10 h-10" />
          </a>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Contact;

import { useRef } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submit logic here

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    emailjs
      .sendForm(
        SERVICE_ID,    // Replace with your EmailJS Service ID
        TEMPLATE_ID,   // Replace with your EmailJS Template ID
        formRef.current,      // The form element
        PUBLIC_KEY     // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert('Email sent successfully:', result.text);
          formRef.current.reset(); // Reset form after successful send
        },
        (error) => {
          alert('Failed to send email:', error.text);
        }
      );
      
  };

  return (
    <section
      id="Contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px4 w-150">
          <h2 className="text-3xl gradient-text">Contact Me</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

            <div className="relative">
              <input
                type="name"
                id="name"
                name="name"
                required
                className="w-full outline-none bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:bg-blue-500/5 focus:border-blue-500"
                placeholder="Full Name"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full outline-none bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:bg-blue-500/5 focus:border-blue-500"
                placeholder="Email"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full outline-none bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:bg-blue-500/5 focus:border-blue-500"
                placeholder="Message"
              />
            </div>

            <div>
              <button
                type="submit"
                className="relative w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-md shadow-blue-500/50 cursor-pointer"
              >
                {" "}
                Send Message
              </button>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

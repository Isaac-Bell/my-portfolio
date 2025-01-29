import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <form>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:ring-2 focus:ring-neutral-400 focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:ring-2 focus:ring-neutral-400 focus:outline-none"
            placeholder="your@email.com"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:ring-2 focus:ring-neutral-400 focus:outline-none"
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-neutral-900 text-white py-3 px-6 rounded-md hover:bg-neutral-800 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

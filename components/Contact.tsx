import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";


const Contact: React.FC = () => {
  return (
    <main id="main" className="min-h-screen bg-neutral-50 flex  items-center">
      <section id="contact-section" className="container  mx-auto px-4 py-16">
        <div className="max-w-10xl mx-auto pb-20">
          <h1 className="text-4xl font-bold text-neutral-900 mb-8 text-center pb-10">
            Get in Touch
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

import React from "react";
import ContactMapSection from "../components/contact/ContactMapSection";
import ContactAccordion from "../components/contact/ContactAccordion";
import Hero from "../components/common/ui/Hero";

export default function Contact() {
  return (
    <div>
      <Hero
        title="Contact Us"
        backgroundImage="https://images.unsplash.com/photo-1740560051533-3acef26ace95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbnRhY3QlMjB1c3xlbnwwfDB8MHx8fDA%3D"
        height="h-[200px] md:h-[200px] lg:h-[400px]"
        overlayOpacity="bg-black/10"
      />

      <p className="p-12 text-xl">
        Have a question? Want to leave feedback or just say hi? Please don’t
        hesitate to complete the form below if you want to discuss ways we could
        help you reach your objectives.
      </p>

      <ContactMapSection />
      <ContactAccordion />
    </div>
  );
}

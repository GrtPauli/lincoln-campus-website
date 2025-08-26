import React from "react";
import StyledUnderline from "../common/ui/StyledUnderline";

const programmes = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1691962725028-e825955a7c1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D",
    title: "Programme Enquiry",
    cta: "Enquire Now",
    href: "/enquiry",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D",
    title: "Programme Eligibility",
    cta: "Check Eligibility",
    href: "/eligibility",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1691844987860-b9efa12844dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D",
    title: "Faculty & School",
    cta: "Click to Learn More",
    href: "/faculty",
  },
];

function Programmes() {
  return (
    <section className="w-full p-12 py-14">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8 inline-block">
          <h2 className="text-2xl md:text-3xl font-bold text-text">
            Explore Our Programmes
          </h2>
          <StyledUnderline />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {programmes.map((programme) => (
            <div
              key={programme.id}
              className="bg-secondary shadow-sm rounded-xl overflow-hidden hover:shadow-sm transition-shadow duration-300 flex flex-col"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={programme.image}
                  alt={programme.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col flex-grow p-6 text-center">
                <h2 className="text-lg font-semibold text-text mb-3">
                  {programme.title}
                </h2>

                <a
                  href={programme.href}
                  className="mt-auto inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary/90 to-primary text-secondary font-medium hover:from-primary hover:to-primary/95 transition-all duration-300"
                >
                  {programme.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programmes;

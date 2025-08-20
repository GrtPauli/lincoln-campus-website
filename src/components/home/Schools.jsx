import React from "react";
import StyledUnderline from "../common/ui/StyledUnderline";

const schools = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1733317306663-3c202d428d65?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Nob29sJTIwb2YlMjBtZWRpY2luZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "School of Medicine",
    href: "/school-of-medicine",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1682145291930-43b73e27446e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjaG9vbCUyMG9mJTIwRGVudGlzdHJ5fGVufDB8fDB8fHww",
    title: "School of Dentistry",
    href: "/school-of-dentistry",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1661511796830-5b3e8d2aada6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNjaG9vbCUyMG9mJTIwQnVzaW5lc3MlMjAlMjYlMjBNYW5hZ2VtZW50fGVufDB8fDB8fHww",
    title: "School of Business & Management",
    href: "/school-of-business-management",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1682129959290-11b419ff6e34?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHNjaG9vbCUyMG9mJTIwUGhhcm1hY3klMjAlMjYlMjBUcmFkaXRpb25hbCUyMENvbXBsZW1lbnRhcnklMjBNZWRpY2luZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "School of Pharmacy & Traditional Complementary Medicine",
    href: "/school-of-pharmacy-traditional-complementary-medicine",
  },
  {
    id: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1664476553552-84de4520b37c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2Nob29sJTIwb2YlMjBOdXJzaW5nfGVufDB8fDB8fHww",
    title: "School of Nursing & Applied Sciences",
    href: "/school-of-nursing-applied-sciences",
  },
  {
    id: 6,
    image:
      "https://plus.unsplash.com/premium_photo-1705317904297-6474a9296082?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjaG9vbCUyMG9mJTIwRW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D",
    title: "School of Engineering",
    href: "/school-of-engineering",
  },
  {
    id: 7,
    image:
      "https://plus.unsplash.com/premium_photo-1690297853326-e127726588ac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QUklMjBDb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
    title: "School of AI Computing & Multimedia",
    href: "/school-of-ai-computing-multimedia",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1647083423346-f33eae634d9b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fFNjaG9vbCUyMG9mJTIwU29jaWFsJTIwU2NpZW5jZXMlMkMlMjBBcnRzJTIwJTI2JTIwSHVtYW5pdGllc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "School of Social Sciences, Arts & Humanities",
    href: "/school-of-social-sciences-arts-humanities",
  },
  {
    id: 9,
    image:
      "https://plus.unsplash.com/premium_photo-1683887033237-56399a62579b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fFNjaG9vbCUyMG9mJTIwRWR1Y2F0aW9ufGVufDB8fDB8fHww",
    title: "School of Education",
    href: "/school-of-education",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzdGFuY2UlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Centre of ODL",
    href: "/centre-of-odl",
  },
   {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1708580877126-dcf49698a97c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fFNjaG9vbCUyMG9mJTIwSG9zcGl0YWxpdHklMjAlMjYlMjBUb3VyaXNtfGVufDB8fDB8fHww",
    title: "School of Hospitality & Tourism",
    href: "/school-of-hospitality-tourism",
  },
  {
    id: 12,
    image:
      "https://plus.unsplash.com/premium_photo-1661610778702-371e7bd35cac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2Nob29sJTIwb2ZBY2NvdW50aW5nJTIwJTI2JTIwRmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "School of Accounting & Finance",
    href: "/school-of-accounting-finance",
  },
];

function SchoolsSection() {
  return (
    <section className="w-full p-12 py-14 bg-bg">
      <div className="mb-12 inline-block">
        <h2 className="text-2xl md:text-3xl font-bold text-text">
          Our Schools
        </h2>
        <StyledUnderline />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {schools.map((school) => (
          <div
            key={school.id}
            className="bg-secondary rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={school.image}
                alt={school.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="text-xl font-semibold text-text mb-4">
                {school.title}
              </h3>
              <a
                href={school.href}
                className="mt-auto inline-block px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SchoolsSection;

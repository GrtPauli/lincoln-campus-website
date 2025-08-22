import Accordion from "../common/ui/Accordion";

export default function ContactAccordion() {
  return (
    <section className="p-12 space-y-8">
      <Accordion data={accordionData} />

      <Accordion data={accordionData2} />
    </section>
  );
}

const accordionData = [
  {
    title: "Registrar",
    content: (
      <div className="space-y-2">
        <p className="font-semibold text-lg">Mohd Nikmat Bin Wahib</p>
        <p className="text-sm text-gray-700">Registrar</p>
        <p className="text-sm">
          E-Mail:{" "}
          <a
            href="mailto:registrar@lincoln.edu.my"
            className="text-red-600 hover:underline"
          >
            registrar@lincoln.edu.my
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Student Affairs Department",
    content: <p className="text-sm text-gray-700">Details about student affairs...</p>,
  },
  {
    title: "Examination Unit",
    content: <p className="text-sm text-gray-700">Details about exams...</p>,
  },
  {
    title: "Hostel Information",
    content: <p className="text-sm text-gray-700">Details about hostels...</p>,
  },
];

const accordionData2 = [
  { title: "China", content: <p className="text-sm text-gray-700">Details about China...</p> },
  { title: "India", content: <p className="text-sm text-gray-700">Details about India...</p> },
  { title: "Nigeria", content: <p className="text-sm text-gray-700">Details about Nigeria...</p> },
  { title: "Pakistan", content: <p className="text-sm text-gray-700">Details about Pakistan...</p> },
  { title: "South India", content: <p className="text-sm text-gray-700">Details about South India...</p> },
  { title: "Sri Lanka", content: <p className="text-sm text-gray-700">Details about Sri Lanka...</p> },
];



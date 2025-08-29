import React, { useState } from "react";

export default function EventsCards() {
  const events = [
    {
      id: 1,
      title: "Iraq Cultural Attaché Visited Lincoln",
      date: "2025-02-10",
      image:
        "https://posts.lincoln.edu.my/wp-content/uploads/2025/08/536275922_1108234651445981_3227583801955754478_n-1005x1024.jpg",
      description:
        "We were honored to welcome a delegation from the Embassy of the Republic of Iraq to Lincoln University College, Malaysia. The esteemed guests included: Dr. Abduljaleel",
    },
    {
      id: 2,
      title: "Zyvia Moringa & Ginger Herbal Bath Soap Launch",
      date: "2025-04-18",
      image:
        "https://posts.lincoln.edu.my/wp-content/uploads/2025/08/536275922_1108234651445981_3227583801955754478_n-1005x1024.jpg",
      description:
        "The School of Pharmacy & TCM at Lincoln University College proudly launched its first herbal bath soap, taking research to market-ready innovation.",
    },
    {
      id: 3,
      title: "LUC Engineering Students Win Two Awards at ESTE 2025",
      date: "2025-05-02",
      image:
        "https://posts.lincoln.edu.my/wp-content/uploads/2025/08/536275922_1108234651445981_3227583801955754478_n-1005x1024.jpg",
      description:
        "Students from the School of Engineering, Lincoln University College, participated in the ESTE 2025 Exhibition at MAHSA University and won two prestigious awards.",
    },
    {
      id: 4,
      title: "Lincoln Hosts International Research Conference",
      date: "2025-07-12",
      image:
        "https://posts.lincoln.edu.my/wp-content/uploads/2025/08/536275922_1108234651445981_3227583801955754478_n-1005x1024.jpg",
      description:
        "Lincoln University College organized an international conference bringing together researchers and scholars to discuss the future of interdisciplinary studies.",
    },
    {
      id: 5,
      title: "MoU Signed with Global Education Partners",
      date: "2025-06-18",
      image:
        "https://posts.lincoln.edu.my/wp-content/uploads/2025/08/536275922_1108234651445981_3227583801955754478_n-1005x1024.jpg",
      description:
        "An MoU was signed between Lincoln University College and international education partners to foster collaboration in academics, research, and student exchange.",
    },
    {
      id: 6,
      title: "Medical Faculty Organizes Health Awareness Week",
      date: "2025-09-25",
      image:
        "https://posts.lincoln.edu.my/wp-content/uploads/2025/08/536275922_1108234651445981_3227583801955754478_n-1005x1024.jpg",
      description:
        "The Faculty of Medicine at Lincoln University College hosted a health awareness week with seminars, free check-ups, and community outreach programs.",
    },
    {
      id: 7,
      title: "Cultural Fest 2025 at Lincoln University College",
      date: "2025-10-05",
      image:
        "https://posts.lincoln.edu.my/wp-content/uploads/2025/08/536275922_1108234651445981_3227583801955754478_n-1005x1024.jpg",
      description:
        "Students from diverse backgrounds celebrated unity in diversity during the annual Cultural Fest 2025, featuring music, dance, and traditional cuisine.",
    },
    {
      id: 8,
      title: "LUC Students Participate in National Innovation Challenge",
      date: "2025-10-15",
      image:
        "https://posts.lincoln.edu.my/wp-content/uploads/2025/08/536275922_1108234651445981_3227583801955754478_n-1005x1024.jpg",
      description:
        "Lincoln University College students showcased their innovative projects at the National Innovation Challenge and received recognition for creativity.",
    },
    {
      id: 9,
      title: "Graduation Ceremony 2025",
      date: "2025-10-28",
      image:
        "https://posts.lincoln.edu.my/wp-content/uploads/2025/08/536275922_1108234651445981_3227583801955754478_n-1005x1024.jpg",
      description:
        "Lincoln University College proudly celebrated the achievements of its graduating class of 2025 in a grand convocation ceremony attended by dignitaries.",
    },
  ];

  const [filter, setFilter] = useState("all");
  const today = new Date();

  const filteredEvents = events.filter((event) => {
    if (filter === "upcoming") {
      return new Date(event.date) >= today;
    }
    return true;
  });

  return (
    <div>
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            filter === "all"
              ? "bg-primary text-secondary shadow-sm"
              : "bg-secondary border border-border hover:bg-border cursor-pointer "
          }`}
        >
          All Events
        </button>
        <button
          onClick={() => setFilter("upcoming")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            filter === "upcoming"
              ? "bg-primary text-secondary  shadow-sm"
              : "bg-secondary border border-border hover:bg-border cursor-pointer"
          }`}
        >
          Upcoming Events
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-secondary rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-3 right-3 bg-text/90 text-secondary text-xs px-3 py-1 rounded-full">
                EVENTS
              </span>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-text/80 mb-3">
                {new Date(event.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="text-text/90 flex-grow">{event.description}</p>

              <button className="mt-4 self-start px-4 py-2 text-sm bg-primary text-secondary rounded-lg hover:bg-primary/90 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

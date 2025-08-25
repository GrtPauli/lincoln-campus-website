// import React from "react";
// import { FaSearch, FaListAlt, FaUserFriends, FaUsers, FaThLarge, FaCommentDots } from "react-icons/fa";

// const navItems = [
//   { id: 1, label: "Overview", icon: <FaSearch />, href: "#overview" },
//   { id: 2, label: "Programmes", icon: <FaListAlt />, href: "#programmes" },
//   { id: 3, label: "Dean Message", icon: <FaUserFriends />, href: "#dean-message" },
//   { id: 4, label: "Faculty Members", icon: <FaUsers />, href: "#faculty-members" },
//   { id: 5, label: "Gallery", icon: <FaThLarge />, href: "#gallery" },
//   { id: 6, label: "Testimonial", icon: <FaCommentDots />, href: "#testimonial" },
// ];

// export default function FacultyNav() {
//   return (
//     <nav className="w-full bg-primary py-3">
//       <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
//         {navItems.map((item) => (
//           <li key={item.id}>
//             <a
//               href={item.href}
//               className="flex flex-col items-center text-secondary hover:text-border transition-colors duration-200"
//             >
//               <span className="text-xl mb-1">{item.icon}</span>
//               <span className="text-sm font-medium">{item.label}</span>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }



import React from "react";
import {
  FaSearch,
  FaListAlt,
  FaUserFriends,
  FaUsers,
  FaThLarge,
  FaCommentDots,
} from "react-icons/fa";

const navItems = [
  { id: 1, label: "Overview", icon: <FaSearch />, href: "#overview" },
  { id: 2, label: "Programmes", icon: <FaListAlt />, href: "#programmes" },
  { id: 3, label: "Dean Message", icon: <FaUserFriends />, href: "#dean-message" },
  { id: 4, label: "Faculty Members", icon: <FaUsers />, href: "#faculty-members" },
  { id: 5, label: "Gallery", icon: <FaThLarge />, href: "#gallery" },
  { id: 6, label: "Testimonial", icon: <FaCommentDots />, href: "#testimonials" },
];

export default function FacultyNav() {
  return (
    <nav className="w-full bg-primary py-3 stick top-0 z-50 shadow-md">
      <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="flex flex-col items-center text-secondary hover:text-border transition-colors duration-200"
            >
              <span className="text-xl mb-1">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

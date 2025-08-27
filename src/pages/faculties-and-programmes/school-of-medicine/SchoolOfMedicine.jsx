import React from "react";
import MainLayout from "../../../layouts/MainLayout";
import Hero from "../../../components/common/ui/Hero";
import FacultyNav from "../../../components/common/ui/faculty-and-programmes/FacultyNav";
import Overview from "../../../components/common/ui/faculty-and-programmes/Overview";
import Programmes from "../../../components/common/ui/faculty-and-programmes/Programmes";
import DeanMessage from "../../../components/common/ui/faculty-and-programmes/DeanMessage";
import FacultyMembers from "../../../components/common/ui/faculty-and-programmes/FacultyMembers";
import Gallery from "../../../components/common/ui/faculty-and-programmes/Gallery";
import Testimonials from "../../../components/common/ui/faculty-and-programmes/Testimonials";

export default function SchoolOfMedicine() {
  const programmes = [
    {
      title: "Doctor of Medicine",
      image:
        "https://www.lincoln.edu.my/wp-content/uploads/2025/01/Doctor-of-Medicine.webp",
      href: "/programmes/doctor-of-medicine",
    },
    {
      title: "Doctor of Philosophy in Medical Sciences",
      image:
        "https://www.lincoln.edu.my/wp-content/uploads/2025/01/Medical-Sciences-font.webp",
      href: "/programmes/phd-medical-sciences",
    },
    {
      title: "Doctor of Philosophy (PhD) in Medical Physiology [By Research]",
      image:
        "https://www.lincoln.edu.my/wp-content/uploads/2025/01/Medical-Physiology-font.webp",
      href: "/programmes/phd-medical-physiology",
    },
    {
      title: "PhD in Medical Anatomy",
      image:
        "https://www.lincoln.edu.my/wp-content/uploads/2025/01/Medical-Anatomy-font.webp",
      href: "/programmes/phd-medical-anatomy",
    },
    {
      title: "Master of Science in Public Health",
      image:
        "https://www.lincoln.edu.my/wp-content/uploads/2025/01/Public-Health-font.jpg",
      href: "/programmes/msc-public-health",
    },
    {
      title: "Master of Medical Sciences",
      image:
        "https://www.lincoln.edu.my/wp-content/uploads/2025/01/public-health-2-font.jpg",
      href: "/programmes/msc-medical-sciences",
    },
    {
      title: "Master in Medical Ultrasound",
      image:
        "https://www.lincoln.edu.my/wp-content/uploads/2025/01/Medical-Ultrasound-font.jpg",
      href: "/programmes/msc-medical-ultrasound",
    },
    {
      title: "Bachelor of Cardiopulmonary and Perfusion Technology (Hons)",
      image:
        "https://www.lincoln.edu.my/wp-content/uploads/2025/01/Cardiopulmonary-and-Perfusion-Technology-front.webp",
      href: "/programmes/hons-cardio-and-perfusion",
    },
  ];

  const dean = {
    image:
      "https://www.lincoln.edu.my/wp-content/uploads/2025/01/Prof.-Dr-Zarina-Awang.webp",
    name: "Prof. Dr Zarina Awang",
    title: "Dean, School of Medicine",
    school: "Lincoln University College",
    heading: "Message By The Dean",
    message: [
      "Assalamualaikum, Good day, Selamat Pagi, Bonjour, Ohayo Gozaimasu, Zaoshang Hao, Ahlan Wasahlan, Namaste!!",
      "Welcome to the School of Medicine!",
      "It is with great pride and enthusiasm that I extend a warm welcome to all our undergraduate and postgraduate students, school members, and partners in the pursuit of academic and professional excellence...",
      "For our undergraduate students, we provide a robust foundation in medical sciences combined with hands-on clinical experiences...",
    ],
  };

  const facultyMembers = [
    {
      name: "Prof. Dr Zarina Binti Awang",
      position: "Dean, School of Medicine",
      image:
        "https://www.lincoln.edu.my/wp-content/uploads/2025/03/Picture24-1.jpg",
    },
    {
      name: "Assoc. Prof. Dr Suriyakala P.C",
      position:
        "Pro-Dean (Pre-Clinical) Lecturer, Biochemistry & Genetics Unit, School of Medicine",
      image:
        "https://www.lincoln.edu.my/wp-content/uploads/2025/03/Picture2-3.jpg",
    },
    {
      name: "Prof. Dr M Walid Hamwi",
      position: "Pro-Dean (Clinical) Professor of Surgery, School of Medicine",
      image:
        "https://www.lincoln.edu.my/wp-content/uploads/2025/03/Picture3-3.jpg",
    },
    {
      name: "Dr. Aishath Fazna Saleem",
      position:
        "Medical Educations / Lecturer / Otorhinolaryngology (ENT) School of Medicine",
      image:
        "https://www.lincoln.edu.my/wp-content/uploads/2025/03/Picture4-3.jpg",
    },
    {
      name: "Prof. Dr Emad Mohamed Nafie",
      position:
        "Lecturer / Head Of Anatomy, Embryology & Hideology Unit / Coordinator For Doctor Of Philosophy (Phd) in Medical Anatomy School of Medicine",
      image:
        "https://www.lincoln.edu.my/wp-content/uploads/2025/03/Picture5-3.jpg",
    },
    {
      name: "Assist. Prof. Dr Nurul Azmir Bin Amir Hashim",
      position:
        "Lecturer / Head Of Biochemistry & Genetics Unit / Coordinator For Doctor Of Medicine (Md), Year 2 Pre-Clinical School of Medicine",
      image:
        "https://www.lincoln.edu.my/wp-content/uploads/2025/03/Picture6-3.jpg",
    },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://plus.unsplash.com/premium_photo-1661663078197-13ef87b6f5ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWVkaWNpbmUlMjBTY2hvb2x8ZW58MHwwfDB8fHww",
      alt: "Sample image 1",
    },
    {
      id: 2,
      src: "https://plus.unsplash.com/premium_photo-1681843039768-0e22b7a031d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVkaWNpbmUlMjBTY2hvb2x8ZW58MHwwfDB8fHww",
      alt: "Sample image 2",
    },
    {
      id: 3,
      src: "https://plus.unsplash.com/premium_photo-1681843036167-c7a696e3dfcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TWVkaWNpbmUlMjBTY2hvb2x8ZW58MHwwfDB8fHww",
      alt: "Sample image 3",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1632988663082-4bac2c1847a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1lZGljaW5lJTIwU2Nob29sfGVufDB8MHwwfHx8MA%3D%3D",
      alt: "Sample image 4",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1589104759909-e355f8999f7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fE1lZGljaW5lJTIwU2Nob29sfGVufDB8MHwwfHx8MA%3D%3D",
      alt: "Sample image 5",
    },
    {
      id: 6,
      src: "https://plus.unsplash.com/premium_photo-1661761151437-a5f7fbe5753b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fE1lZGljaW5lJTIwU2Nob29sfGVufDB8MHwwfHx8MA%3D%3D",
      alt: "Sample image 6",
    },
    {
      id: 7,
      src: "https://plus.unsplash.com/premium_photo-1661745745478-bb3542627ebc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fE1lZGljaW5lJTIwU2Nob29sfGVufDB8MHwwfHx8MA%3D%3D",
      alt: "Sample image 7",
    },
    {
      id: 8,
      src: "https://plus.unsplash.com/premium_photo-1661642134421-9f7270232b8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fE1lZGljaW5lJTIwU2Nob29sfGVufDB8MHwwfHx8MA%3D%3D",
      alt: "Sample image 8",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "M. KHALED HAMWI & M. OMAR HAMWI",
      role: "Year 5",
      image:
        "https://www.lincoln.edu.my/wp-content/uploads/2025/03/Picture5-4.jpg",
      text1:
        "We are grateful for the opportunity to pursue our education in Malaysia after leaving our homeland at 14 due to war. Malaysia's peace allowed us not only to study but to excel, achieving 7 A*s in IGCSE and a CGPA of 4.0 in our Foundation in Science. Choosing the right university was challenging, but enrolling in Lincoln University College's Faculty of Medicine was the best decision.",
      text2:
        "Earning our MD is just the beginning—we aspire to further our careers in the UK, specialize, and contribute to medical literature, leaving a lasting impact on Lincoln's medical education. Our mission is to serve humanity with dedication and passion. Earning our MD is just the beginning—we aspire to further our careers in the UK, specialize, and contribute to medical literature, leaving a lasting impact on Lincoln's medical education. Our mission is to serve humanity with dedication and passion.",
    },
    {
      id: 2,
      name: "Dr Tan Wei Loon",
      role: "Alumni",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text1:
        "We are grateful for the opportunity to pursue our education in Malaysia after leaving our homeland at 14 due to war. Malaysia's peace allowed us not only to study but to excel, achieving 7 A*s in IGCSE and a CGPA of 4.0 in our Foundation in Science. Choosing the right university was challenging, but enrolling in Lincoln University College's Faculty of Medicine was the best decision.",
      text2:
        "Earning our MD is just the beginning—we aspire to further our careers in the UK, specialize, and contribute to medical literature, leaving a lasting impact on Lincoln's medical education. Our mission is to serve humanity with dedication and passion. Earning our MD is just the beginning—we aspire to further our careers in the UK, specialize, and contribute to medical literature, leaving a lasting impact on Lincoln's medical education. Our mission is to serve humanity with dedication and passion.",
    },
    {
      id: 3,
      name: "Dr Ayas Ali Inayat",
      role: "Batch 3 MD Alumma",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text1:
        "We are grateful for the opportunity to pursue our education in Malaysia after leaving our homeland at 14 due to war. Malaysia's peace allowed us not only to study but to excel, achieving 7 A*s in IGCSE and a CGPA of 4.0 in our Foundation in Science. Choosing the right university was challenging, but enrolling in Lincoln University College's Faculty of Medicine was the best decision.",
      text2:
        "Earning our MD is just the beginning—we aspire to further our careers in the UK, specialize, and contribute to medical literature, leaving a lasting impact on Lincoln's medical education. Our mission is to serve humanity with dedication and passion. Earning our MD is just the beginning—we aspire to further our careers in the UK, specialize, and contribute to medical literature, leaving a lasting impact on Lincoln's medical education. Our mission is to serve humanity with dedication and passion.",
    },
  ];

  return (
    <MainLayout>
      <Hero
        title="School of Medicine"
        backgroundImage="https://plus.unsplash.com/premium_photo-1733317306663-3c202d428d65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2Nob29sJTIwb2YlMjBNZWRpY2luZXxlbnwwfDB8MHx8fDA%3D"
        height="h-[200px] md:h-[200px] lg:h-[400px]"
        overlayOpacity="bg-black/10"
      />
      <FacultyNav />

      <Overview
        id="overview"
        title="Overview"
        paragraphs={[
          "Lincoln University College’s School of Medicine is ranked among one of the world’s top universities providing clinical, pre-clinical and health-related research ranges...",
          "We educate competent candidates for the health sector, as well as health-related research...",
        ]}
      />

      <Programmes id="programmes" title="Programmes" programmes={programmes} />

      <DeanMessage dean={dean} />

      <FacultyMembers members={facultyMembers} />

      <Gallery title="School of Medicine Gallery" images={galleryImages} />

      <Testimonials testimonials={testimonials} />
    </MainLayout>
  );
}

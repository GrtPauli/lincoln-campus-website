import React, { useState } from "react";
import { Menu, Drawer, Button, ConfigProvider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { CgChevronDown } from "react-icons/cg";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FACULTIES } from "../../constants/faculties";

// All menu items are now configured in a single, corrected data structure.
const MENU_LINKS = [
  {
    key: "welcome-to-luc",
    label: "Welcome to LUC",
    children: [
      {
        key: "about-us",
        label: <Link to="/about-us">About Us</Link>,
      },
      {
        key: "policy-and-objectives",
        label: <Link to="/policy-and-objectives">Policy and Objectives</Link>,
      },
      {
        key: "recognitions-and-accreditations",
        label: <Link to="/recognitions-and-accreditations">Recognitions & Accreditations</Link>,
      },
      {
        key: "facilities-and-services",
        label: <Link to="/facilities-and-services">Facilities & Services</Link>,
      },
      {
        key: "collaborators",
        label: "Collaborators",
        children: [
          {
            key: "collaborators-management",
            label: <Link to="/collaborators/management">Management</Link>,
          },
        ],
      },
      {
        key: "posts",
        label: "Posts",
        children: [
          { key: "posts-events", label: <Link to="/posts/events">Events</Link> },
          { key: "posts-news", label: <Link to="/posts/news">News</Link> },
        ],
      },
    ],
  },
  {
    key: "faculties-and-programmes",
    label: "Faculties",
    children: [
      ...FACULTIES.map((item) => ({
        key: `faculty-${item.slug}`,
        label: <Link to={`/faculties-and-programmes/${item.slug}`}>{item.title}</Link>,
      })),
    ],
  },
  {
    key: "admission",
    label: "Admission",
    children: [
      { key: "admission-nigerian-student", label: "Nigerian Student" },
      { key: "admission-international-student", label: "International Student" },
      { key: "admission-intakes", label: "Admission Intakes" },
      { key: "admission-scholarship", label: "Scholarship" },
      { key: "admission-fees-structure", label: <Link to="/admission/fees-structure">Fees Structure</Link> },
      {
        key: "admission-apply-now",
        label: (
          <button
            className="cursor-pointer"
            onClick={() =>
              window.open("https://apply.lincoln.edu.ng", "_blank", "noopener,noreferrer")
            }
          >
            Apply Now
          </button>
        ),
      },
    ],
  },
  {
    key: "campuses",
    label: "Campuses",
    children: [
      { key: "campus-nsuk", label: "Lincoln University Malaysia (NSUK Campus)" },
      { key: "campus-gombe", label: "Lincoln University Malaysia (Gombe Campus)" },
    ],
  },
  {
    key: "student-corner",
    label: "Student Corner",
    children: [
      {
        key: "student-current",
        label: "Current Students",
        children: [
          { key: "student-lls", label: "Lincoln Learning System (LLS)" },
          { key: "student-academic-calendar", label: "Academic Calendar" },
          { key: "student-e-library", label: "E-Library" },
        ],
      },
      { key: "student-news", label: "News" }, 
      { key: "student-events", label: "Events" }, 
    ],
  },
  {
    key: "research",
    label: "Research",
    children: [
      {
        key: "research-introduction",
        label: <Link to="/research-and-conferences/introduction">Introduction</Link>,
      },
      {
        key: "research-projects",
        label: <Link to="/research-and-conferences/research-project">Research Projects</Link>,
      },
      {
        key: "research-publications-of-faculty-members",
        label: "Publications of Faculty Members",
      },
      { key: "research-staff-edited-books", label: "Staff Edited Books" },
      { key: "research-other-publications", label: "Other Publications" },
      { key: "research-book-published", label: "Book Published" },
      { key: "research-journal-published", label: "Journal Published" },
    ],
  },
  // Added the new menu item for Practical Skill Application
  {
    key: "practical-skill-application",
    label: <Link to="/psa">Practical Skill Application</Link>,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50">
      <Header />
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "",
            colorPrimary: "#fb2c36",
          },
        }}
      >
        <nav className="w-full bg-white shadow-md">
          {/* Desktop Menu */}
          <div className="flex max-[1250px]:hidden items-center gap-5 px-5">
            <Link to="/" className="my-2">
              <img
                src="/src/assets/lincolnlogo.png"
                alt="Lincoln University College Logo"
                className="w-36"
              />
            </Link>
            <Menu 
              mode="horizontal" 
              className="bg-white shadow-md w-full"
              items={MENU_LINKS.map(item => ({
                ...item,
                // Add the dropdown icon for top-level menu items with children
                label: item.children ? (
                  <span className="flex items-center h-full gap-2 hover:text-primary duration-100 ease-in">
                    {item.label} <CgChevronDown className="ml-1" />
                  </span>
                ) : item.label, // Or just the label if there are no children
              }))}
            />
          </div>

          {/* Mobile Toggle */}
          <div className="hidden max-[1250px]:flex items-center justify-between px-3 py-3">
            <Link to="/">
              <img
                src="/src/assets/lincolnlogo.png"
                alt="Lincoln University College Logo"
                className="w-28"
              />
            </Link>
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setOpen(true)}
            />
          </div>

          {/* Mobile Drawer */}
          <Drawer
            title="Menu"
            placement="right"
            onClose={() => setOpen(false)}
            open={open}
          >
            <Menu 
              mode="inline" 
              className="border-none"
              items={MENU_LINKS}
            />
          </Drawer>
        </nav>
      </ConfigProvider>
    </div>
  );
}
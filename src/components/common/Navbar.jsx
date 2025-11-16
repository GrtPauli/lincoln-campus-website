import React, { useState } from "react";
import { Menu, Drawer, Button, ConfigProvider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { CgChevronDown } from "react-icons/cg";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FACULTIES } from "../../constants/faculties";

const MENU_LINKS = [
  {
    key: "welcome-to-luc",
    label: "Welcome to LUC",
    isParent: true,
    children: [
      {
        key: "about-us",
        label: "About Us",
        to: "/about-us",
      },
      {
        key: "management",
        label: "Management",
        to: "/management",
      },
      {
        key: "policy-and-objectives",
        label: "Policy & Objectives",
        to: "/policy-and-objectives",
      },
      {
        key: "recognitions-and-accreditations",
        label: "Recognitions & Accreditations",
        to: "/recognitions-and-accreditations",
      },
      {
        key: "facilities-and-services",
        label: "Facilities & Services",
        to: "/facilities-and-services",
      },
      {
        key: "collaborators",
        label: "Collaborators",
        to: "/collaborators",
      },
      {
        key: "posts",
        label: "Events & News",
        children: [
          { key: "events", label: "Events", to: "/posts/events" },
          { key: "news", label: "News", to: "/posts/news" },
        ],
      },
    ],
  },
  {
    key: "faculties-and-programmes",
    label: "Faculties & Programmes",
    isParent: true,
    children: [
      ...FACULTIES.map((item) => ({
        key: item.slug,
        label: item.title,
        to: `/faculties-and-programmes/${item.slug}`,
      })),
    ],
  },
  {
    key: "admission",
    label: "Admission",
    isParent: true,
    children: [
      {
        key: "admission-process",
        label: "Admission Process",
        to: "/admission/admission-process",
      },
      // { key: "nigerian-student", label: "Nigerian Student" },
      // { key: "international-student", label: "International Student" },
      // { key: "scholarship", label: "Scholarship" },
      {
        key: "fees-structure",
        label: "Fees Structure",
        to: "/admission/fees-structure",
      },
      {
        key: "apply-now",
        label: (
          <button
            className="cursor-pointer"
            onClick={() =>
              window.open(
                "https://apply.lincoln.edu.ng",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Apply Now
          </button>
        ),
      },
    ],
  },
  {
    key: "practical-skill-application",
    label: "Practical Skill Application",
    to: "/psa",
  },
  {
    key: "student-corner",
    label: "Student Corner",
    isParent: true,
    children: [
      {
        key: "current-students",
        label: "Current Students",
        children: [
          { key: "lls", label: "Lincoln Learning System (LLS)" },
          { key: "academic-calendar", label: "Academic Calendar" },
          { key: "e-library", label: "E-Library" },
        ],
      },
      { key: "news", label: "News" },
      { key: "events", label: "Events" },
    ],
  },
  {
    key: "research",
    label: "Research",
    isParent: true,
    children: [
      {
        key: "introduction",
        label: "Introduction",
        to: "/research-and-conferences/introduction",
      },
      {
        key: "research-projects",
        label: "Research Projects",
        to: "/research-and-conferences/research-project",
      },
      {
        key: "publications-of-faculty-members",
        label: "Publications of Faculty Members",
      },
      { key: "staff-edited-books", label: "Staff Edited Books" },
      { key: "other-publications", label: "Other Publications" },
      { key: "book-published", label: "Book Published" },
      { key: "journal-published", label: "Journal Published" },
    ],
  },
];

const { SubMenu, Item } = Menu;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const renderMenuItems = (items, mode = "horizontal") =>
    items.map((item) =>
      item.children ? (
        <SubMenu
          key={item.key}
          className="!h-full !flex !items-center -mt-2"
          title={
            <span className="flex items-center h-full gap-2 hover:text-primary duration-100 ease-in">
              {item.label}{" "}
              {item?.isParent && mode === "horizontal" && (
                <CgChevronDown className="ml-1" />
              )}
            </span>
          }
        >
          {renderMenuItems(item.children, mode)}
        </SubMenu>
      ) : (
        <Item className="!h-full !flex !items-center" key={item.key}>
          {item?.to ? (
            <Link
              to={item?.to}
              className="hover:text-primary duration-100 ease-in"
            >
              {item.label}
            </Link>
          ) : (
            <p className="hover:text-primary duration-100 ease-in">
              {item.label}
            </p>
          )}
        </Item>
      )
    );

  const renderDrawerMenu = (items) =>
    items.map((item) => {
      if (item.children) {
        return {
          key: item.key,
          label: <span className="text-base font-medium">{item.label}</span>,
          children: renderDrawerMenu(item.children),
        };
      }
      return {
        key: item.key,
        label: item.to ? (
          <Link
            to={item.to}
            onClick={() => setOpen(false)}
            className="block py-1 text-gray-600 hover:text-primary"
          >
            {item.label}
          </Link>
        ) : (
          <span className="block py-1 text-gray-600">{item.label}</span>
        ),
      };
    });

  return (
    <div className="fixed top-0 w-full z-50 font-medium">
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
          <div className="flex max-[1250px]:hidden items- gap-5 px-5">
            <Link to="/" className="my-2">
              <img
                src="https://www.lincoln.edu.my/wp-content/uploads/2025/01/logo.webp"
                alt="Lincoln University College Logo"
                className="w-36"
              />
            </Link>

            <Menu mode="horizontal" className="bg-white shadow-md w-full">
              {renderMenuItems(MENU_LINKS, "horizontal")}
            </Menu>
          </div>

          {/* Mobile Header */}
          <div className="hidden max-[1250px]:flex items-center justify-between px-4 py-3 bg-white shadow-md">
            <Link to="/" className="">
              <img
                src="https://www.lincoln.edu.my/wp-content/uploads/2025/01/logo.webp"
                alt="Lincoln University College Logo"
                className="w-28"
              />
            </Link>
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: 22 }} />}
              onClick={() => setOpen(true)}
            />
          </div>

          {/* Mobile Drawer */}
          <Drawer
            placement="left"
            closable={false}
            open={open}
            onClose={() => setOpen(false)}
            width="80%"
            bodyStyle={{ padding: 0, backgroundColor: "#fff" }}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <Link to="/" onClick={() => setOpen(false)}>
                <img
                  src="https://www.lincoln.edu.my/wp-content/uploads/2025/01/logo.webp"
                  alt="Lincoln University College Logo"
                  className="w-28"
                />
              </Link>
              <Button
                type="text"
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-primary"
              >
                ✕
              </Button>
            </div>

            <div className="px-2 py-3">
              <Menu
                mode="inline"  items={renderDrawerMenu(MENU_LINKS)}
              />
              
            </div>
          </Drawer>
        </nav>
      </ConfigProvider>
    </div>
  );
}

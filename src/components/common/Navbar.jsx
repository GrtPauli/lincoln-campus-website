import React, { useState } from "react";
import { Menu, Drawer, Button, ConfigProvider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { CgChevronDown } from "react-icons/cg";
import Header from "./Header";
import { Link } from "react-router-dom";
import { MENU_LINKS } from "../../constants";

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
          <div className="hidden md:flex items- gap-5 px-5">
            <a href="/" className="my-2">
              <img
                src="/src/assets/lincolnlogo.png"
                alt="Lincoln University College Logo"
                className="w-36"
              />
            </a>

            <Menu mode="horizontal" className="bg-white shadow-md w-full">
              {renderMenuItems(MENU_LINKS, "horizontal")}
            </Menu>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center justify-between px-3 py-3">
            <a href="/" className="">
              <img
                src="/src/assets/lincolnlogo.png"
                alt="Lincoln University College Logo"
                className="w-28"
              />
            </a>
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
            <Menu mode="inline" className="border-none">
              {renderMenuItems(MENU_LINKS, "inline")}
            </Menu>
          </Drawer>
        </nav>
      </ConfigProvider>
    </div>
  );
}

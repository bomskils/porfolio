import React, { useState } from "react";
import Logo from "../images/logo.png";
import GitHub from "../images/github.svg";
import Twitter from "../images/twitter.svg";
import LinkedIn from "../images/linkedIn.svg";
import { Anchor, Drawer } from "antd";
import { BsMenuButton } from "react-icons/bs"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between px-5 xl:px-48 pt-5 bg-white sticky-header">
      <div>
        <img src={Logo} alt="" className="w-20"/>
      </div>
      <ul className="flex items-center gap-10">
        <Anchor
          direction="horizontal"
          className="hidden md:block"
          affix={true}
          items={[
            {
              title: "Home",
              href: "#home",
              key: "1",
            },
            {
              title: "About",
              href: "#about",
              key: "2",
            },
            {
              title: "Tech Stack",
              href: "#tech-stack",
              key: "3",
            },
            {
              title: "Project",
              href: "#project",
              key: "4",
            },
            {
              title: "Contact",
              href: "#contact",
              key: "5",
            },
          ]}
        />
        <div className="items-center gap-3 hidden md:flex">
          <img
            src={GitHub}
            alt=""
            className="hover:scale-90 hover:transition-all cursor-pointer"
          />
          <img
            src={Twitter}
            alt=""
            className="hover:scale-90 hover:transition-all cursor-pointer"
          />
          <img
            src={LinkedIn}
            alt=""
            className="hover:scale-90 hover:transition-all cursor-pointer"
          />
        </div>
      </ul>
        <BsMenuButton className="text-3xl block md:hidden" onClick={() => setOpen(true)} />
        <Drawer open={open} onClose={() => setOpen(!open)} placement="left" width="50%">
        <ul className="grid gap-10">
        <Anchor
        className="mt-5"
          affix={true}
          items={[
            {
              title: "Home",
              href: "#home",
              key: "1",
            },
            {
              title: "About",
              href: "#about",
              key: "2",
            },
            {
              title: "Tech Stack",
              href: "#tech-stack",
              key: "3",
            },
            {
              title: "Project",
              href: "#project",
              key: "4",
            },
            {
              title: "Contact",
              href: "#contact",
              key: "5",
            },
          ]}
        />
        <div className="items-center gap-3 flex mx-auto">
          <img
            src={GitHub}
            alt=""
            className="hover:scale-90 hover:transition-all cursor-pointer"
          />
          <img
            src={Twitter}
            alt=""
            className="hover:scale-90 hover:transition-all cursor-pointer"
          />
          <img
            src={LinkedIn}
            alt=""
            className="hover:scale-90 hover:transition-all cursor-pointer"
          />
        </div>
      </ul>
        </Drawer>
    </nav>
  );
};

export default Navbar;

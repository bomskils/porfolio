import React from "react";
import Logo from "../images/logo.svg";
import GitHub from "../images/github.svg";
import Twitter from "../images/twitter.svg";
import LinkedIn from "../images/linkedIn.svg";
import { Anchor } from "antd";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-[5rem] py-14 bg-white">
      <div>
        <img src={Logo} alt="" className="w-20"/>
      </div>
      <ul className="flex items-center gap-5">
        {/* <Anchor
          direction="horizontal"
          className="hidden md:block"
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
        /> */}
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
    </nav>
  );
};

export default Navbar;

import React from "react";
import Menu from "../header/menu";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const menuEl = [
  { label: "Home", link: "/" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
];

const Footer = () => {
  return (
    <div className="grid gap-10 border-t-[1px] border-gray-300 pt-16 px-5 max-sm:px-3">
      <div className="flex justify-between gap-10  max-sm:grid max-sm:gap-5 max-sm:justify-center text-gray-500">
        <div className="grid flex-wrap w-[20rem] gap-4">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p>Email : info@jstemplate.net</p>
          <p>Phone : 880 123 456 789</p>
        </div>
        <div className="">
          <ul className="max-sm:flex max-sm:gap-5 grid gap-4">
            {menuEl.map((menuElObject) => {
              return (
                <li>
                  <a href={menuElObject.link}>{menuElObject.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-10 ">
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaSquareXTwitter />
          </a>
          <a href="">
            <FaInstagram />
          </a>

          <a href="">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className=" flex justify-between items-center border-t-[1px] border-gray-300  py-7 text-gray-500">
        <div className="w-[9.8rem]">
          {" "}
          <img src="/images/logo2.png" alt="" />
        </div>
        <div className="flex gap-10">
          <p>Terms of use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

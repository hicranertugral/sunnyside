import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer flex-column">
      <div className="logo"><p>sunnyside</p></div>
      <div className="footer-nav">
        <ul className="footer-nav-menu">
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Projects</a></li>
        </ul>
      </div>
      <div className="footer-icon">
        <ul className="footer-icon-menu">
          <li>
          <a href=""><AiFillFacebook /></a>
          </li>
          <li>
          <a href=""> <AiOutlineInstagram /></a>
          </li>
          <li>
          <a href=""><AiOutlineTwitter /></a>
          </li>
          <li>
          <a href=""><BsPinterest /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

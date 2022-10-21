import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3 className="logo">sunnyside</h3>

      <nav>
        {/* <a href="/#" className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </a> */}
        <ul>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Services</a>
          </li>
          <li>
            <a href="/#">Projects</a>
          </li>
          <li>
            <a href="/#" id="contact-btn">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

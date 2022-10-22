import React from "react";
import Navbar from "./Navbar.js";

const HeroContent = () => {
  return (
    <header className="hero">
      <Navbar />
      <div className="content">
        <h2>WE ARE CREATIVES</h2>
        <h1>
          <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
            <g
              stroke="#FFF"
              stroke-width="6"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 3v100M3 95.484l15 15 15-15" />
            </g>
          </svg>
        </h1>
      </div>
    </header>
  );
};

export default HeroContent;

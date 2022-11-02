import React from "react";
import Logo from "../Logo/logo";
import "./header.css";
const Header = ({ toggleNav }) => {
  return (
    <nav className="nav">
      <Logo />
      <div className="cross-icon" onClick={() => toggleNav()}>
        <svg
          class="svg-icon"
          style={{
            width: "2em",
            height: "2em",
            verticalAlign: " middle",
            overflow: "hidden",
          }}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M972.8 512c0 11.264-9.216 20.48-20.48 20.48H71.68c-11.264 0-20.48-9.216-20.48-20.48s9.216-20.48 20.48-20.48h880.64c11.264 0 20.48 9.216 20.48 20.48zM71.68 286.72h880.64c11.264 0 20.48-9.216 20.48-20.48s-9.216-20.48-20.48-20.48H71.68c-11.264 0-20.48 9.216-20.48 20.48s9.216 20.48 20.48 20.48z m880.64 450.56H71.68c-11.264 0-20.48 9.216-20.48 20.48s9.216 20.48 20.48 20.48h880.64c11.264 0 20.48-9.216 20.48-20.48s-9.216-20.48-20.48-20.48z" />
        </svg>
      </div>
    </nav>
  );
};
export default Header;

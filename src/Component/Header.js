import React from "react";

function Header() {
  return (
    <header className="Nav--bar">
      <h1 className="Nav--logo">
        ZAH<span>EER</span>
      </h1>
      <ul className="Nav--menu">
        <li>Home</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Contact Us</li>
      </ul>
      <h4 className="Menu">Menu</h4>
    </header>
  );
}
export default Header;

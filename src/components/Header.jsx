import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/siteImages/logo.png";

function Header() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="Austyn Cody" className="personal" />
      </Link>
    </div>
  );
}

export default Header;

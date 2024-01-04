import React from "react";
import { FaInstagram, FaEnvelope, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const StickyIcon = () => {
  const navigate = useNavigate();

  const handleEnvelopeClick = () => {
    navigate("/contact");
  };

  const handleCartClick = () => {
    navigate("/shop");
  };
  return (
    <div className="sticky-icon">
      <a
        href="https://www.instagram.com/austyncody/"
        target="_blank"
        rel="noopener noreferrer"
        className="Instagram"
      >
        <FaInstagram />
      </a>

      <a className="Message" onClick={handleEnvelopeClick}>
        <FaEnvelope />
      </a>
      <a className="Cart" onClick={handleCartClick}>
        <FaShoppingCart />
      </a>
    </div>
  );
};

export default StickyIcon;

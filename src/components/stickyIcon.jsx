import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const StickyIcon = () => {
  const navigate = useNavigate();

  const handleEnvelopeClick = () => {
    navigate("/contact");
  };

  return (
    <div className="sticky-icon">
      <a href="https://www.instagram.com/liakahn" className="Instagram">
        <FaInstagram />
      </a>

      <a className="Message" onClick={handleEnvelopeClick}>
        <FaEnvelope />
      </a>
    </div>
  );
};

export default StickyIcon;

"use client";

import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "./SocialSidebar.css";

export default function SocialSidebar() {
  return (
    <div className="floating-section">

      {/* Organic Badge */}
      <div className="organic-badge">
        <span className="percent">100%</span>
        <span className="organic-text">ORGANIC</span>
      </div>

      {/* Social Icons */}
      <div className="social-row">
        <a
          href="https://wa.me/919272131561"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>

    </div>
  );
}
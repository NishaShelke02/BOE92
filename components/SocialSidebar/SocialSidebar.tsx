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
    <div className="social-sidebar">
      <a
        href="https://wa.me/919272131561"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61580965360742&mibextid=ZbWKwL"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.instagram.com/bumi_organicexim?igsh=MWFjMW0yazUzbjZ6Nw=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.linkedin.com/company/109393938/admin/dashboard/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
}
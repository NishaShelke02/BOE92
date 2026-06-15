"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">

        {/* Logo */}
        <Link href="/" className="logo">
          <Image
            src="/logo.png"
            alt="Logo"
            width={170}
            height={90}
            priority
            className="logo-img"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <Link href="/">HOME</Link>
          </li>

          <li>
            <Link href="/about">ABOUT US</Link>
          </li>

          {/* Products Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => {
              if (!menuOpen) setProductOpen(true);
            }}
            onMouseLeave={() => {
              if (!menuOpen) setProductOpen(false);
            }}
          >
            <button
              className="dropdown-btn"
              type="button"
              onClick={() => {
                if (menuOpen) {
                  setProductOpen(!productOpen);
                }
              }}
            >
              PRODUCTS

              <FaChevronDown
                size={12}
                className={productOpen ? "rotate-icon" : ""}
              />
            </button>

            <ul
              className={`dropdown-menu ${
                productOpen ? "show-dropdown" : ""
              }`}
            >
              <li>
                <Link href="/products/organic-products">
                  Organic Products
                </Link>
              </li>

              <li>
                <Link href="/products/indian-super-foods">
                  Indian Super Foods
                </Link>
              </li>

              <li>
                <Link href="/products/indian-spices">
                  Indian Spices
                </Link>
              </li>

              <li>
                <Link href="/products/dehydrated-products">
                  Dehydrated Products & Powders
                </Link>
              </li>

              <li>
                <Link href="/products/food-and-fmcg-health-food">
                  Fresh Vegetables & Fruits
                </Link>
              </li>

              <li>
                <Link href="/products/coffee-and-cocoa-powder">
                  Coffee & Cocoa Powder
                </Link>
              </li>

              <li>
                <Link href="/products/dairy-products">
                  Dairy Products
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/services">SERVICES</Link>
          </li>

          <li>
            <Link href="/blog">BLOG</Link>
          </li>

          <li>
            <Link href="/certification">CERTIFICATION</Link>
          </li>

          <li>
            <Link href="/contact">CONTACT</Link>
          </li>

        </ul>

        {/* Brochure Button */}
        <Link href="/BOE9 1.pdf" className="brochure-btn">
          BROCHURE
        </Link>

      </nav>
    </header>
  );
}
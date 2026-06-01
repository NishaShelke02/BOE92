"use client";

import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
} from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import "./Contact.css";

// ================= TYPES =================

interface FormDataType {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// ================= COMPONENT =================

const ContactUs = () => {

  const [formData, setFormData] =
    useState<FormDataType>({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

  const [status, setStatus] =
    useState<string>("");

  // ================= INPUT CHANGE =================

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= SUBMIT =================

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data =
        await response.json();

      if (data.success) {

        setStatus(
          "✅ Message sent successfully!"
        );

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

      } else {

        setStatus(
          "❌ Failed to send message."
        );
      }

    } catch (error) {

      console.log(error);

      setStatus(
        "❌ Something went wrong."
      );
    }
  };

  // ================= AUTO HIDE STATUS =================

  useEffect(() => {

    if (status) {

      const timer = setTimeout(
        () => setStatus(""),
        4000
      );

      return () => clearTimeout(timer);
    }

  }, [status]);

  // ================= UI =================

  return (

    <div className="contact-container">

      {/* HEADING */}

      <h1>
        Contact BOE9
      </h1>

      <p className="contact-subtext">
        Get in touch with us for
        export inquiries, organic
        products, spices, turmeric,
        and global business deals.
      </p>

      {/* CONTACT DETAILS */}

      <div className="contact-details">

        <div>
          <h2>
            <FaMapMarkerAlt />
            Address
          </h2>

          <p>
            Nashik, Maharashtra,
            India - 422010
          </p>
        </div>

        <div>
          <h2>
            <FaPhoneAlt />
            Phone
          </h2>

          <p>
            +91 9272131561
          </p>

          <p>
            +91 9737305655
          </p>
        </div>

        <div>
          <h2>
            <FaEnvelope />
            Email
          </h2>

          <p>
            info@boe9.com
          </p>

          <p>
            exports@boe9.com
          </p>
        </div>

        <div>
          <h2>
            <FaClock />
            Business Hours
          </h2>

          <p>
            Available 24/7
          </p>
        </div>
      </div>

      {/* FORM + MAP */}

      <div className="contact-form-map">

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
        >

          <h2>
            Send Business Enquiry
          </h2>

          {/* NAME */}

          <label htmlFor="fullName">
            Full Name
          </label>

          <input
            id="fullName"
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          {/* EMAIL */}

          <label htmlFor="email">
            Email Address
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* PHONE */}

          <label htmlFor="phone">
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          {/* SUBJECT */}

          <label htmlFor="subject">
            Subject
          </label>

          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Bulk Order / Export Inquiry"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          {/* MESSAGE */}

          <label htmlFor="message">
            Your Requirement
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Enter your requirement"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* BUTTON */}

          <button type="submit">
            Send Enquiry
          </button>

          {/* STATUS */}

          {status && (

            <p
              className={`status-message ${
                status.includes("❌")
                  ? "error"
                  : "success"
              }`}
            >
              {status}
            </p>

          )}

        </form>

        {/* MAP */}

        <div className="map-container">

          <iframe
            title="BOE9 Location"
            src="https://www.google.com/maps?q=Nashik,Maharashtra&output=embed"
            width="100%"
            height="400"
            style={{
              border: 0,
            }}
            loading="lazy"
          />

        </div>

      </div>

    </div>
  );
};

export default ContactUs;
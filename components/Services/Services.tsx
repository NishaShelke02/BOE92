"use client";

import Image from "next/image";

import {
  FaStar,
  FaGlobe,
  FaTruck,
  FaCheckCircle,
  FaEye,
  FaUniversity,
  FaClock,
} from "react-icons/fa";

import "./Services.css";

// ================= TYPES =================

interface Benefit {
  icon: React.ReactNode;
  text: string;
}

// ================= DATA =================

const servicesFeatures: string[] = [
  "We find manufacturer as per buyer requirement.",
  "We negotiate and fix deal in suitable price range.",
  "We arrange transportation and handle full consignment.",
  "If buyer has supplier and manufacturer then we also provide shipment or transportation service.",
  "We can source products from multiple suppliers.",
];

const benefits: Benefit[] = [
  {
    icon: <FaStar />,
    text: "You will get totally transparent & satisfied work.",
  },

  {
    icon: <FaGlobe />,
    text: "Sourcing multiple products from different states.",
  },

  {
    icon: <FaEye />,
    text: "Personal watch on shipment since day 1 to manufacturing.",
  },

  {
    icon: <FaTruck />,
    text: "Negotiate with shipment line, logistic & transportation behalf of you.",
  },

  {
    icon: <FaCheckCircle />,
    text: "We ensure about the quality of products & services.",
  },

  {
    icon: <FaUniversity />,
    text: "We will negotiate with banks on behalf of you.",
  },

  {
    icon: <FaClock />,
    text: "You will get on time delivery of your consignment.",
  },
];

// ================= COMPONENT =================

const Services = () => {
  return (
    <div className="services-container">

      {/* LEFT SECTION */}

      <div className="services-left">

        <h2>How We Work</h2>

        <p>
          As a sourcing agent here is all the task,
          which we manage to fulfill requirements
          of our buyers and deliver their order
          according to their needs in given timeline.
        </p>

        <hr />

      </div>

      {/* CENTER IMAGE */}

      <div className="services-center">

        <Image
          src="/images/Services.png"
          alt="Services"
          width={500}
          height={500}
          className="services-image"
        />

      </div>

      {/* RIGHT FEATURES */}

      <div className="services-right">

        {servicesFeatures.map((feature, index) => (

          <div
            className="service-item"
            key={index}
          >

            <div className="icon">
              <FaStar color="#ff9900" />
            </div>

            <p>{feature}</p>

          </div>

        ))}

      </div>

      {/* BENEFITS SECTION */}

      <div className="benefits-section">

        <h2>What Is Your Benefit</h2>

        <div className="benefits-grid">

          {benefits.map((benefit, index) => (

            <div
              className="benefit-card"
              key={index}
            >

              <div className="benefit-icon">
                {benefit.icon}
              </div>

              <p>{benefit.text}</p>

            </div>

          ))}

        </div>
      </div>
    </div>
  );
};

export default Services;
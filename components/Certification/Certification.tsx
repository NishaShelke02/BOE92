"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import "./Certification.css";

// ================= TYPES =================

interface CertificationItem {
  title: string;
  description: string;
  image: string;
  pdf?: string;
}

// ================= DATA =================

const certifications: CertificationItem[] = [
  {
    title: "🔬 APEDA",
    description:
      "Certified by the Agricultural and Processed Food Products Export Development Authority for seamless exports worldwide.",
    image: "/images/APEDA.png",
    pdf: "/pdf/APEDA.pdf",
  },

  {
    title: "🆔 Aadhaar Verified",
    description:
      "Registered and verified under India’s Aadhaar framework to ensure transparency in business identity.",
    image: "/images/AADHAAR.png",
  },

  {
    title: "📑 DGFT (IEC)",
    description:
      "Licensed with the Directorate General of Foreign Trade for legal import-export operations.",
    image: "/images/DGFT.png",
    pdf: "/pdf/IEC.pdf",
  },

  {
    title: "🥗 FSSAI",
    description:
      "Licensed under FSSAI ensuring food safety and quality standards.",
    image: "/images/FSSAI.png",
    pdf: "/pdf/FSSAI.pdf",
  },

  {
    title: "💰 GST Registered",
    description:
      "Compliant with Goods and Services Tax regulations.",
    image: "/images/GST.png",
    pdf: "/pdf/GST.pdf",
  },

  {
    title: "🏭 MSME (Udyam)",
    description:
      "Recognized under India’s MSME scheme for sustainable business growth.",
    image: "/images/MSME.png",
    pdf: "/pdf/Udyam.pdf",
  },

  {
    title: "🌶 Spice Board of India",
    description:
      "Certified for authenticity and quality in spices exports.",
    image: "/images/SPICEB.png",
    pdf: "/pdf/SPICEB.pdf",
  },

  {
    title: "🛡️ ECGC",
    description:
      "Covered by Export Credit Guarantee Corporation of India.",
    image: "/images/ECGC.png",
    pdf: "/pdf/ECGC.pdf",
  },

  {
    title: "✅ ISO 9001:2015",
    description:
      "Certified for Quality Management Systems and customer satisfaction.",
    image: "/images/QRO.png",
    pdf: "/pdf/iso.pdf",
  },

  {
    title: "✅ Halal Certified",
    description:
      "Halal certified products ensuring compliance with Islamic dietary laws.",
    image: "/images/HALAL.png",
    pdf: "/pdf/HALAL.pdf",
  },

  {
    title: "🌱 NPOP - Under Progress",
    description:
      "Working towards National Programme for Organic Production certification.",
    image: "/images/NPOP.png",
    pdf: "/pdf/NPOP.pdf",
  },

  {
    title: "🏢 FIEO - Under Process",
    description:
      "Affiliation process with Federation of Indian Export Organisations.",
    image: "/images/FIEO.png",
    pdf: "/pdf/FIEO.pdf",
  },
];

// ================= COMPONENT =================

const Certification = () => {

  const router = useRouter();

  const handleContactClick = () => {
    router.push("/ContactUs");
  };

  const handleViewPDF = (pdfPath: string) => {
    window.open(pdfPath, "_blank");
  };

  return (
    <div className="certification-container">

      {/* HERO SECTION */}

      <section className="certification-hero">

        <div className="container">

          <h1>We Are Certified</h1>

          <p>
            At <strong>BOE9 Export Import </strong>,
            we proudly hold multiple government-recognized
            certifications ensuring trust, transparency,
            and global compliance for our exports.
          </p>

        </div>
      </section>

      {/* CERTIFICATIONS */}

      <section className="certifications-list">

        <div className="container">

          <h2>Our Key Certifications</h2>

          <div className="cert-grid">

            {certifications.map((cert, index) => (

              <div
                className="cert-item"
                key={index}
              >

                <h3>{cert.title}</h3>

                <p>{cert.description}</p>

                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={120}
                  height={120}
                  className="cert-logo"
                />

                {cert.pdf && (
                  <button
                    className="view-pdf-btn"
                    onClick={() =>
                      handleViewPDF(cert.pdf!)
                    }
                  >
                    View PDF
                  </button>
                )}

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="cert-cta">

        <div className="container">

          <h2>Verify Our Certifications</h2>

          <p>
            Download our official certificates
            or contact us for verification details.
          </p>

          <div className="cta-buttons">

            <button
              className="cta-button"
              onClick={handleContactClick}
            >
              Contact Us
            </button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Certification;
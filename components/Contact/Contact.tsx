"use client";

import { useState } from "react";
import "./Contact.css";

interface FormData {
  fullName: string;
  email: string;
  address: string;
  product: string;
  hsnCode: string;
  message: string;
}

const initialForm: FormData = {
  fullName: "",
  email: "",
  address: "",
  product: "",
  hsnCode: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send enquiry.");
    }
  };

  const isFormValid =
    form.fullName.trim() &&
    form.email.trim() &&
    form.product.trim() &&
    form.message.trim();

  return (
    <main className="contact-page">

      {/* ── Organic Hero ── */}
      <section className="hero">
        <div className="hero-blob hero-blob--1" aria-hidden="true" />
        <div className="hero-blob hero-blob--2" aria-hidden="true" />
        <div className="hero-inner">
          <span className="hero-eyebrow">
            <span className="eyebrow-leaf">🌿</span> Get in Touch
          </span>
          <h1 className="hero-title">Let's Grow Together</h1>
          <p className="hero-sub">
            Send us your trade enquiry and our team will respond within 24 hours.
          </p>
        </div>
        <div className="hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f5f0e8" />
          </svg>
        </div>
      </section>

      <div className="layout">
        {/* ── Left: Info + Map ── */}
        <aside className="info-col">

          <div className="info-card">
            <div className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 5.55 5.55l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <p className="info-label">Phone</p>
              <a href="tel:+919272131561" className="info-value">+91 92721 31561</a>
              <a href="tel:+919737305655" className="info-value">+91 97373 05655</a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <p className="info-label">Email</p>
              <a href="mailto:info@boe9.com" className="info-value">info@boe9.com</a>
              <a href="mailto:exports@boe9.com" className="info-value">exports@boe9.com</a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <p className="info-label">Address</p>
              <p className="info-value no-link">Nashik, Maharashtra, India</p>
            </div>
          </div>

          <div className="map-wrapper">
            <iframe
              title="BOE9 Location — Nashik, Maharashtra"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120057.63520313702!2d73.71510857031249!3d19.9974831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba3d7960535%3A0x9f8c51db80000001!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
              width="100%"
              height="260"
              style={{ border: 0, borderRadius: "20px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>

        {/* ── Right: Enquiry Form ── */}
        <section className="form-col">
          <div className="form-header">
            <h2 className="form-heading">Send an Enquiry</h2>
            <p className="form-sub">Fields marked <span className="req">*</span> are required</p>
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="fullName">Full Name <span className="req">*</span></label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Smith"
                value={form.fullName}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email Address <span className="req">*</span></label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@company.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="address">Your Address</label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="City, State, Country"
              value={form.address}
              onChange={handleChange}
              autoComplete="street-address"
            />
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="product">Product / Commodity <span className="req">*</span></label>
              <input
                id="product"
                name="product"
                type="text"
                placeholder="e.g. Basmati Rice"
                value={form.product}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="hsnCode">HSN Code</label>
              <input
                id="hsnCode"
                name="hsnCode"
                type="text"
                placeholder="e.g. 1006"
                value={form.hsnCode}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Message <span className="req">*</span></label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Describe your requirement — quantity, packaging, destination port, etc."
              value={form.message}
              onChange={handleChange}
            />
          </div>

          {status === "error" && (
            <p className="feedback feedback--error">{errorMsg}</p>
          )}
          {status === "success" && (
            <p className="feedback feedback--success">
              🌱 Enquiry sent! We'll get back to you within 24 hours.
            </p>
          )}

          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={!isFormValid || status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Enquiry"}
            {status !== "sending" && (
              <svg className="btn-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            )}
          </button>
        </section>
      </div>

      
    </main>
  );
}
"use client";

import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <h1>Contact Us</h1>
        <p className="subtitle">
          We'd love to hear from you. Get in touch with our team for product
          inquiries, export opportunities, and business collaborations.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get In Touch</h2>

            <div className="info-item">
              <h3>Email</h3>
              <p>info@boe9.com</p>
            </div>

            <div className="info-item">
              <h3>Phone</h3>
              <p>+91 XXXXX XXXXX</p>
            </div>

            <div className="info-item">
              <h3>Address</h3>
              <p>
                Nashik, Maharashtra
                <br />
                India
              </p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Message</h2>

            <form>
              <input type="text" placeholder="Full Name" required />

              <input type="email" placeholder="Email Address" required />

              <input type="text" placeholder="Subject" required />

              <textarea
                rows={6}
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
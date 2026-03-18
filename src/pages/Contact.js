import { useState } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const empty = {
  name: "",
  email: "",
  subject: "General Enquiry",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    window.location.href = `mailto:echelonclubcore@gmail.com?subject=${encodeURIComponent(form.subject + " — " + form.name)}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.name + "\nEmail: " + form.email)}`;
    setSubmitted(true);
    setForm(empty);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <div>
      <div className="navibar">
        <Navbar/>
      </div>
      <div className="contact-page-hero">
        <h1 className="contact-heading">Get in Touch</h1>
        <p className="contact-subheading">
          Want to collaborate, join the club, or just reach out? We'd love to hear from you.
        </p>
      </div>

      <div className="contact-section">
        <div className="contact-form-col">
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
              />
            </div>
            <div className="contact-form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>
            <div className="contact-form-group">
              <label>Subject</label>
              <select name="subject" value={form.subject} onChange={handleChange}>
                <option>General Enquiry</option>
                <option>Collaboration</option>
                <option>Join the Club</option>
                <option>Event Partnership</option>
              </select>
            </div>
            <div className="contact-form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
              />
            </div>
            {submitted && (
              <p className="contact-success">Opening your mail client...</p>
            )}
            <button type="submit" className="contact-submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-info-col">
          <h2>Find us here</h2>
          <div className="contact-info-item">
            <h4>Email</h4>
            <p>
              <a href="mailto:echelonclubcore@gmail.com">
                echelonclubcore@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-item">
            <h4>Location</h4>
            <p>
              Jain (Deemed-to-Be) University<br />
              Ramanagara Campus, Karnataka
            </p>
          </div>
          <div className="contact-social-links">
            <a className="contact-social-link" href="https://www.instagram.com/echelon._club/" target="_blank" rel="noreferrer">Instagram</a>
            <a className="contact-social-link" href="https://www.linkedin.com/company/echelon-club-official/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="contact-social-link" href="https://github.com/echelon-club" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="school-website">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="school-logo" onClick={closeMenu}>
          <div className="logo-box">DPS</div>
          <div className="logo-text">
            <h2>DPS INTERNATIONAL</h2>
            <span>SCHOOL</span>
          </div>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#notice" onClick={closeMenu}>Notice</a>
          <a href="#admission" className="admission-nav" onClick={closeMenu}>
            Admission
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="welcome-tag">
            ✦ WELCOME TO DPS INTERNATIONAL SCHOOL
          </div>

          <h1>
            Where Dreams
            <br />
            <span>Take Flight.</span>
          </h1>

          <p>
            Empowering young minds with knowledge, values and
            confidence to create a brighter tomorrow.
          </p>

          <div className="hero-buttons">
            <a href="#admission" className="btn btn-gold">
              Explore Admissions <span>→</span>
            </a>

            <a href="#about" className="btn btn-outline">
              Discover Our School
            </a>
          </div>

          <div className="hero-bottom">
            <div className="hero-stat">
              <span>01</span>
              <p>Quality Education</p>
            </div>

            <div className="hero-stat">
              <span>02</span>
              <p>Holistic Development</p>
            </div>

            <div className="hero-stat">
              <span>03</span>
              <p>Bright Futures</p>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span></span>
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* About Section */}
      <section className="about section" id="about">
        <div className="section-heading">
          <span className="eyebrow">ABOUT OUR SCHOOL</span>
          <h2>
            Building a Foundation
            <br />
            <span>for Lifelong Success</span>
          </h2>
          <p>
            At DPS INTERNATIONAL SCHOOL, we believe every child
            deserves an inspiring environment to learn, grow and
            discover their true potential.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <div className="card-icon">🎓</div>
            <h3>Academic Excellence</h3>
            <p>
              A strong academic foundation through engaging
              learning experiences and quality education.
            </p>
          </div>

          <div className="about-card highlighted">
            <div className="card-icon">🌱</div>
            <h3>Holistic Growth</h3>
            <p>
              Nurturing creativity, confidence, discipline
              and essential life skills in every student.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">💡</div>
            <h3>Future Ready</h3>
            <p>
              Encouraging curiosity, innovation and
              independent thinking for tomorrow's world.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section className="admission-section" id="admission">
        <div className="admission-content">
          <span className="eyebrow">ADMISSIONS OPEN</span>
          <h2>
            Give Your Child
            <br />
            <span>A Brighter Tomorrow</span>
          </h2>
          <p>
            Begin an exciting journey of learning and
            discovery at DPS INTERNATIONAL SCHOOL.
          </p>

          <a href="#contact" className="btn btn-gold">
            Enquire for Admission →
          </a>
        </div>

        <div className="admission-decoration">
          <div className="big-circle">DPS</div>
          <p>LEARN • GROW • ACHIEVE</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery section" id="gallery">
        <div className="section-heading">
          <span className="eyebrow">OUR CAMPUS</span>
          <h2>
            A Glimpse of
            <br />
            <span>School Life</span>
          </h2>
          <p>
            Every day brings new opportunities to explore,
            create and make wonderful memories.
          </p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item large">
            <img src="/school.jpg" alt="DPS International School campus" />
            <div className="gallery-caption">
              <span>01</span>
              <h3>Our Beautiful Campus</h3>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
              alt="Students learning"
            />
            <div className="gallery-caption">
              <span>02</span>
              <h3>Learning Together</h3>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80"
              alt="Children enjoying school"
            />
            <div className="gallery-caption">
              <span>03</span>
              <h3>Growing Together</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="notice-section section" id="notice">
        <div className="notice-header">
          <div>
            <span className="eyebrow">LATEST UPDATES</span>
            <h2>Notice Board</h2>
          </div>
          <span className="notice-label">SCHOOL NEWS</span>
        </div>

        <div className="notice-card">
          <div className="notice-date">
            <span>01</span>
            <small>UPDATE</small>
          </div>
          <div>
            <h3>Admissions Open</h3>
            <p>Enquiries invited for Play Way to Class 10.</p>
          </div>
          <span className="notice-arrow">↗</span>
        </div>

        <div className="notice-card">
          <div className="notice-date">
            <span>02</span>
            <small>UPDATE</small>
          </div>
          <div>
            <h3>Academic Session</h3>
            <p>Contact the school office for session details.</p>
          </div>
          <span className="notice-arrow">↗</span>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section section" id="contact">
        <div className="contact-content">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>
            Let's Begin
            <br />
            <span>Your Child's Journey</span>
          </h2>
          <p>
            Have questions about admissions? Our school team
            would be happy to assist you.
          </p>

          <div className="contact-detail">
            <span>📍</span>
            <div>
              <h4>Visit Our School</h4>
              <p>Bhingari Bazar Deoria (Uttar Pradesh) </p>
            </div>
          </div>

          <div className="contact-detail">
            <span>📞</span>
            <div>
              <h4>Call Us</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>✉️</span>
            <div>
              <h4>Email Us</h4>
              <p>info@dpsinternationalschool.com</p>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for your enquiry!");
            e.target.reset();
          }}
        >
          <h3>Admission Enquiry</h3>

          <input type="text" placeholder="Parent's Name" required />
          <input type="text" placeholder="Student's Name" required />
          <input type="tel" placeholder="Mobile Number" required />

          <select required defaultValue="">
            <option value="" disabled>Select Class</option>
            <option>Play Way</option>
            <option>Nursery</option>
            <option>LKG</option>
            <option>UKG</option>
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
            <option>Class 4</option>
            <option>Class 5</option>
            <option>Class 6</option>
            <option>Class 7</option>
            <option>Class 8</option>
            <option>Class 9</option>
            <option>Class 10</option>
          </select>

          <textarea placeholder="Your Message" rows="3"></textarea>

          <button type="submit" className="btn btn-gold">
            Submit Enquiry →
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-main">
          <a href="#home" className="school-logo footer-logo">
            <div className="logo-box">DPS</div>
            <div className="logo-text">
              <h2>DPS INTERNATIONAL</h2>
              <span>SCHOOL</span>
            </div>
          </a>

          <p>
            Inspiring excellence. Nurturing potential.
            Building a brighter future.
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#notice">Notice</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} DPS INTERNATIONAL SCHOOL.
          All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;

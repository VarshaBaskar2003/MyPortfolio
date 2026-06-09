import { useState } from "react";

export default function MyNavbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Contact"];

  const handleHireMe = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveLink("Contact");
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };


  const handleNavClick = (e, link) => {
  e.preventDefault();
  setActiveLink(link);
  setMenuOpen(false);

  if (link === "Home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const sectionId = link.toLowerCase();
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=DM+Mono:wght@300;400&display=swap"
        rel="stylesheet"
      />

      {/* Bootstrap CDN (better to move to index.html or main.jsx in real apps) */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <style>{`
        .nav-brand {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 500;
          color: #1a1a1a;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav-brand:hover {
          opacity: 0.75;
        }

        .nav-dot {
          width: 8px;
          height: 8px;
          background: #d87030ff;
          border-radius: 50%;
        }

        .nav-item-link {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          text-transform: lowercase;
          color: #6c757d !important;
          padding: 6px 14px !important;
          border-radius: 8px;
        }

        .nav-item-link:hover {
          color: #1a1a1aff !important;
          background: #f5f5f3;
        }

        .nav-item-link.active {
          color: #3073d8ff !important;
          background: #FAECE7;
        }

        .nav-cta {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          background: #1a1a1a;
          color: #fff;
          border: none;
          padding: 8px 20px;
          border-radius: 100px;
        }

        .nav-cta:hover {
          opacity: 0.8;
        }

        .portfolio-navbar {
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        .navbar-toggler {
          border: none;
          box-shadow: none !important;
        }

        .hamburger-line {
          display: block;
          height: 2px;
          background: #1a1a1a;
          margin: 5px 0;
        }

        .hamburger-line:nth-child(1),
        .hamburger-line:nth-child(3) {
          width: 22px;
        }

        .hamburger-line:nth-child(2) {
          width: 16px;
          margin-left: auto;
        }

        .mobile-nav-link {
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          color: #6c757d !important;
          display: block;
          padding: 10px;
          border-radius: 8px;
        }

        .mobile-nav-link:hover {
          background: #f5f5f3;
          color: #1a1a1a !important;
        }

        .mobile-nav-link.active {
          color: #3036d8ff !important;
          background: #FAECE7;
        }

        .mobile-cta {
          display: block;
          text-align: center;
          background: #1a1a1a;
          color: #fff !important;
          padding: 10px;
          border-radius: 100px;
          margin-top: 10px;
          text-decoration: none;
        }
        html {
          scroll-behavior: smooth;
}
      `}</style>

      <nav
        className="navbar navbar-expand-sm bg-white portfolio-navbar px-3"
        style={{ height: "64px" }}
      >
        <div className="container-fluid">
          {/* Logo */}
          <a className="nav-brand navbar-brand" href="#">
            Varsha B <span className="nav-dot" />
          </a>

          {/* Hamburger */}
          <button
            className="navbar-toggler"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Desktop Links */}
          <div className="collapse navbar-collapse justify-content-center d-sm-flex">
            <ul className="navbar-nav gap-1">
              {navLinks.map((link) => (
                <li className="nav-item" key={link}>
                  <a
                    href="#"
                    className={`nav-link nav-item-link ${activeLink === link ? "active" : ""}`}
                    onClick={(e) => handleNavClick(e, link)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
         {/* Desktop CTA */}
        <button className="nav-cta d-none d-sm-block" onClick={handleHireMe}>
  hire me →
</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white border-bottom px-3 pb-3 pt-2 d-sm-none">
          {navLinks.map((link) => (
            <a
              href="#"
              key={link}
              className={`nav-link mobile-nav-link ${activeLink === link ? "active" : ""
                }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(link);
                setMenuOpen(false);
              }}
            >
              {link}
            </a>
          ))}

          {/* Mobile CTA */}
          <a href="#" className="mobile-cta" onClick={handleHireMe}>
              hire me →
          </a>
          
        </div>
      )}
    </>
  );
}
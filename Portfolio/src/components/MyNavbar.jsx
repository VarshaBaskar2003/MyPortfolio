import { useState } from "react";

export default function MyNavbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Contact"];

  const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const extraOffset = id === "about" ? 0 : 0; // tweak per section if needed
    const top = el.getBoundingClientRect().top + window.scrollY - 64 - extraOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};
  const handleHireMe = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveLink("Contact");
    scrollTo("contact");
  };

 const handleNavClick = (e, link) => {
  e.preventDefault();
  setActiveLink(link);
  setMenuOpen(false);

  if (link === "Home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  scrollTo(link.toLowerCase());  // ✅ About now scrolls to #about which is 64px down
};

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Poppins:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Bootstrap */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        #home, #about, #projects, #contact {
          scroll-margin-top: 64px;
        }

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
          background: #d86e30ff;
          border-radius: 50%;
        }

        .nav-item-link {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          text-transform: lowercase;
          color: #6c757d !important;
          padding: 6px 14px !important;
          border-radius: 8px;
        }

        .nav-item-link:hover {
          color: #1a1a1a !important;
          background: #f5f5f3;
        }

        .nav-item-link.active {
          color: #3038d8ff !important;
          background: #FAECE7;
        }

        .nav-cta {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          background: #1a1a1a;
          color: #fff;
          border: none;
          padding: 8px 20px;
          border-radius: 100px;
          cursor: pointer;
        }

        .nav-cta:hover {
          opacity: 0.8;
        }

        .portfolio-navbar {
          border-bottom: 1px solid rgba(0,0,0,0.08);
          position: sticky;
          top: 0;
          z-index: 999;
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

        .mobile-menu {
          background: #fff;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding: 8px 16px 16px;
          position: sticky;
          top: 64px;
          z-index: 998;
        }

        .mobile-nav-link {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: #6c757d !important;
          display: block;
          padding: 10px 12px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.15s;
        }

        .mobile-nav-link:hover {
          background: #f5f5f3;
          color: #1a1a1a !important;
        }

        .mobile-nav-link.active {
          color: #3054d8ff !important;
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
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          transition: opacity 0.15s;
        }

        .mobile-cta:hover {
          opacity: 0.8;
        }
      `}</style>

      {/* Navbar */}
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
            aria-label="Toggle navigation"
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

          {/* Desktop CTA */}
          <button className="nav-cta d-none d-sm-block" onClick={handleHireMe}>
            hire me →
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu d-sm-none">
          {navLinks.map((link) => (
            <a
              href="#"
              key={link}
              className={`nav-link mobile-nav-link ${activeLink === link ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, link)}
            >
              {link}
            </a>
          ))}
          <a href="#" className="mobile-cta" onClick={handleHireMe}>
            hire me →
          </a>
        </div>
      )}
    </>
  );
}
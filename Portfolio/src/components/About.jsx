import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePhoto from "../assets/Image.png";
import myCV from "../assets/Varsha_AIML.pdf";

export default function AboutSection({ projectsRef }) {
  const skills = [
    "Javascript", "React",  "Python", 
    "Django", "FastAPI", "Node.js",
    "SQL", "Git", "Rest APIs", "Bootstrap"
  ];

  const stats = [
    { num: "5+", label: "projects built" },
    { num: "3",   label: "internships" },
    { num: "2025", label: "grad year" },
  ];

  const handleDownloadCv = () => {
    const a = document.createElement("a");
    a.href = myCV;
    a.download = "Varsha_AIML.pdf";
    a.click();
  };

  const handleViewProjects = () => {
    if (projectsRef?.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Poppins:wght@300;400;500;600&display=swap"
  rel="stylesheet"
/>

     <style>{`
 .about-section {
  padding: 5rem 0 2rem;  
}

  .about-eyebrow {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #D85A30;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 2rem;
  }

  .about-eyebrow::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 1.5px;
    background: #D85A30;
  }

  .about-photo {
    width: 300px;
    height: 450px;
    object-fit: cover;
    border-radius: 10px;
    display: block;
    flex-shrink: 0;
    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  }

  .about-name {
    font-family: 'Playfair Display', serif;
    font-size: 42px;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 1.1;
    margin-bottom: 0.4rem;
    color: #1a1a1a;
  }

  .about-name .dot {
    color: #D85A30;
  }

  .about-role {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: #888;
    margin-bottom: 1.5rem;
    text-transform: lowercase;
  }

  .about-bio {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: #555;
    line-height: 1.9;
    margin-bottom: 1rem;
  }

  .about-bio em {
    color: #1a1a1a;
    font-style: italic;
    font-weight: 500;
  }

  .stats-row {
    display: flex;
    gap: 2.5rem;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid rgba(0,0,0,0.08);
  }

  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 30px;
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1;
    margin-bottom: 4px;
  }

  .stat-label {
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.08em;
    color: #888;
    text-transform: lowercase;
  }

  .skills-heading {
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #999;
    margin-bottom: 0.8rem;
  }

  .skills-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 2rem;
  }

  .skill-pill {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: #666;
    background: #fff;
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: 100px;
    padding: 6px 14px;
    transition: all 0.2s ease;
    cursor: default;
  }

  .skill-pill:hover {
    background: #FAECE7;
    color: #3033d8ff;
    border-color: #3033d8ff;
    transform: translateY(-2px);
  }

  .btn-about-primary {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.03em;
    background: #1a1a1a;
    color: white;
    border: none;
    padding: 12px 26px;
    border-radius: 100px;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .btn-about-primary:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }

  .btn-about-ghost {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.03em;
    background: transparent;
    color: #1a1a1a;
    border: 1px solid rgba(0,0,0,0.15);
    padding: 12px 26px;
    border-radius: 100px;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .btn-about-ghost:hover {
    background: #f5f5f3;
    transform: translateY(-2px);
  }
`}</style>

      <section className="about-section">
        <Container>
          <div className="about-eyebrow">about me</div>

          {/* Photo + Content side by side */}
          <div className="d-flex gap-4 align-items-start flex-wrap">

            {/* ✅ Small photo from assets — no upload, no overlay */}
            <img
              src={profilePhoto}
              alt="Profile"
              className="about-photo"
            />

            {/* Content beside photo */}
            <div style={{ flex: 1, minWidth: 260 }}>
              <h2 className="about-name">
                Varsha B<span className="dot">.</span>
              </h2>
              <p className="about-role">fresher · software developer</p>

              <p className="about-bio">
                A <em>passionate and curious</em> software developer, freshly graduated and
                eager to build things that matter. I love turning ideas into clean, functional
                code — from weekend projects to hackathon builds.
              </p>
              <p className="about-bio">
                Graduated in <em>Information Technology (2025)</em> from Annamalai University. Actively
                looking for my <em>first full-time role</em> where I can grow fast, contribute
                early, and learn from great teams.
              </p>

              {/* Stats */}
              <div className="stats-row">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <p className="skills-heading">tech stack</p>
              <div className="skills-wrap">
                {skills.map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>

              {/* CTAs */}
              <div className="d-flex gap-2 flex-wrap">
                <button className="btn-about-primary" onClick={handleViewProjects}>
                  View my projects →
                </button>
                <button className="btn-about-ghost" onClick={handleDownloadCv}>
                  Download cv
                </button>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
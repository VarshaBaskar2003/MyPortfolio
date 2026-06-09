import { useState } from "react";

const projects = [
    {
        name: "Smart Patient Management System",
        year: "2026",
        desc: "A fullstack AI powered application that helps hospitals or clinics to manage patients, appointments, symptom checking, and analytics through an interactive dashboard.",
        tags: ["React","FastAPI","SQLite"],
        category: "Web App",
        color: "#DFF5EA",
        icon: "💊",
        featured: false,
        liveUrl: "#",
        githubUrl: "https://github.com/VarshaBaskar2003/Healthcare", 
     },
      {
        name: "JobPortal",
        year: "2026",
        desc: "A  naukri style job portal for job seekers to find jobs and internships.",
        tags: ["React", "Python", "Django", "PostgreSQL"],
        category: "Web App",
        color: "#E6F1FB",
        icon: "💼",
        featured: false,
        githubUrl: "https://github.com/VarshaBaskar2003/JobPortal",
    },
    {
        name: "MaizeCare SensorNet",
        year: "2025",
        desc: "An AI-driven early warning system for maize crop disease detection using real-time sensor data and machine learning.",
        tags: ["Python", "Tensorflow", "React", "IoT", "CNN"],
        category: "Web App",
        color: "#F0E6FE",
        icon: "🌱",
        featured: false,
        githubUrl: "https://github.com/VarshaBaskar2003/project"

    },
   
    {
        name: "Django CRUD Student Management System",
        year: "2025",
        desc: "A simple web application that allows users to perform CRUD operations on student records.",
        tags: ["Python", "Django", "HTML", "CSS", "Bootstrap"],
        category: "Web App",
        color: "#FFF3E0",
        icon: "📘",
        featured: false,
        githubUrl: "https://github.com/VarshaBaskar2003/Crud_Project",
    },
];
export default function Projects() {
    const allCategories = ["All", ...new Set(projects.map((p) => p.category))];
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered =
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <>
            {/* Google Fonts */}
           <link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Poppins:wght@300;400;500;600&display=swap"
  rel="stylesheet"
/>
<style>
  {`
     .proj-section {
  padding: 1rem 0 4rem;  
  max-width: 1300px;
  margin: 0 auto;
}

.proj-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  gap: 1rem;
}

.proj-eyebrow {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #D85A30;
  display: block;
  margin-bottom: 6px;
}

.proj-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 600;
  line-height: 1.1;
  color: #1a1a1a;
  margin: 0;
}

.proj-filter-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.filter-btn {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  padding: 8px 18px;
  border-radius: 100px;
  border: 1px solid rgba(0,0,0,0.12);
  background: transparent;
  color: #666;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  border-color: #303bd8ff;
  color: #303bd8ff;
}

.filter-btn.active {
  background: #1a1a1a;
  color: white;
  border-color: #1a1a1a;
}

.proj-count {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #999;
  margin: 0 0 1.75rem;
}

.proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.proj-card {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 18px;
  overflow: hidden;
  transition: all 0.25s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.proj-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
}

.proj-thumb {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.proj-thumb-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.1;
}

.proj-thumb-icon {
  position: relative;
  z-index: 1;
  font-size: 2.8rem;
}

.proj-featured-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 500;
  background: #FAECE7;
  color: #D85A30;
  padding: 4px 10px;
  border-radius: 100px;
}

.proj-body {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.proj-body-top {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.proj-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
}

.proj-year {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #999;
  white-space: nowrap;
}

.proj-desc {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #666;
  line-height: 1.7;
  margin: 0;
}

.proj-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
}

.proj-tag {
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 100px;
  border: 1px solid rgba(0,0,0,0.1);
  color: #777;
}

.proj-footer {
  display: flex;
  gap: 14px;
  padding: 12px 1.2rem;
  border-top: 1px solid rgba(0,0,0,0.06);
}

.proj-link {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #777;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s ease;
}

.proj-link:hover {
  color: #D85A30;
}

.proj-link svg {
  width: 14px;
  height: 14px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
}

.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #999;
}

@media (max-width: 600px) {
  .proj-section {
    padding: 0.5rem 1rem 0.5rem;
  }

  .proj-grid {
    grid-template-columns: 1fr;
  }
}
`}</style>

            <section className="proj-section" id="projects">
                {/* Header */}
                <div className="proj-header">
                    <div>
                        <span className="proj-eyebrow">selected work</span>
                        <h2 className="proj-title">Projects</h2>
                    </div>
                </div>

                {/* Filters */}
                <div className="proj-filter-row">
                    {allCategories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat.toLowerCase()}
                        </button>
                    ))}
                </div>

                {/* Count */}
                <p className="proj-count">
                    {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                </p>

                {/* Grid */}
                <div className="proj-grid">
                    {filtered.length === 0 ? (
                        <div className="no-results">No projects in this category yet.</div>
                    ) : (
                        filtered.map((project) => (
                            <div className="proj-card" key={project.name}>
                                {/* Thumbnail */}
                                <div
                                    className="proj-thumb"
                                    style={{ background: project.color }}
                                >
                                    <svg
                                        className="proj-thumb-pattern"
                                        viewBox="0 0 200 160"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="160" cy="20" r="80" fill="#000" />
                                        <circle cx="10" cy="130" r="60" fill="#000" />
                                    </svg>
                                    <span className="proj-thumb-icon">{project.icon}</span>
                                    {project.featured && (
                                        <span className="proj-featured-badge">featured</span>
                                    )}
                                </div>

                                {/* Body */}
                                <div className="proj-body">
                                    <div className="proj-body-top">
                                        <h3 className="proj-name">{project.name}</h3>
                                        <span className="proj-year">{project.year}</span>
                                    </div>
                                    <p className="proj-desc">{project.desc}</p>
                                    <div className="proj-tags">
                                        {project.tags.map((tag) => (
                                            <span className="proj-tag" key={tag}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer Links */}
                                <div className="proj-footer">
                                    {/* <a
                                        href={project.liveUrl}
                                        className="proj-link"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <svg viewBox="0 0 24 24">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                        live demo
                                    </a> */}
                                    <a
                                        href={project.githubUrl}
                                        className="proj-link"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <svg viewBox="0 0 24 24">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                        </svg>
                                        source
                                    </a>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </>
    );
}
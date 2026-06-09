import { useRef } from "react";
import MyNavbar from "./components/MyNavbar";
import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const projectsRef = useRef(null);

  return (
    <>
      <MyNavbar />
      <div id="about">
        <AboutSection projectsRef={projectsRef} />
      </div>
      <div id="projects" ref={projectsRef}>
        <ProjectsSection />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/skills.css";

const Skills = () => {
  const skillsRef = useRef(null);
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const handleCubeInteraction = (e) => {
    e.preventDefault(); // Prevent default scroll behavior
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    if (location.pathname === "/skills") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div className="skills-container" ref={skillsRef}>
      <div
        className={`cube ${isActive ? "active" : ""}`}
        onClick={handleCubeInteraction}
        onTouchStart={(e) => e.stopPropagation()}
      >
        <div className="big">
          <span style={{ "--i": 0, "--clr": "#b4b4b4" }}>JS</span>
          <span style={{ "--i": 1, "--clr": "#c0c0c0" }}>HTML</span>
          <span style={{ "--i": 2, "--clr": "#b4b4b4" }}>CSS</span>
          <span style={{ "--i": 3, "--clr": "#c0c0c0" }}>GIT</span>
          <span className="top" style={{ "--clr": "#e4e4e4" }}></span>
        </div>
      </div>
      <div className="cube2">
        <div className="big">
          <span style={{ "--i": 0, "--clr": "#cc810a" }}>React</span>
          <span style={{ "--i": 1, "--clr": "#b27109" }}>Tailwind</span>
          <span style={{ "--i": 2, "--clr": "#cc810a" }}>TS</span>
          <span style={{ "--i": 3, "--clr": "#b27109" }}>ARIA</span>
          <span className="top" style={{ "--clr": "#cc9544" }}></span>
        </div>
      </div>

      <ul className="skills-list1">
        <li style={{ "--j": 0 }}>JavaScript</li>
        <li style={{ "--j": 1 }}>HTML</li>
        <li style={{ "--j": 2 }}>CSS</li>
        <li style={{ "--j": 3 }}>Git</li>
      </ul>
      <ul className="skills-list2">
        <li style={{ "--j": 0 }}>React</li>
        <li style={{ "--j": 1 }}>Tailwind</li>
        <li style={{ "--j": 2 }}>TypeScript</li>
        <li style={{ "--j": 3 }}>ARIA</li>
      </ul>
    </div>
  );
};

export default Skills;

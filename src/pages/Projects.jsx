import "../styles/projects.css";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-card">
        <a href="#" target="_blank">
          <div className="bright-image-1" />
        </a>
        <div className="blot-mask" />
      </div>

      <div className="project-card">
        <a
          href="https://marrozhkova.github.io/the-very-first-projekt/"
          target="_blank"
        >
          <div className="bright-image-2" />
          <div className="blot-mask" />
        </a>
      </div>

      <div className="project-card">
        <a href="#" target="_blank">
          <div className="bright-image-3" />
          <div className="blot-mask" />
        </a>
      </div>

      <div className="project-card">
        <a href="https://eurovision-ua.vercel.app/" target="_blank">
          <div className="bright-image-4" />
          <div className="blot-mask" />
        </a>
      </div>
    </div>
  );
};

export default Projects;

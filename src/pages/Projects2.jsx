import "../styles/projects2.css";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Projects2 = () => {
  const projectsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/projects") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <>
      <div className="wrapper" ref={projectsRef}>
        <div className="inner" style={{ "--quantity": 5 }}>
          <div className="card" style={{ "--index": 0 }}>
            <a href="#">
              <div className="img img1"></div>
            </a>
          </div>
          <div className="card" style={{ "--index": 1 }}>
            <a href="#">
              <div className="img img2"></div>
            </a>
          </div>
          <div className="card" style={{ "--index": 2 }}>
            <a
              href="https://marrozhkova.github.io/the-very-first-projekt/"
              target="_blank"
            >
              <div className="img img3"></div>
            </a>
          </div>
          <div className="card" style={{ "--index": 3 }}>
            <a href="#">
              {" "}
              <div className="img img4"></div>
            </a>
          </div>
          <div className="card" style={{ "--index": 4 }}>
            <a href="https://eurovision-ua.vercel.app/" target="_blank">
              <div className="img img5"></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects2;

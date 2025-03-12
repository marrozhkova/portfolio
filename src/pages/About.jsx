import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/about.css";
import { MdDownload } from "react-icons/md";
import cvEN from "../assets/data/old.pdf";
import cvDE from "../assets/data/de.pdf";
import cvUA from "../assets/data/ua.pdf";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToAbout) {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
        // Clean up the state
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }
    }
  }, [location]);
  const [lang, setLang] = useState("en");
  const cvLinks = {
    en: cvEN,
    de: cvDE,
    ua: cvUA,
  };
  const handleLanguageChange = (selectedLang) => {
    setLang(selectedLang);
  };
  return (
    <div className="home-container-2" id="about">
      <div className="foto-section">
        <div className="foto-div">
          <img
            className="foto"
            src="src/assets/portfolio-foto/main2.png"
            alt="portfolio-foto"
          />
        </div>
        <div className="quote-div">
          <p>
            Hallo I'm Maryna. I'm a Web-Developer. I'm very passionate and
            dedicated to my work.
          </p>
          <blockquote>
            <p>
              <q>Growing old is mandatory, but growing up is optional.</q>
            </p>
            <p>
              <em>—Walt Disney</em>
            </p>
          </blockquote>
        </div>
      </div>
      <div className="cv">
        <a
          href={cvLinks[lang]}
          className="cv-button"
          download={`cv-${lang}.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          alt="cv download"
        >
          <MdDownload className="download-icon" />
        </a>
        <div className="radio-input">
          <input
            defaultChecked
            className="input"
            id="en"
            type="radio"
            name="radio"
            onChange={() => handleLanguageChange("en")}
          />
          <input
            className="input"
            id="de"
            type="radio"
            name="radio"
            onChange={() => handleLanguageChange("de")}
          />

          <input
            className="input"
            id="ua"
            type="radio"
            name="radio"
            onChange={() => handleLanguageChange("ua")}
          />
        </div>
      </div>
    </div>
  );
};
export default About;

import { useState, useEffect } from "react";
import "../styles/header.css";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = (e) => {
      // Close if clicking outside menu and checkbox
      if (!e.target.closest(".small-menu") && !e.target.closest(".cross")) {
        setIsMenuOpen(false);
        const checkbox = document.querySelector(".header-check");
        if (checkbox) checkbox.checked = false;
      }
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    const checkbox = document.querySelector(".header-check");
    if (checkbox) checkbox.checked = false;
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Update URL without hashtag
    window.history.replaceState({}, "", "/");
  };

  const handleCheckboxClick = (e) => {
    e.stopPropagation();
    const isChecked = e.target.checked;
    setIsMenuOpen(isChecked);
  };

  return (
    <header>
      <h2>
        <Link to="/" onClick={handleLogoClick} className="heading-h2">
          Rozhkova-DEV
        </Link>
      </h2>
      <nav className="main-nav">
        <ul className="main-menu">
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
      </nav>
      <nav className="small-nav">
        <label className="cross" onClick={(e) => e.stopPropagation()}>
          <input
            type="checkbox"
            className="header-check"
            checked={isMenuOpen}
            onChange={handleCheckboxClick}
            onClick={(e) => e.stopPropagation()}
          />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>{" "}
        <ul className="small-menu">
          <li>
            <NavLink to="/" onClick={handleMenuItemClick}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={handleMenuItemClick}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={handleMenuItemClick}>
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

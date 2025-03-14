import React, { useState, useEffect } from "react";
import "../styles/cursor.css";

const Cursor = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [outlinePosition, setOutlinePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    const onMouseMove = (e) => {
      // Dot follows cursor immediately
      setDotPosition({ x: e.clientX, y: e.clientY });

      // Outline follows with delay
      setTimeout(() => {
        setOutlinePosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    const handleInteractiveHover = (e) => {
      const interactiveSelectors = [
        "a",
        "input",
        "label",
        ".footer-button",
        ".cv",
        "footer a",
        ".footer-icons a",
      ].join(",");

      const isInteractive =
        e.target.matches(interactiveSelectors) ||
        e.target.closest(interactiveSelectors);

      setIsHovered(isInteractive);
    };

    // Only add event listeners if on desktop
    if (isDesktop) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseover", handleInteractiveHover);
      document.addEventListener("mouseout", handleInteractiveHover);
    }

    // Add resize listener
    window.addEventListener("resize", handleResize);

    return () => {
      if (isDesktop) {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseover", handleInteractiveHover);
        document.removeEventListener("mouseout", handleInteractiveHover);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [isDesktop]);

  // Don't render anything on mobile or when hovered
  if (!isDesktop || isHovered) return null;

  return (
    <div className={`cursor-wrapper ${isHovered ? "cursor-hidden" : ""}`}>
      <div
        className="cursor-outline"
        style={{
          transform: `translate(${outlinePosition.x - 20}px, ${
            outlinePosition.y - 20
          }px)`,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${dotPosition.x - 4}px, ${
            dotPosition.y - 4
          }px)`,
        }}
      />
    </div>
  );
};

export default Cursor;

import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../styles/error2.css";
const Error2 = () => {
  const errorRef = useRef(null);
  const location = useLocation();
  const navi = useNavigate();

  useEffect(() => {
    if (location.pathname === "/404") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [location]);

  useEffect(() => {
    const redirect = setTimeout(() => {
      navi(
        "/",
        { replace: true },
        {
          state: { scrollToAbout: true },
        }
      );
    }, 7000);
    return () => {
      clearTimeout(redirect);
    };
  }, []);

  return (
    <div className="error2" ref={errorRef}>
      <div className="error-blot">
        <div className="error-text">404</div>
      </div>
    </div>
  );
};
export default Error2;

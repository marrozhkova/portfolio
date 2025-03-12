import "../styles/error.css";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Error = () => {
  const errorRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/404") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [location]);

  const navi = useNavigate();
  const [count, setCount] = useState(7);

  useEffect(() => {
    function raining() {
      let absolute = document.querySelector(".absolute"); // Fixed class name
      let e = document.createElement("div");
      e.className = "error-rain"; // This is correct for createElement
      e.innerText = "404";

      if (absolute) {
        absolute.appendChild(e);
        let maxWidth = window.innerWidth;
        let left = Math.floor(Math.random() * maxWidth);
        let duration = Math.random() * 2;

        e.style.left = left + "px";
        e.style.animationDuration = 5 + duration + "s";

        setTimeout(function () {
          absolute.removeChild(e);
        }, 5000);
      }
    }
    const interval = setInterval(raining, 50);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount((prev) => prev - 1);
  //   }, 1000);
  //   const redirect = setTimeout(() => {
  //     navi(
  //       "/",
  //       { replace: true },
  //       {
  //         state: { scrollToAbout: true },
  //       }
  //     );
  //   }, 7000);
  //   return () => {
  //     clearInterval(timer);
  //     clearTimeout(redirect);
  //   };
  // }, []);

  return (
    <div className="error-main" id="error" ref={errorRef}>
      <div className="absolute"></div>
      {/* <div className="countdown">{count}</div> */}
    </div>
  );
};

export default Error;

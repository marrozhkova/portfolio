import { useEffect, useRef, useState } from "react";

const Folio = () => {
  const [isMobile, setIsMobile] = useState(false);
  const textRef = useRef(null);
  const img1Ref = useRef(null);
  const img5Ref = useRef(null);
  const img7Ref = useRef(null);
  const img9Ref = useRef(null);
  const img11Ref = useRef(null);
  const img12Ref = useRef(null);
  const img13Ref = useRef(null);
  const img14Ref = useRef(null);
  const img15Ref = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const img1 = img1Ref.current;
    const img5 = img5Ref.current;
    const img7 = img7Ref.current;
    const img9 = img9Ref.current;
    const img11 = img11Ref.current;
    const img12 = img12Ref.current;
    const img13 = img13Ref.current;
    const img14 = img14Ref.current;
    const img15 = img15Ref.current;

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const value = window.scrollY / (isMobile ? 2 : 1);

      if (!isMobile) {
        text.style.top = `${value * 1}px`;
        img1.style.top = `${value * 0.2}px`;
        img5.style.top = `${value * 0.2}px`;
        img7.style.top = `${value * 0.3}px`;
        img9.style.top = `${value * 0.1}px`;
        img11.style.top = `${value * 0.5}px`;
        img12.style.top = `${value * 1}px`;
        img13.style.left = `${-(value * 1.2)}px`;
        img13.style.top = `${-(value * 0.5)}px`;
        img14.style.left = `${value * 0.5}px`;
        img14.style.top = `${-(value * 0.5)}px`;
        img15.style.left = `${value * 1}px`;
        img15.style.top = `${value * 1.2}px`;
      } else {
        // Mobile animation values
        text.style.top = `${value * 0.5}px`;
        img1.style.top = `${value * 0.1}px`;
        img5.style.top = `${value * 0.1}px`;
        img7.style.top = `${value * 0.15}px`;
        img9.style.top = `${value * 0.05}px`;
        img11.style.top = `${value * 0.25}px`;
        img12.style.top = `${value * 0.5}px`;
        img13.style.left = `${-(value * 0.6)}px`;
        img13.style.top = `${-(value * 0.25)}px`;
        img14.style.left = `${value * 0.25}px`;
        img14.style.top = `${-(value * 0.25)}px`;
        img15.style.left = `${value * 0.5}px`;
        img15.style.top = `${value * 0.6}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <div className="home-container-1">
      <div className="home home-1" ref={img1Ref}></div>
      <h1 className="heading" ref={textRef}>
        Rozhkova - DEV
      </h1>
      <div className="home home-2"></div>
      <div className="home home-3"></div>
      <div className="home home-4"></div>
      <div className="home home-5" ref={img5Ref}></div>
      <div className="home home-6"></div>
      <div className="home home-7" ref={img7Ref}></div>
      <div className="home home-8"></div>
      <div className="home home-9" ref={img9Ref}></div>
      <div className="home home-10"></div>
      <div className="home home-11" ref={img11Ref}></div>
      <div className="home home-12" ref={img12Ref}></div>
      <div className="home home-13" ref={img13Ref}></div>
      <div className="home home-14" ref={img14Ref}></div>
      <div className="home home-15" ref={img15Ref}></div>
    </div>
  );
};
export default Folio;

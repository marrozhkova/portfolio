import { useEffect, useRef, useState } from "react";

const Folio = () => {
  const [scrollY, setScrollY] = useState(0);
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
    let ticking = false;
    let touchStartY = 0;
    let lastScrollY = window.scrollY;

    const updateAnimation = () => {
      const value = scrollY / 1;
      if (textRef.current) {
        textRef.current.style.top = `${value * 1}px`;
        img1Ref.current.style.top = `${value * 0.2}px`;
        img5Ref.current.style.top = `${value * 0.2}px`;
        img7Ref.current.style.top = `${value * 0.3}px`;
        img9Ref.current.style.top = `${value * 0.1}px`;
        img11Ref.current.style.top = `${value * 0.5}px`;
        img12Ref.current.style.top = `${value * 1}px`;
        img13Ref.current.style.left = `${-(value * 1.2)}px`;
        img13Ref.current.style.top = `${-(value * 0.5)}px`;
        img14Ref.current.style.left = `${value * 0.5}px`;
        img14Ref.current.style.top = `${-(value * 0.5)}px`;
        img15Ref.current.style.left = `${value * 1}px`;
        img15Ref.current.style.top = `${value * 1.2}px`;
      }
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(lastScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const touchY = e.touches[0].clientY;
      const diff = touchStartY - touchY;
      setScrollY((prev) => Math.max(0, prev + diff));
      touchStartY = touchY;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    // Initial animation
    updateAnimation();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [scrollY]);

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

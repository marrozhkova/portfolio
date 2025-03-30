import img1 from "../assets/home/1.webp";
import img2 from "../assets/home/2.webp";
import img3 from "../assets/home/3.webp";
import img4 from "../assets/home/4.webp";
import img5 from "../assets/home/5.webp";
import img6 from "../assets/home/6.webp";
import img7 from "../assets/home/7.webp";
import img8 from "../assets/home/8.webp";
import img9 from "../assets/home/9.webp";
import img10 from "../assets/home/10.webp";
import img11 from "../assets/home/11.webp";
import img12 from "../assets/home/12.webp";
import img13 from "../assets/home/13.webp";
import img14 from "../assets/home/14.webp";
import img15 from "../assets/home/15.webp";
import main from "../assets/portfolio-foto/main2.webp";
import folioFont from "../assets/fonts/RubikMaps-Regular.woff2";
import p1 from "../assets/projects/1.png";
import p2 from "../assets/projects/2.png";
import p3 from "../assets/projects/3.png";
import p4 from "../assets/projects/4.png";
import p5 from "../assets/projects/5.png";
import i3 from "../assets/projects/i3.png";

export const appImages = {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  main,
  p1,
  p2,
  p3,
  p4,
  p5,
  i3,
};

export const appFonts = [folioFont];

export const preloadAppImages = (imagePaths) => {
  return Promise.all(
    imagePaths.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = () => {
          console.error(`Failed to preload image: ${src}`);
          reject();
        };
        img.src = src;
      });
    })
  );
};

export const preloadFonts = (fontPaths) => {
  return Promise.all(
    fontPaths.map((fontPath) => {
      return new Promise((resolve, reject) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "font";
        link.type = "font/woff2";
        link.href = fontPath;
        link.crossOrigin = "anonymous";
        link.onload = resolve;
        link.onerror = () => {
          console.error(`Failed to preload font: ${fontPath}`);
          reject();
        };
        document.head.appendChild(link);
      });
    })
  );
};

export const preloadAssets = async () => {
  try {
    // Preload images
    await preloadAppImages(Object.values(appImages));

    // Preload fonts
    await preloadFonts(appFonts);

    console.log("All assets preloaded successfully");
  } catch (error) {
    console.error("Error preloading assets:", error);
  }
};

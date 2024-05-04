import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";

import bp from "@/assets/heroes/blackpanther.jpeg";
import ironman from "@/assets/heroes/ironman.jpeg";
import wolverine from "@/assets/heroes/wolverine.jpeg";

const images = [
  { image: bp, alt: "A ...." },
  { image: ironman, alt: "A ...." },
  { image: wolverine, alt: "A ...." },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

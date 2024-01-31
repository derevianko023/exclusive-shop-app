import React, { useState } from "react";
import { Swipeable } from "react-swipeable";
import styles from "./Carousel.module.scss";
import ArrowLeft from "@/widgets/libs/assets/arrow-left.svg?react";
import ArrowRight from "@/widgets/libs/assets/arrow-right.svg?react";
import images from "../../api/images.json";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Math.floor(images.length / 2)
  );

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === images.length - 1;

  return (
    <Swipeable onSwipedLeft={goToNextImage} onSwipedRight={goToPrevImage}>
      <div className={styles.CarouselWrapper}>
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`${styles.image} ${
              index === currentImageIndex ? styles.currentImage : ""
            }`}
            style={{
              transform: `translateX(${(index - currentImageIndex) * 100}%)`,
              transition:
                (isFirstImage && index === images.length - 1) || // з першої на останню
                (isLastImage && index === 0) // з останньої на першу
                  ? "transform 0.5s ease"
                  : "",
            }}
          />
        ))}

        <ArrowLeft
          className={`${styles.ArrowLeft} ${styles.Arrow}`}
          onClick={goToPrevImage}
        />
        <ArrowRight
          className={`${styles.ArrowRight} ${styles.Arrow}`}
          onClick={goToNextImage}
        />
      </div>
    </Swipeable>
  );
};

export default Carousel;

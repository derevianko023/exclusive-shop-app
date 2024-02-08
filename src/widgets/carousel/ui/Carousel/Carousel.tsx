//react
import { useState, useEffect, FC } from "react";
//libs
import { useSwipeable } from "react-swipeable";
//styles
import styles from "./Carousel.module.scss";
// assets
import ArrowLeft from "../../libs/assets/arrow-left.svg?react";
import ArrowRight from "../../libs/assets/arrow-right.svg?react";

interface CarouselProps {
  images: { id: number; src: string; alt: string }[];
}

export const Carousel: FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Math.floor(images.length / 2)
  );

  useEffect(() => {
    const timer = setInterval(goToNextImage, 3000);
    console.log("cdcvfdgbhnj");
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  const goToPrevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNextImage(),
    onSwipedRight: () => goToPrevImage(),
    swipeDuration: 3000,
    preventScrollOnSwipe: true,
  });

  return (
    <div className={styles.CarouselWrapper} {...handlers}>
      {images.map((image, index) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className={`${styles.image} ${
            index === currentImageIndex ? styles.currentImage : ""
          }`}
          style={{ display: index === currentImageIndex ? "block" : "none" }}
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

      <div className={styles.IndicatorsWrapper}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`${styles.Indicator} ${
              index === currentImageIndex ? styles.Active : ""
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

//react
import { useState } from 'react';
//libs
import { useSwipeable } from "react-swipeable";
//styles
import styles from './Carousel.module.scss';
// assets
import ArrowLeft from "@/widgets/libs/assets/arrow-left.svg?react";
import ArrowRight from "@/widgets/libs/assets/arrow-right.svg?react";
import images from "../../api/images.json";

export const Carousel = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(images.length / 2));

  const goToPrevImage = () => {
    setCurrentImageIndex(prevIndex => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  }
  const goToNextImage = () => {
    setCurrentImageIndex(prevIndex => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  }
  const handleIndicatorClick = (index: number) => {
    setCurrentImageIndex(index);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => goToNextImage(),
    onSwipedRight: () =>goToPrevImage(),
    swipeDuration: 3000,
    preventScrollOnSwipe: true,
  });

  return (
    <div className={styles.CarouselWrapper} {...handlers}>

      {images.map((image, index) => (<img
        key={image.id}
        src={image.src}
        alt={image.alt}
        className={`${styles.image} ${index === currentImageIndex ? styles.currentImage : ''}`}
        style={{ display: index === currentImageIndex ? 'block' : 'none' }} />))}
        

      < ArrowLeft className={`${styles.ArrowLeft} ${styles.Arrow}`} onClick={goToPrevImage} />
      < ArrowRight className={`${styles.ArrowRight} ${styles.Arrow}`} onClick={goToNextImage} />

      <div className={styles.IndicatorsWrapper}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`${styles.Indicator} ${index === currentImageIndex ? styles.Active : ''}`}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}


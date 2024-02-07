// react
import { FC, useState } from "react";
// styles
import styles from "./ProductCard.module.scss";
//assets
import HeartIcon from "../../libs/assets/svg/heart-icon.svg?react";
import HeartIconActive from "../../libs/assets/svg/heart-icon-active.svg?react";
//ui
import { Button } from "@/shared/ui/Button";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  wishlist: boolean;
  onHeartIconClick: (productId: number) => void;
}

export const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  image,
  price,
  wishlist,
  onHeartIconClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOnMouseEnter = () => {
    setIsHovered(true)
  }
  const handleOnMouseLeave = () => {
    setIsHovered(false)
  }

  const toggleIsFavorite = () => {
    onHeartIconClick(id);
  };

  const handleClick = () => {
    console.log("click");
  };

  return (
    <>
      <li
        className={styles.ProductWrapper}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <div className={styles.ImageWrapper}>
          <img src={image} alt={name} />
          {isHovered && (
            <div className={styles.ButtonWrapper}>
              <Button
                onClick={handleClick}
                disabled={false}
                backgroundColor="black"
                size="small"
              >
                Add To Cart
              </Button>
            </div>
          )}
        </div>
        {wishlist ? (
          <div className={styles.IconWrapper}>
            <HeartIconActive
              className={styles.Icon}
              onClick={toggleIsFavorite}
            />
          </div>
        ) : (
          <div className={styles.IconWrapper}>
            <HeartIcon 
              className={styles.Icon}
              onClick={toggleIsFavorite} />
          </div>
        )}
        <p className={styles.ProductName}>{name}</p>
        <p className={styles.ProductPrice}>${price}</p>
      </li>
    </>
  );
};

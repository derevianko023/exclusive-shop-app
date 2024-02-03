// react
import { FC, useState } from 'react'
// styles
import styles from './ProductCard.module.scss'
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
    onHeartIconClick: (productId: number)=> void;
}

export const ProductCard: FC<ProductCardProps> = ({ id, name, image, price, wishlist, onHeartIconClick }) => {

    const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

    const handleMouseEnter = (productId: number) => {
        setHoveredProductId(productId);
    }

    const handleMouseLeave = () => {
        setHoveredProductId(null);
    }

    const handleClick = () => {
        console.log('click')
    }

    return (
        <>
            <li className={styles.ProductWrapper} key={id}
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.ImageWrapper}>
                    <img src={image}
                        alt={name} />
                    {hoveredProductId === id && (
                        <div className={styles.ButtonWrapper}>
                            <Button onClick={handleClick} disabled={false} backgroundColor="black" size="small">
                                Add To Cart
                            </Button>
                        </div>
                    )}
                </div>
                {wishlist ?
                    <div className={styles.IconWrapper}><HeartIconActive className={styles.Icon} onClick={() => onHeartIconClick(id)}/></div>
                    :
                    <div className={styles.IconWrapper}><HeartIcon className={styles.Icon} onClick={() => onHeartIconClick(id)} /></div>}
                <p className={styles.ProductName}>{name}</p>
                <p className={styles.ProductPrice}>${price}</p>
            </li>
        </>
    )
}

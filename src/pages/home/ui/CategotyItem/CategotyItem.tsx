// react
import { FC, ReactNode, useState } from 'react'
// styles
import styles from './CategotyItem.module.scss'

interface CategotyItemProps {
    icon: ReactNode;
    text: string;
    onClick: () => void;
    isActive: boolean;
}

export const CategotyItem: FC<CategotyItemProps> = ({ icon, text, onClick, isActive }) => {

    const [isHovered, setIsHovered] = useState(false);


    const handleOnMouseEnter = () => {
        setIsHovered(true)
    }
    const handleOnMouseLeave = () => {
        setIsHovered(false)
    }
    return (
        <div
            className={`${styles.CategotyItem} ${isActive ? styles.clicked : ''} ${isHovered ? styles.hovered : ''}`}
            onClick={onClick}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}>
            <div className={styles.CategoryIcon}>{icon}</div>
            <p className={styles.CategoryText}>{text}</p>
        </div>
    )
}

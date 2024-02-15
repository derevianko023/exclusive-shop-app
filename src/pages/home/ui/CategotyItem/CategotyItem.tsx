// react
import { FC, ReactNode, useState } from 'react'
// styles
import styles from './CategotyItem.module.scss'

interface CategotyItemProps {
    icon: ReactNode;
    text: string;
    onClick: () => void;
}

export const CategotyItem: FC<CategotyItemProps> = ({ icon, text, onClick }) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        onClick();
        setIsClicked(true);
    };
    return (
        <div
            className={`${styles.CategotyItem} ${isClicked ? styles.clicked : ''}`}
            onClick={handleClick}>
            <div className={styles.CategoryIcon}>{icon}</div>
            <p className={styles.CategoryText}>{text}</p>
        </div>
    )
}

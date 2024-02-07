// react
import { FC, useState } from 'react'
// styles
import styles from './MenuItem.module.scss'
//assets
import Arrow from "../../libs/assets/svg/arrow-bottom.svg?react";

interface MenuItemProps {
    name: string;
    subcategories?: string[];
}

export const MenuItem: FC<MenuItemProps> = ({ name, subcategories }) => {

    const [isOpenSubcategories, setIsOpenSubcategories] = useState(false);

    const handleArrowClick = () => {
        setIsOpenSubcategories(!isOpenSubcategories)
    }
    const setCategoryFilter = () => {
        console.log('category click')
    }
    const setSubcategoryFilter = () => {
        console.log('subcategory click')
    }

    return (
        <div className={styles.MenuItemWrapper}>
            <li className={styles.MenuItem}
            onClick={setCategoryFilter}
            >
                <p className={styles.CategoryName}>{name}</p>
                {subcategories &&
                    <Arrow
                        className={styles.Arrow}
                        onClick={handleArrowClick} />}
            </li>
            {subcategories && isOpenSubcategories && (
                <ul className={styles.SubcategoryWrapper}>
                    {subcategories.map(subcategory => (
                        <li
                            className={styles.SubcategoryName}
                            key={subcategory}
                            onClick={setSubcategoryFilter}
                            >{subcategory}
                            </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

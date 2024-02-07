// react
import { FC } from 'react'
// styles
import styles from './Menu.module.scss'
import { MenuItem } from '../MenuItem/MenuItem';


interface Category {
    name: string;
    subcategories?: string[];
}
interface MenuProps {
    categories: Category[]

}
export const Menu: FC<MenuProps> = ({ categories }) => {
    console.log(categories)

    return (
        <ul className={styles.Menu}>
            {categories.map((category) => (
                <MenuItem
                    key={category.name}
                    name={category.name}
                    subcategories={category.subcategories} />
            ))}
        </ul>
    )
}

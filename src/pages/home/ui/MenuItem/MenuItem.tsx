// react
import { FC, useState } from "react";
// styles
import styles from "./MenuItem.module.scss";
//assets
import Arrow from "../../libs/assets/svg/arrow-right.svg?react";

interface MenuItemProps {
  name: string;
  subcategories?: string[];
}

export const MenuItem: FC<MenuItemProps> = ({ name, subcategories }) => {

  const [isOpenSubcategories, setIsOpenSubcategories] = useState(false);
  

  const setCategoryFilter = () => {
    console.log("category click");
  };
  const setSubcategoryFilter = () => {
    console.log("subcategory click");
  };

  const handleOnMouseEnter = () => {
    setIsOpenSubcategories(true);
  };
  const handleOnMouseLeave = () => {
    setIsOpenSubcategories(false);
  };

  return (
    <div 
    className={`${styles.MenuItemWrapper} ${isOpenSubcategories ? styles.hovered : ''}`}
    onMouseEnter={handleOnMouseEnter}
    onMouseLeave={handleOnMouseLeave}>
      <li className={styles.MenuItem} onClick={setCategoryFilter}>
        <p className={styles.CategoryName}>{name}</p>
        {subcategories && (
          <Arrow className={styles.Arrow} />
        )}
      </li>
      {subcategories && isOpenSubcategories && (
        <ul className={styles.SubcategoryWrapper}>
          {subcategories.map((subcategory) => (
            <li
              className={styles.SubcategoryName}
              onMouseEnter={handleOnMouseEnter}
              key={subcategory}
              onClick={setSubcategoryFilter}
            >
              {subcategory}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

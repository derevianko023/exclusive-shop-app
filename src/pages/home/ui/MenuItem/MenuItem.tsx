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
  const [hoveredSubcategoryIdx, setHoveredSubcategoryIdx] = useState(-1);



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
  const handleOnMouseEnterSub = (index: number) => {
    setHoveredSubcategoryIdx(index);
  };
  const handleOnMouseLeaveSub = () => {
    setHoveredSubcategoryIdx(-1);
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
          {subcategories.map((subcategory, index) => (
            <li
              onMouseEnter={() => handleOnMouseEnterSub(index)}
              onMouseLeave={handleOnMouseLeaveSub}
              className={`${styles.SubcategoryName} ${hoveredSubcategoryIdx === index ? styles.hovered : ''}`}
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

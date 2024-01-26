// react
import { FC } from "react";
// styles
import styles from "./CustomCategoryTitle.module.scss";

interface CustomCategoryTitle {
    title:  string;
  }
  export const CustomCategoryTitle: FC<CustomCategoryTitle> = ({title}) => {
  return (
    <div className={styles.TitleWrapper}>
        <div className={styles.RoseBox}></div>
        <p className={styles.TitleText}>{title}</p>
    </div>
  )
}


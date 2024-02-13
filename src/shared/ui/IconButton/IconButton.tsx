// react
import { FC, ReactNode } from "react";
// styles
import styles from "./IconButton.module.scss";
import classnames from "classnames";

interface IconButtonProps {
  icon: ReactNode;
  onClick: () => void;
  size: "small" | "large";
}

export const IconButton: FC<IconButtonProps> = ({ icon, onClick, size }) => {
  return (
    <button className={classnames(styles.IconButton, {
      [styles.small]: size === "small",
      [styles.large]: size === "large",
    })} 
    onClick={onClick}>
      <div className={styles.Icon}>{icon}</div>
    </button>
  );
};

// react
import { ReactNode, FC } from "react";
// libs
import classnames from "classnames";
// styles
import styles from "./Button.module.scss";

interface ButtonProps {
  icon?: ReactNode;
  onClick: () => void;
  children: ReactNode;
  disabled: boolean;
  backgroundColor: "rose" | "green" | "black" | "none";
  size: "small" | "medium" | "large";
}

export const Button: FC<ButtonProps> = ({
  icon,
  children,
  onClick,
  disabled,
  backgroundColor,
  size,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classnames(styles.Button, {
        [styles.roseBG]: backgroundColor === "rose",
        [styles.greenBG]: backgroundColor === "green",
        [styles.blackBG]: backgroundColor === "black",
        [styles.noneBG]: backgroundColor === "none",
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
    >
      {icon && <div className={styles.Icon}>{icon}</div>}
      {children}
    </button>
  );
};

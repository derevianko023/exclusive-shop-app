// react
import { ReactNode, FC } from "react";
// libs
import classnames from "classnames";
// styles
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  backgroundColor: "rose" | "green" | "none";
  size?: "small" | "medium" | "large"; // TODO Add size
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  backgroundColor,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classnames(styles.Button, {
        [styles.roseBG]: backgroundColor === "rose",
        [styles.greenBG]: backgroundColor === "green",
        [styles.noneBG]: backgroundColor === "none",
      })}
    >
      {children}
    </button>
  );
};

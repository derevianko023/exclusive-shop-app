// react
import { ReactNode, FC, CSSProperties } from "react";
// libs
import classnames from "classnames";
// styles
import styles from "./Input.module.scss";

interface InputProps {
  icon?: ReactNode;
  placeholder?: string;
  borderStyle: "bottom" | "all" | "none";
  borderColor?: string;
  backgroundColor?: "none" | "gray";
  onChange: () => void;
  inputType: string;
  inputWrapperWidth?: string;
  inputWrapperHeight?: string;
}

export const Input: FC<InputProps> = ({
  icon,
  placeholder,
  borderStyle = "all",
  borderColor = "#999999",
  backgroundColor,
  onChange,
  inputType,
  inputWrapperWidth,
  inputWrapperHeight,
}) => {
  const divClasses = classnames(styles.InputWrapper, {
    [styles.BorderBottom]: borderStyle === "bottom",
    [styles.BorderAll]: borderStyle === "all",
    [styles.NoBorder]: borderStyle === "none",
  });
  const divStyle: CSSProperties = {
    width: inputWrapperWidth, // TODO remove width
    height: inputWrapperHeight, // TODO change to props
    borderColor: borderColor, // TODO change to props
    backgroundColor: backgroundColor === "gray" ? "#f5f5f5" : "transparent",
  };

  return (
    <div className={divClasses} style={divStyle}>
      <input
        placeholder={placeholder}
        className={styles.Input}
        onChange={onChange}
        type={inputType}
      />
      {icon && <div className={styles.Icon}>{icon}</div>}
    </div>
  );
};

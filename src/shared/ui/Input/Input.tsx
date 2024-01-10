// react
import { ReactNode, FC } from "react";
// libs
import classnames from "classnames";
// styles
import styles from "./Input.module.scss";

interface InputProps {
  icon?: ReactNode;
  placeholder?: string;
  borderStyle: "bottom" | "all" | "none";
  borderColor?: "black" | "gray" | "white";
  backgroundColor?: "none" | "gray";
  onChange: () => void;
  inputType: string;
  inputWrapperHeight?: "xs" | "s" | "m" | "l" | "xl";
}

export const Input: FC<InputProps> = ({
  icon,
  placeholder,
  borderStyle = "all",
  borderColor = "gray",
  backgroundColor = "gray",
  onChange,
  inputType,
  inputWrapperHeight,
}) => {
  const divClasses = classnames(styles.InputWrapper, {
    [styles.borderBottom]: borderStyle === "bottom",
    [styles.borderAll]: borderStyle === "all",
    [styles.noBorder]: borderStyle === "none",
    [styles.xsInputHeight]: inputWrapperHeight === "xs",
    [styles.sInputHightInput]: inputWrapperHeight === "s",
    [styles.mInputHeight]: inputWrapperHeight === "m",
    [styles.lInputHeight]: inputWrapperHeight === "l",
    [styles.xlInputHeight]: inputWrapperHeight === "xl",
    [styles.blackBorderColor]: borderColor === "black",
    [styles.grayBorderColor]: borderColor === "gray",
    [styles.whiteBorderColor]: borderColor === "white",
    [styles.noneBackgroundColor]: backgroundColor === "none",
    [styles.grayBackgroundColor]: backgroundColor === "gray",

  });

  return (
    <div className={divClasses}>
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

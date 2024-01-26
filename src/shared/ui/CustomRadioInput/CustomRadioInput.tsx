// react
import { FC } from "react";
//libs
import classnames from "classnames";
// styles
import styles from "./CustomRadioInput.module.scss";

interface CustomRadioInputProps {
    onChange: (value: string) => void;
    value?: string;
    borderColor?: "black" | "rose";
    checkedCircle?: "black" | "rose";
    checked: boolean;
}

export const CustomRadioInput: FC<CustomRadioInputProps> = ({ onChange, value, borderColor = "black", checkedCircle = "black", checked }) => {

    const handleInputChange = () => {
        if (value !== undefined) {
            onChange(value);
        }
    };

    return (
        <label>
            <input
                type="radio"
                checked={checked}
                value={value}
                onChange={handleInputChange}
                className={classnames(styles.RadioInput, {
                    [styles.blackBorder]: borderColor === "black",
                    [styles.roseBorder]: borderColor === "rose",
                    [styles.blackCircle]: checkedCircle === "black",
                    [styles.roseCircle]: checkedCircle === "rose",
                })}
            />
            <p className={styles.RadioText}>{value}</p>
        </label>
    );
};

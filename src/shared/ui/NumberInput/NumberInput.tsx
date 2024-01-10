// react
import { FC } from "react";
// styles
import styles from "./NumberInput.module.scss";
// import classnames from "classnames";

interface NumberInputProps {
    onChange: () => void;

}
export const NumberInput: FC<NumberInputProps> = ({ onChange }) => {

    return (
        <div className={styles.NumberInputWrapper}>
            <input type="number" onChange={onChange} value="1" min="1" max="99999999" />
        </div>
    )
}


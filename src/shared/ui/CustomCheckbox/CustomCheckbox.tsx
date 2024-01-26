//react
import { useState, FC } from 'react';
//styles
import styles from './CustomCheckbox.module.scss';
// assets
import CheckboxOn from "@/shared/libs/assets/svg/checkbox.svg?react";

interface CustomCheckboxProps {
    onChange?: (checked: boolean) => void;
}

export const CustomCheckbox: FC<CustomCheckboxProps> = ({ onChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        console.log(isChecked)

        if (onChange) {
            onChange(newCheckedState);
        }
    };

    return (
        <div className={`${styles.CustomCheckboxWrapper} ${isChecked ? styles.Checked : ''}`}>
            <input
                name="checkboxInput"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className={styles.HiddenCheckbox}
            />
            <div className={styles.CheckboxVisual} onClick={handleCheckboxChange}>
                {isChecked && < CheckboxOn />}
            </div>
        </div>
    );
};

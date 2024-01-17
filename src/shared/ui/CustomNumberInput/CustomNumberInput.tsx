// react
import { useState, FC } from "react";
// styles
import styles from "./CustomNumberInput.module.scss";
// assets
import ArrowUp from "@/shared/libs/assets/svg/arrowTop.svg?react";
import ArrowDown from "@/shared/libs/assets/svg/arrowBottom.svg?react";

interface CustomNumberInputProps {
  onChange?: (value: number) => void;
}


export const CustomNumberInput: FC<CustomNumberInputProps> = ({ onChange }) => {
  const [value, setValue] = useState(1);

  const customValue = value.toString().padStart(2, '0');//метод додає спереду нуль, щоб довжина  строки була 2

  const increment = () => {
    if (value < 99999) {
      setValue((prevValue) => prevValue + 1);
    }
  };

  const decrement = () => {
    if (value > 1) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = parseInt(e.target.value, 10);
    setValue(isNaN(inputVal) ? 1 : Math.min(Math.max(inputVal, 1), 99999));
    if(onChange) {
      onChange(isNaN(inputVal) ? 1 : Math.min(Math.max(inputVal, 1), 99999));
      console.log('Отримане значення у handleInputChange:', isNaN(inputVal) ? 1 : Math.min(Math.max(inputVal, 1), 99999));
    }
  };

  return (
    <div className={styles.NumberInputWrapper}>
      <button className={styles.ArrowUp} onClick={increment}>
        <ArrowUp />
      </button>
      <input
        name="Number Input"
        type="text"
        value={customValue}
        onChange={handleInputChange}
      />
      <button className={styles.ArrowDown} onClick={decrement}>
        <ArrowDown />
      </button>
    </div>
  )
}


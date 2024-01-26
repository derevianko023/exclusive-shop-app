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

  const customValue = value.toString().padStart(2, "0"); //метод додає спереду нуль, щоб довжина  строки була 2

  //методи  increment і decrement так пропонує написати ChatGPT, я  його не розумію

  const increment = () => {
    if (value < 99999) {
      const newValue = value + 1;
      setValue(newValue);
      const fakeEvent = {
        target: { value: newValue.toString() },
      } as React.ChangeEvent<HTMLInputElement>;
      handleInputChange(fakeEvent);
    }
  };

  const decrement = () => {
    if (value > 1) {
      const newValue = value - 1;
      setValue(newValue);
      const fakeEvent = {
        target: { value: newValue.toString() },
      } as React.ChangeEvent<HTMLInputElement>;
      handleInputChange(fakeEvent);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = parseInt(e.target.value);

    if (typeof inputVal === "number") {
      if (inputVal > 99999) {
        setValue(99999);
      } else {
        setValue(inputVal);
      }
      if (onChange) onChange(inputVal);
    }
    console.log(inputVal)
  };

  return (
    <div className={styles.NumberInputWrapper}>
      <button className={styles.ArrowUp} onClick={increment}>
        <ArrowUp />
      </button>
      <input
        name="numberInput"
        type="text"
        value={customValue}
        onChange={handleInputChange}
      />
      <button className={styles.ArrowDown} onClick={decrement}>
        <ArrowDown />
      </button>
    </div>
  );
};

// react
import { FC, ReactNode } from "react";
// styles
import styles from "./IconButtonWithCounter.module.scss";
import { IconButton } from "../IconButton/IconButton";

interface IconButtonWithCounterProps {
  icon: ReactNode;
  onClick: () => void;
  counterNumber?: number;
}

export const IconButtonWithCounter: FC<IconButtonWithCounterProps> = ({ icon, onClick, counterNumber
}) => {
  return (
    <div className={styles.IconButtonWithCounter}>
      <IconButton icon={icon} onClick={onClick} size="large" />
      {counterNumber && (
        <div className={styles.CounterNumberWrapper}>
          <p className={styles.CounterNumber}>{counterNumber}</p>
        </div>
      )}
    </div>
  );
};

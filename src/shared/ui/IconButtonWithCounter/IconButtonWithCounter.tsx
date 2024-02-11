// react
import { FC, ReactNode } from 'react'
// styles
import styles from './IconButtonWithCounter.module.scss'

interface IconButtonWithCounterProps {
    icon: ReactNode;
    onClick: () => void;
    counterNumber?: number;
}

export const IconButtonWithCounter: FC<IconButtonWithCounterProps> = ({ icon, onClick, counterNumber }) => {
    return (
        <button className={styles.IconButtonWithCounter} onClick={onClick}>
            <div className={styles.Icon}>{icon}</div>
            {counterNumber && (
                <div className={styles.CounterNumberWrapper}>
                    <p className={styles.CounterNumber}>{counterNumber}</p>
                </div>
            )}
        </button>
    )
}

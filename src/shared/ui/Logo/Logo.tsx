// react
import { FC } from 'react'
// styles
import styles from './Logo.module.scss'

interface LogoProps {
    color: "black" | "white"

}

export const Logo: FC<LogoProps> = ({ color }) => {
    const textColor = color === "white" ? "white" : "black";
    return (
        <div className={styles.Logo}>
            <p className={styles.LogoText} style={{ color: textColor }}>Exclusive</p>
        </div>
    )
}

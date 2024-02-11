// react
import { FC } from 'react'
// styles
import styles from './HeaderLine.module.scss';
//features
import { LanguageSwitch } from '@/features/languageSwitch';

interface HeaderLineProps {
    headerText?: string
}

export const HeaderLine: FC<HeaderLineProps> = ({ headerText }) => {
    return (
        <div className={styles.HeaderLine}>
            <div className={styles.InnerContent}>
                <p className={styles.HeaderText}>{headerText}</p>
                <LanguageSwitch onChange={() => console.log('set language')} />
            </div>
        </div>
    )
}

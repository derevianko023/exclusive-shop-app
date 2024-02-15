// react
import {FC} from 'react'
// styles
import styles from './CustomTitle.module.scss'

interface CustomTitleProps {
    title: string;

}

export const CustomTitle:FC<CustomTitleProps> = ({title}) => {
return (
<div className={styles.CustomTitleWrapper}>
    <p className={styles.TitleText}>{title}</p>
</div>
)
}

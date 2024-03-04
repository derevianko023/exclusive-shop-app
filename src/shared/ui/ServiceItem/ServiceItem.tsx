// react
import { FC, ReactNode } from 'react'
// styles
import styles from './ServiceItem.module.scss'

interface ServiceItemProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export const ServiceItem: FC<ServiceItemProps> = ({ icon, title, description }) => {
    return (
        <li className={styles.ServiceItem}>
            <div className={styles.ServiceIcon}>{icon}</div>
            <p className={styles.ServiceTitle}>{title}</p>
            <p className={styles.ServiceDescription}>{description}</p>
        </li>
    )
}

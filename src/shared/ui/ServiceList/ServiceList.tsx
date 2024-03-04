// react
import { FC, ReactNode } from 'react'
// styles
import styles from './ServiceList.module.scss'
//pages/components

//assets
import DeliveryIcon from '@/shared/libs/assets/svg/delivery-icon.svg?react';
import CustomerIcon from '@/shared/libs/assets/svg/customer-icon.svg?react';
import GuaranteeIcon from '@/shared/libs/assets/svg/guarantee-icon.svg?react';
import { ServiceItem } from '../ServiceItem/ServiceItem';

interface ServiceListProps {

}
interface ServicesList {
    icon: ReactNode;
    title: string;
    description: string;
}
const servicesData: ServicesList[] = [
    {
        icon: <DeliveryIcon />,
        title: 'FREE AND FAST DELIVERY',
        description: 'Free delivery for all orders over $140'
    },
    {
        icon: <CustomerIcon />,
        title: '24/7 CUSTOMER SERVICE',
        description: 'Friendly 24/7 customer support'
    },
    {
        icon: <GuaranteeIcon />,
        title: 'MONEY BACK GUARANTEE',
        description: 'We return money within 30 days'
    },
]

export const ServiceList: FC<ServiceListProps> = ({ }) => {
    return (
        <ul className={styles.ServiceList}>
            {servicesData.map((service) =>
                <ServiceItem
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                />
            )}
        </ul>
    )
}

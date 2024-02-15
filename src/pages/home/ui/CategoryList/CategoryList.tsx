// react
import { FC, ReactNode } from 'react'
// styles
import styles from './CategoryList.module.scss'
//pages/components
import { CategotyItem } from '../CategotyItem/CategotyItem';
//assets
import PhoneIcon from '@/pages/home/libs/assets/svg/phone-icon.svg?react';
import DesktopIcon from '@/pages/home/libs/assets/svg/desktop.svg?react';
import WatchIcon from '@/pages/home/libs/assets/svg/watch.svg?react';
import CameraIcon from '@/pages/home/libs/assets/svg/camera.svg?react';
import HeadphoneIcon from '@/pages/home/libs/assets/svg/headphone.svg?react';
import GamingIcon from '@/pages/home/libs/assets/svg/gaming.svg?react';

interface CategoryListProps {
}
interface CategoryList {
    icon: ReactNode;
    text: string;
}
const categoryData: CategoryList[] = [
    { icon: <PhoneIcon />, text: 'Phones' },
    { icon: <DesktopIcon />, text: 'Computers' },
    { icon: <WatchIcon />, text: 'SmartWatch' },
    { icon: <CameraIcon />, text: 'Camera' },
    { icon: <HeadphoneIcon />, text: 'HeadPhones' },
    { icon: <GamingIcon />, text: 'Gaming' },
]

export const CategoryList: FC<CategoryListProps> = ({ }) => {
    const onHandleClick = (categoryText: string) => {
        console.log(`Clicked on category: ${categoryText}`);
    };
    return (
        <ul className={styles.CategoryList}>
            {categoryData.map((category) =>
                <CategotyItem icon={category.icon} text={category.text} onClick={() => onHandleClick(category.text)} />
            )}
        </ul>
    )
}

// react
import { FC, ReactNode } from 'react'
// styles
import styles from './UserProfileMenu.module.scss';
//assets
import UserIcon from '@/enteties/user/libs/assets/svg/user-icon.svg?react';
import PackIcon from '@/enteties/user/libs/assets/svg/pack-icon.svg?react';
import CancelIcon from '@/enteties/user/libs/assets/svg/cancel-icon.svg?react';
import StarIcon from '@/enteties/user/libs/assets/svg/star-icon.svg?react';
import LogoutIcon from '@/enteties/user/libs/assets/svg/logout-icon.svg?react';

interface UserProfileMenuProps {
    onClick: (index: number) => void;
}
interface ProfileData {
    icon: ReactNode;
    text: string;
}

const userProfileData: ProfileData[] = [
    { icon: <UserIcon />, text: 'Manage My Account' },
    { icon: <PackIcon />, text: 'My Order' },
    { icon: <CancelIcon />, text: 'My Cancellations' },
    { icon: <StarIcon />, text: 'My Reviews' },
    { icon: <LogoutIcon />, text: 'Logout' },
];
export const UserProfileMenu: FC<UserProfileMenuProps> = ({ onClick }) => {
    return (
        <ul className={styles.UserProfileMenu}>
            {userProfileData.map((menuItem, index) => (
                <li className={styles.MenuItem}
                    key={index}
                    onClick={() => onClick(index)}>
                    <div className={styles.Icon}>{menuItem.icon}</div>
                    <p className={styles.MenuItemText}>{menuItem.text}</p>
                </li>
            ))}
        </ul>
    )
}

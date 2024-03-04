// react
import { FC, useState, useRef, useEffect } from 'react'
// styles
import styles from './UserProfileButton.module.scss'
//assets
import ProfileIcon from '@/enteties/user/libs/assets/svg/profile-icon.svg?react';
import ProfileIconActive from '@/enteties/user/libs/assets/svg/profile-icon-active.svg?react';
//enteties'
import { UserProfileMenu } from '../UserProfileMenu/UserProfileMenu';


interface UserProfileButtonProps {
    onClick: () => void;
}

export const UserProfileButton: FC<UserProfileButtonProps> = ({ onClick }) => {

    const [isBtnActive, setIsBtnActive] = useState(false);

    const userProfileButtonRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         if (
    //             userProfileButtonRef.current &&
    //             !userProfileButtonRef.current.contains(event.target as Node)
    //         ) {
    //             setIsBtnActive(false);
    //         }
    //     };
    //     document.addEventListener('click', handleClickOutside);

    //     return () => {
    //         document.removeEventListener('click', handleClickOutside);
    //     };
    // }, []);

    const userProfileButtonClick = () => {
        setIsBtnActive(!isBtnActive);
        onClick();
    };
    const handleOnClickMenuItem = (index: number) => {
        console.log('index ', index);
        // setIsBtnActive(false)
    }
    return (
        <div
            className={styles.UserProfileContainer}
            ref={userProfileButtonRef}
        >
            <button
                onClick={userProfileButtonClick}
                className={styles.IconButton}
            >
                {isBtnActive ? <ProfileIconActive /> : <ProfileIcon />}
            </button>
            {isBtnActive && (<UserProfileMenu onClick={handleOnClickMenuItem} />)}
        </div>
    )
}

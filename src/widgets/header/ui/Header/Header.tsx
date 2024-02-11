// react
import { FC, useState } from 'react';
import { NavLink } from "react-router-dom";
// styles
import styles from './Header.module.scss';
//ui
import { HeaderLine } from '../HeaderLine/HeaderLine';
import { Input } from '@/shared/ui/Input';
import { IconButtonWithCounter } from '@/shared/ui/IconButtonWithCounter';

// assets
import SearchIcon from "@/shared/libs/assets/svg/searchIcon.svg?react";
import CartIconBlack from "@/shared/libs/assets/svg/cartIconBlack.svg?react";
import HeartIcon from "@/shared/libs/assets/svg/heartIcon.svg?react";
import { UserProfileButton } from '@/enteties/user/ui/UserProfileButton/UserProfileButton';

interface HeaderProps {

}

export const Header: FC<HeaderProps> = ({ }) => {
    const[isLogin, setIsLogin] = useState(true)

    const handleInputChange = () => {
        console.log('search')
    }
    const handleClick =()=> {
        console.log('click on userProfileButton')
    }
    const handleClick1 =()=> {
        console.log('click on heart')
    }
    const handleClick2 =()=> {
        console.log('click on cart')
    }
    return (
        <div className={styles.Header}>
            <HeaderLine headerText='Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!' />
            <div className={styles.InnerContent}>
                <p className={styles.LogoText}>Exclusive</p>

                <nav className={styles.Navigation}>

                    <NavLink to="/" className={({ isActive }) =>
                        [styles.item, isActive ? styles.activeItem : ""].join(" ")
                    }>
                        Home
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) =>
                        [styles.item, isActive ? styles.activeItem : ""].join(" ")
                    }>
                        Contact
                    </NavLink>

                    <NavLink to="/about" className={({ isActive }) =>
                        [styles.item, isActive ? styles.activeItem : ""].join(" ")
                    }>
                        About
                    </NavLink>

                    <NavLink to="/signup" className={({ isActive }) =>
                        [styles.item, isActive ? styles.activeItem : ""].join(" ")
                    }>
                        Sign Up
                    </NavLink>

                </nav>

                <div className={styles.RightContent}>
                    <div className={styles.SearchInputWrapper}>
                    <Input
                        icon={<SearchIcon />}
                        placeholder="What are you looking for?"
                        borderStyle="none"
                        onChange={handleInputChange}
                        inputType="text"
                        inputWrapperHeight="s"
                    />
                    </div>
                    <IconButtonWithCounter icon={<HeartIcon />} onClick={handleClick1} counterNumber={2} />
                    <IconButtonWithCounter icon={<CartIconBlack />} onClick={handleClick2} counterNumber={4} />
                    {isLogin&&(
                        <UserProfileButton onClick={handleClick} />
                    )}
                </div>
            </div>

        </div>
    )
}

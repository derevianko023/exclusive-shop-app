// react
import { FC, useState } from "react";
// styles
import styles from "./Header.module.scss";
//ui
import { HeaderLine } from "../HeaderLine/HeaderLine";
import { Input } from "@/shared/ui/Input";
import { IconButtonWithCounter } from "@/shared/ui/IconButtonWithCounter";

// assets
import SearchIcon from "@/shared/libs/assets/svg/searchIcon.svg?react";
import CartIconBlack from "@/shared/libs/assets/svg/cartIconBlack.svg?react";
import HeartIcon from "@/shared/libs/assets/svg/heartIcon.svg?react";
import { UserProfileButton } from "@/enteties/user/ui/UserProfileButton/UserProfileButton";
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";
import { Logo } from "@/shared/ui/Logo/Logo";

interface HeaderProps { }

export const Header: FC<HeaderProps> = ({ }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleInputChange = () => {
    console.log("search");
  };
  const handleClick = () => {
    console.log("click on userProfileButton");
  };
  const handleClick1 = () => {
    console.log("click on heart");
  };
  const handleClick2 = () => {
    console.log("click on cart");
  };
  return (
    <div className={styles.Header}>
      <HeaderLine headerText="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!" />
      <div className={styles.InnerContent}>
        
        <Logo color="black" />

        <HeaderNavigation />

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
          <IconButtonWithCounter
            icon={<HeartIcon />}
            onClick={handleClick1}
            counterNumber={2}
          />
          <IconButtonWithCounter
            icon={<CartIconBlack />}
            onClick={handleClick2}
            counterNumber={4}
          />
          {isLogin && <UserProfileButton onClick={handleClick} />}
        </div>

      </div>
    </div>
  );
};

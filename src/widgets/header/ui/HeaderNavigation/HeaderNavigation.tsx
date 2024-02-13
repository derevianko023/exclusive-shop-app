// react
import { NavLink as ReactNavLink } from "react-router-dom";
import { FC } from "react";
// items
import { headerNavItems } from "./items";
// styles
import styles from "./HeaderNavigation.module.scss";

interface HeaderNavigationProps {}

export const HeaderNavigation: FC<HeaderNavigationProps> = ({}) => {
  return (
    <nav className={styles.Navigation}>
      {headerNavItems.map((item) => (
        <ReactNavLink
          key={item.text}
          to={item.to}
          className={({ isActive }) =>
            [styles.item, isActive ? styles.activeItem : ""].join(" ")
          }
        >
          {item.text}
        </ReactNavLink>
      ))}
    </nav>
  );
};

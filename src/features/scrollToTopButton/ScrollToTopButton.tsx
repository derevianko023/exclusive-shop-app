// react
import { FC, useState, useEffect } from 'react'
// styles
import styles from './ScrollToTopButton.module.scss'
//assets
import ArrowTopButton from './assets/svg/arrow-top.svg?react';


interface ScrollToTopButtonProps {

}

export const ScrollToTopButton: FC<ScrollToTopButtonProps> = ({ }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >  window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}
            onClick={scrollToTop}
        >
            <ArrowTopButton />
        </div>
    );


}

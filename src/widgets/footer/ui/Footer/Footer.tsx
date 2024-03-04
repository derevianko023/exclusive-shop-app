// react
import { FC } from 'react'
// styles
import styles from './Footer.module.scss'
//shared
import { Logo } from '@/shared/ui/Logo'
import { Input } from '@/shared/ui/Input';
//assets
import SendIcon from "@/shared/libs/assets/svg/sendIcon.svg?react";

interface FooterProps { }

interface FooterList {
    title: string;
    texts: string[];
}

const footerData1: FooterList[] = [
    {
        title: "Support",
        texts: [
            '111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.',
            'exclusive@gmail.com',
            '+88015-88888-9999'],
    }
];

const footerData2: FooterList[] = [
    {
        title: "Account",
        texts: [
            'My Account',
            'Login / Register',
            'Cart',
            'Wishlist',
            'Shop'],
    }
]
const footerData3: FooterList[] = [
    {
        title: "Quick Link",
        texts: [
            'Privacy Policy',
            'Terms Of Use',
            'FAQ',
            'Contact',]
    }
]

export const Footer: FC<FooterProps> = ({ }) => {
    const handleInputChange = () => {
        console.log('Footer Input');
    };

    return (
        <div className={styles.Footer}>
            <div className={styles.InnerFooterWrapper}>
                <div className={styles.FooterColumn}>
                    <Logo color="white" />
                    <p className={styles.FooterTitle}>Subscribe</p>
                    <p className={styles.FooterInfo}>Get 10% off your first order</p>
                    <Input
                        icon={<SendIcon />}
                        placeholder="Enter your email"
                        borderStyle="all"
                        borderColor="white"
                        backgroundColor="none"
                        onChange={handleInputChange}
                        inputType="email"
                        inputWrapperHeight="m"
                    />
                </div>
                {footerData1.map((data, index) => (
                    <div className={styles.FooterColumn} key={index}>
                        <p className={styles.FooterTitle}>{data.title}</p>
                        <ul>
                            {data.texts.map((text, idx) => (
                                <li className={styles.FooterItem} key={idx}>{text}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                {footerData2.map((data, index) => (
                    <div className={styles.FooterColumn} key={index}>
                        <p className={styles.FooterTitle}>{data.title}</p>
                        <ul>
                            {data.texts.map((text, idx) => (
                                <li className={styles.FooterItem} key={idx}>{text}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                {footerData3.map((data, index) => (
                    <div className={styles.FooterColumn} key={index}>
                        <p className={styles.FooterTitle}>{data.title}</p>
                        <ul>
                            {data.texts.map((text, idx) => (
                                <li className={styles.FooterItem} key={idx}>{text}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

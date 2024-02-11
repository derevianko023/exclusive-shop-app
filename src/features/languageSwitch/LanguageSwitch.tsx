// react
import { FC, useState } from 'react';
// styles
import styles from './LanguageSwitch.module.scss'

interface LanguageSwitchProps {
    onChange: (language: string) => void;

}

export const LanguageSwitch: FC<LanguageSwitchProps> = ({ onChange }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLanguage = event.target.value;
        setSelectedLanguage(newLanguage);
        onChange(newLanguage);
    };
    console.log(selectedLanguage)


    return (
        <div className={styles.SelectWrapper}>
            <select id="languageSelect" value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="English">English</option>
                <option value="Українська">Українська</option>
            </select>
        </div>
    );
}

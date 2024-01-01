import React from "react";
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation()

    return(
        <footer>
            <div className="container">
                <p>
                    {t('copyright')}
                </p>
            </div>
        </footer>
    );
}

export default Footer;

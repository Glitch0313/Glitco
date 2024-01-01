import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const { i18n, t } = useTranslation()

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return(
        <header>
            <div className="container">
                <div className="main-head">
                    <div className="logo" data-aos="flip-left" data-aos-duration="1000">
                        <h4>{t('logo')}</h4>
                    </div>
                    <div className="menu">
                        <ul>
                            {
                                !isHome ? (
                                    <li>
                                        <Link to="/">{t("home_page")}</Link>
                                    </li>
                                ) : (
                                    ''
                                )
                            }
                            <li>
                                <Link to="/admin">{t("about_page")}</Link>
                            </li>
                            <li data-aos="flip-down" data-aos-duration="1000">
                                <select defaultValue={i18n.language} className="form-select" onChange={handleLanguageChange}>
                                    <option value="ar">AR</option>
                                    <option value="en">EN</option>
                                </select>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

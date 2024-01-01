import React from 'react'
import { useTranslation } from 'react-i18next';
import Services from '../components/sections/Services'
import Delever from '../components/sections/Delever'

const Home = ({data}) => {
    const { t } = useTranslation();

    return (
        <>
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box-text">
                                <h4>{t('title')}</h4>
                                <p data-aos="zoom-in-up" data-aos-duration="1500">
                                    {t('content')}
                                </p>
                                <div className="btno">
                                    <a href='https://glitchco.xyz' target="_blank" rel="noopener noreferrer">{t('btn_contact')}</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box-img" data-aos="zoom-in-down" data-aos-duration="1500">
                                <img src={data.img} alt="About" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Services data={data} />
            <Delever data={data} />
        </>
        
    );
}

export default Home;

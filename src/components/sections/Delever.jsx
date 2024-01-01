import React from 'react'
import { useTranslation } from 'react-i18next';

const Delever = ({data}) => {
    const { t } = useTranslation();

    return (
        <div className="Delever">
            <div className="container">
                <div className="serv-head">
                    <h2 data-aos="fade-down" data-aos-duration="1000">{t('delever.head')}</h2>
                </div>

                <div className="row">
                    
                    <div className="col-md-6" data-aos="flip-right" data-aos-duration="1500">
                        <div className="del-box">
                            <h3>{t('delBox1.title')}</h3>
                            <img src={data.img2} alt="mg4" />
                        </div>
                    </div>

                    <div className="col-md-6" data-aos="flip-left" data-aos-duration="1500">
                        <div className="del-box">
                            <h3>{t('delBox2.title')}</h3>
                            <img src={data.img4} alt="mg5" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Delever;
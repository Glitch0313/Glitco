import React from 'react'
import { useTranslation } from 'react-i18next';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Services = ({data}) => {
    const { t } = useTranslation();

    // Services Data
    const Data = [
        {id: 0, title: t('service1.title'), content: t('service1.content')},
        {id: 1, title: t('service2.title'), content: t('service2.content')},
        {id: 2, title: t('service3.title'), content: t('service3.content')}
    ]

    return (
        <div className="Services">
            <div className="container">
                <div className="serv-head">
                    <h2>{t('serv_title')}</h2>
                </div>
       
                <div className="row">

                    {
                        Data.map(itm => (
                            <div className="col-md-4" data-aos="flip-left" data-aos-duration="1000"
                            data-aos-easing="ease-in-out" key={itm.id}>
                                <div className="serv-box">
                                    <div className="ser-photo">
                                        <img src={data.img} alt="Serv1" />
                                    </div>
                                    <div className="ser-txt">
                                        <h3>{itm.title}</h3>
                                        <p>{itm.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default Services;
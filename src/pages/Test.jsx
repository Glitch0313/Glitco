import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const Test = () => {
    const { t } = useTranslation();
    const baseUrl = "http://localhost:3500/settings";
    const [usr, setUsr] = useState('')
    const [posts, setPosts] = useState(null)

    const handelSave = async () => {
        // localStorage.setItem('bre', JSON.stringify(posts))
        // console.log(localStorage.getItem('bre'))

        try {
            const res = await axios.get(baseUrl)
            setPosts(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
      handelSave()  
    },[])

    return (
        <div className='Test py-4'>
            <div className="container">

                <div className="posts">
                    <div className="row">
                        {
                            JSON.stringify(posts)
                        }
                    </div>
                </div>

                <h4 className='mb-2'>{usr}</h4>
                <input type="text" className='form-control mb-4' value={usr} onChange={(e) => setUsr(e.target.value)} placeholder={t('test.title')} />
                <button className='btn btn-dark' onClick={handelSave}>{t('test.btn')}</button>

            </div>
        </div>
    )
}

export default Test;

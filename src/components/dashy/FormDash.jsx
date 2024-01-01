import React, { useState } from 'react'
import Swal from 'sweetalert2'

const FormDash = ({parado}) => {
    const [tit, setTit] = useState('')
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const image = e.target.files[0];
        setSelectedImage(image);
    };

    const [myRat, setMyRat] = useState(() => {
        const storedData = localStorage.getItem('myArr');
        return storedData ? JSON.parse(storedData) : [];
    })

    const handelGoo = () => {
        if (tit.trim() !== '') {
            const updatedArray = [...myRat, tit];
            setMyRat(updatedArray);
            localStorage.setItem('myArr', JSON.stringify(updatedArray));
            setTit('');
        }
    }

    const handelDele = () => {
        Swal.fire({
            title: 'Are you sure Delete List',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
              // Refresh the page
              localStorage.removeItem('myArr');
              window.location.reload();
            }
        });
    }

    const handSpo = (inx) => {
        const updatedItems = myRat.filter((_, i) => i !== inx);
        localStorage.setItem('myArr', JSON.stringify(updatedItems));
        setMyRat(updatedItems);
    }
 
    return (
        <div className='Formy'>
            <div className="container">
                <h4 style={{ color: parado }} className='text-center mb-3'>تحدث معنا</h4>

                <div className="formy">
                    <input type="file" id="image" className='form-control mb-2' accept="image/*" onChange={handleImageChange} />
                    <input type="text" value={tit} onChange={e => setTit(e.target.value)} className='form-control' placeholder='Enter Val' />

                    <button className='btn btn-dark mt-3' onClick={handelGoo}>LockT</button>
                    <button className='btn btn-danger mt-3 ms-3' onClick={handelDele}>Delete List</button>
                </div>

                {selectedImage && (
                    <div>
                    <h2>Preview:</h2>
                    <img src={URL.createObjectURL(selectedImage)} alt="Preview" style={{ maxWidth: '100%' }} />
                    </div>
                )}

                <div className="listy">
                    <ul>
                        {
                            myRat.map((itm, inx) => (
                                <li style={{ color: parado }} key={inx}>
                                    {itm} 
                                    <span onClick={() => handSpo(inx)}>X</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FormDash;

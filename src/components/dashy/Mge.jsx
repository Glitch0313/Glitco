import React, { useState } from 'react';
import axios from 'axios';

function Mge() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('http://localhost:3000/api', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

//   const handleMSG = async () => {
//     try {
//         const response = await axios.get('http://localhost:3000/api');
//         console.log(response.data);
//     } catch (error) {
//         console.error('Error uploading file:', error);
//     }
//   }

  return (
    <div className='Mge container my-4'>
      <input type="file" className='form-control mb-2' onChange={handleFileChange} />
      <button className='btn btn-dark' onClick={handleFileUpload}>Upload</button>
      {/* <button className='btn btn-dark me-3' onClick={handleMSG}>Get MSG</button> */}
    </div>
  );
}

export default Mge;

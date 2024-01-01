import React, {useState} from 'react'
import FormDash from '../components/dashy/FormDash';
import Mge from '../components/dashy/Mge';
// import axios from 'axios'
// import Swal from 'sweetalert2'

const Dashboard = ({ setIsAuthenticated, tranAR }) => {
  const colors = ['red', 'green', 'blue', 'orange', 'purple', 'grey']; 
  const [currentColor, setCurrentColor] = useState(localStorage.getItem('colorHed'));

  localStorage.setItem('colorHed', currentColor);

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  const colorElements = colors.map((color, index) => (
    <span
      key={index}
      style={{
        backgroundColor: color,
      }}
      onClick={() => handleColorChange(color)}
    ></span>
  ));

  const handleHoop = () => {
    localStorage.setItem('is_authenticated', false);
    setIsAuthenticated(false);
  }

  return (
    <div className='Dashboard'>

      <div className="header-con">
        <div className="container">

          <div className="dash-head">
            <h3 style={{ color: currentColor }}>لوحة التحكم</h3>/
            <button className='btn btn-danger' onClick={handleHoop}>Logout</button>
          </div>
              
        </div>
      </div>

      <div className="dash-main">
        <div className="container">
          <div className="colort">
            {
              colorElements
            }
          </div>
         
        </div>
      </div>
      
      <FormDash parado={currentColor} />
      <Mge />

    </div>
  )
}

export default Dashboard;
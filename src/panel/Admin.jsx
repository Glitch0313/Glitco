import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Admin = ({ setIsAuthenticated }) => {
    const adminEmail = 'admin@info.com';
    const adminPassword = 'ss123123';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = e => {
        e.preventDefault();
    
        if (email === adminEmail && password === adminPassword) {
          Swal.fire({
            timer: 1000,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              localStorage.setItem('is_authenticated', true);
              setIsAuthenticated(true);
    
              Swal.fire({
                icon: 'success',
                title: 'Successfully logged in!',
                showConfirmButton: false,
                timer: 1000,
              });
            },
          });
        } else {
          Swal.fire({
            timer: 1000,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'جرب تاني ياحموكشة',
                showConfirmButton: true,
              });
            },
          });
        }
      };

  return (
    <div className='Admin'>
        <div className="admin-head">
            <h3>Glitch Hook</h3>
        </div>
        <div className="container mt-5">
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Email"
                className='form-control'
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                id="password"
                type="password"
                name="password"
                className='form-control'
                placeholder="*********"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <input style={{ marginTop: '12px' }} className="btn btn-success" type="submit" value="Login" />
            </form>
        </div>
    </div>
  )
}

export default Admin;
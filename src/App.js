import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Home from './pages/Home';
import Test from './pages/Test';
import Admin from './panel/Admin';
import Dashboard from './panel';
import { data_home } from './data/data';
import arTranslations from './lang/ar.json';

function App() {
  const { i18n } = useTranslation()
  const location = useLocation();
  // const navigate = useNavigate();

  const isAdminRoute = location.pathname === '/admin';
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);

  return (
    <div className={`App ${i18n.language === 'ar'? '' : 'rtl'}`}>

        {!isAdminRoute ? <Header /> : ''}
        <Routes>
          <Route exact path="/" element={<Home data={data_home} />} />
          <Route exact path="/test" element={<Test />} />
          <Route path="/admin" element={isAuthenticated ? <Dashboard setIsAuthenticated={setIsAuthenticated} tranAR={arTranslations} /> : <Admin setIsAuthenticated={setIsAuthenticated} />} /> 
        </Routes>
        {!isAdminRoute ? <Footer /> : ''}

    </div>
  );
}

export default App;

import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const Homelayout = () => {
  return (
      <div className="min-h-screen   text-base-content" data-theme="night">
       <Navbar></Navbar>
       <div className='w-11/12 mx-auto'>
             <Outlet></Outlet>
       </div>
       <Footer></Footer>
     
    </div>
  );
};

export default Homelayout;
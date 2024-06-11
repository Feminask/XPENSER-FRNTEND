
    import React, { useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import './WelcomePage.css'; 
import Aos from 'aos';
    import 'aos/dist/aos.css'
    
    const WelcomePage = () => {
      useEffect(()=>{
Aos.init({duration:3000});
      },[])
      return (
        <div className="welcome-page-container">
          <div className="welcome-page">
            <header className="header">
              <h1               data-aos="fade-right"
 style={{color:'black'}}>Welcome to <span  className="xpenser-text">Xpenser</span></h1>
              <p className="description">Your go-to app for hassle-free expense tracking</p>
            </header>
            <main className="main-content">
              <img src="https://i.postimg.cc/cJjhkLht/1694352948726-unscreen-1.gif" alt="Expense Tracking Illustration" className="illustration"
              height='300px'
              width='300px'
              data-aos="fade-left"
               />
            </main>
            <Link to="/home" style={{textDecoration:'none'}} className="add-button">Get Started</Link>

          </div>
        </div>
      );
    };
    
    export default WelcomePage;


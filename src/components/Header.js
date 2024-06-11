import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IoWallet } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
       <Navbar className=" navbar">
        <Container>
          <Navbar.Brand href="#home">
<Link to={'/'} style={{textDecoration:'none',color:'black'}}>
              Xpenser 
  <span className='ms-2'>
                <i class="fa-solid fa-wallet"></i> .
    
  </span>   
  
</Link>       </Navbar.Brand>




        </Container>
      </Navbar>


    </div>
  )
}

export default Header

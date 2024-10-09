import React from 'react';
import "./header.css";
import CTA from './CTA';
import Future from '../../assets/Future.jpg';
import HeaderSocials from './headersocials';

const Header = () =>{

      return(    
      <header>
            <div className="container header_container">
                  <h5>Hello! i'am</h5>
                  <h1 className='typing-header h1-header'>Future Mulenga</h1>
                  <h5 className="text-light">Fullstack Developer</h5> 
                   <CTA/>
                   <HeaderSocials/>
                   
                   <div className='me'>
                         <img src={Future} alt="profile"/>
                  </div>

                   <a href="#contact" className='scroll_down'>Scroll Down</a>
             </div>
      </header>
      );
}

export default Header;
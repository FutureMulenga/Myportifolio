import React from 'react'
import "./header.css"
import CTA from './CTA';
import  ME from '../../assets/photo.png'
import HeaderSocials from './headersocials';

const Header = () =>{

      return(    
      <header>
            <div className="container header_container">
                  <h5>Hello! i'am</h5>
                  <h1>Future Mulenga</h1>
                  <h5 className="text-light">Fullstack Developer</h5> 
                   <CTA/>
                   <HeaderSocials/>
                   
                   <div className='me'>
                         <img src={ME} alt="logo"/>
                  </div>

                   <a href="#contact" className='scroll_down'>Scroll Down</a>
             </div>
      </header>
      );
}

export default Header;
import React from 'react'
import "./footer.css"
import {BsFacebook} from 'react-icons/bs'
import {BiLogoTwitter} from 'react-icons/bi'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'

const foot = () =>{


       return(
        <footer>

          <a href="/" className='footer_logo'>OFFICIALS</a>

          <ul className='nav_links'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portifolio">Portifolio</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
          <div className="footer_socials">
            <a href="https://facebook.com" target='blank'><BsFacebook/></a>
            <a href="https://twitter.com" target='blank'><BiLogoTwitter/></a>
            <a href="https://instagram.com" target='blank'><FaInstagramSquare/></a>
            <a href="https://telegram.com" target='blank'><FaTelegram/></a>
          </div>

          <div className="footer_copyright">
            <small>&copyright; FutureMulenga, all right reserved.</small>
          </div>
        </footer>  
       );
}

export default foot;
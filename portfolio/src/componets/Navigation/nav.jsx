import React from 'react'
import "./nav.css"
import {AiFillHome} from 'react-icons/ai'
import {BiUserPlus} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {LiaServicestack} from 'react-icons/lia'
import {LuContact2} from 'react-icons/lu'
import { useState } from 'react'

const Navigation = () =>{

    const [activeNav, setActiveNav] = useState("#");
       return(
            
               <div className='nav'>
                   <a href="#" onClick={() => setActiveNav('#')} className={activeNav ==='#' ?'active':''}><AiFillHome/></a>
                   <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ?'active':''} ><BiUserPlus/></a>
                   <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ?'active':''}><BiBook/></a>
                   <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav ==='#services' ?'active':''}><LiaServicestack/></a>
                   <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ?'active':''}><LuContact2/></a>
               </div>
       );
}

export default Navigation;
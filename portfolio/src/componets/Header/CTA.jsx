import React from 'react'
import CV from '../Header/CV.pdf'


const CTA = () =>{
       return(
         <div className='cta'>
            <a href={CV} download class="btn" >Download CV</a>
            <a href="#contact" class="btn btn-primary" >Let's Talk</a>
         </div>  
       );
}

export default CTA;
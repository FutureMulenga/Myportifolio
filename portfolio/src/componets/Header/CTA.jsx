import React from 'react'
import CV from '../Header/CV.pdf'


const CTA = () =>{
       return(
         <div className='cta'>
            <a href={CV} download class="btn btn-primary" >Download Transcript</a>
            <a href={CV} download class="btn" >Download CV</a>
         </div>  
       );
}

export default CTA;
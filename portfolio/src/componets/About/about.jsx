import React from 'react'
import "./about.css"
import ME from '../../assets/photo.png'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'



const about = () =>{
       return(
             <section id='about'>
              <h5>Everything you need</h5>
              <h5>to know</h5>
              <h2>About Me</h2>

              <div className="container about_container">
                  <div className="about_me">
                        <div className="about_me-image">
                              <img src={ME} alt="about_me" />
                        </div>
                  </div>

            <div className="about_content">
                  <div className="about_cards">
                        <article className="about_card">
                              <FaAward className='icon'/>
                              <h5>Experience:</h5>
                              <small>Still a student</small>
                        </article>

                        <article className="about_card">
                              <FaUsers className='icon'/>
                              <h5>Clients:</h5>
                              <small>2+clients worked with</small>
                        </article>

                        <article className="about_card">
                              <FaFolderOpen className='icon'/>
                              <h5>Projects:</h5>
                              <small>2+completed projects</small>
                        </article>
                  </div>

                   <p>
                        My name is Future Mulenga i'am a Fullstack developer, studying Bachelors of degree in 
                        computer science at Copperbelt University. I have experience in several programing
                        languages such as c++,java, python, php, c# and javascript, though am proficient in java and javascript.
                        So far i have worked with some notable frameworks such as FLASK, FASTAPI, REACT, JAVAFx,
                        BOOSTRAP, NETBEANS as well as python libraries such as numpy, pandas, and ktinter modules
                        to train machine learning models. I aim to continue growing in my professional career by 
                        exposing myself to new trends of technologies.
                  </p>

                  <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
              </div>
             </section> 
       );
}
export default about;
import React from 'react'
import "./about.css"
import ME from '../../assets/photo.png'
import G12 from './Grade 12.pdf'
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
                        My name is Future Mulenga. I am a Fullstack developer, studying for a Bachelor's degree in
                        computer science at Copperbelt University. I have experience in several programming
                        languages such as C++, Java, Python, PHP, C#, and JavaScript. As a developer, I am always
                        excited to jump on different projects as it helps me learn different technologies.
                        I also own a small business for printing and accessories, where I spend my spare time if
                        I am not programming.
                  </p>

                  <a href={G12} target='_blank' rel='noreferrer' className='btn'>View Grade 12 certificate</a>
                    
            </div>
            </div>
       </section> 
    );
}
export default about;
import React from 'react'
import "./experience.css"
import {RiCheckboxCircleFill} from 'react-icons/ri'

const experience = () =>{


       return(
          <section id='experience'>
              <h5>What Skills I Have?</h5>
              <h2>My Experience</h2>

            <div className="container experience_container">
                <div className='experince_frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                             <RiCheckboxCircleFill className='experience_details-icons'/>
                             <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>   
                        </article>

                        <article className='experience_details'>
                             <RiCheckboxCircleFill className='experience_details-icons'/>
                             <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                                </div>
                        </article>

                        <article className='experience_details'>
                             <RiCheckboxCircleFill className='experience_details-icons'/>
                             <div>
                                <h4>JAVASCRIPT</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>   
                        </article>

                        <article className='experience_details'>
                             <RiCheckboxCircleFill className='experience_details-icons'/>
                             <div>
                                <h4>REACT</h4>
                                <small className='text-light'>Novice</small>
                            </div>   
                        </article>

                         <article className='experience_details'>
                             <RiCheckboxCircleFill className='experience_details-icons'/>
                             <div>
                                <h4>BOOTSTRAP</h4>
                                <small className='text-light'>Intermediate</small>
                                </div>
                        </article>

                        <article className='experience_details'>
                             <RiCheckboxCircleFill className='experience_details-icons'/>
                             <div>
                                <h4>FLASK</h4>
                                <small className='text-light'>Novice</small>
                            </div>  
                        </article>
                    </div>
                </div>

                <div className='experience_backend'>
                    <h3>Backend Development</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                             <RiCheckboxCircleFill className='experience_details-icons'/>
                             <div> 
                                <h4>JAVA</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>      
                        </article>

                        <article className='experience_details'>
                             <RiCheckboxCircleFill className='experience_details-icons'/>
                             <div>
                                <h4>C++</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>    
                        </article>

                        <article className='experience_details'>
                             <RiCheckboxCircleFill className='experience_details-icons'/>
                             <div>
                                <h4>JAVASCRIPT</h4>
                                <small className='text-light'>Intermediate</small>
                            </div> 
                        </article>

                        <article className='experience_details'>
                            <RiCheckboxCircleFill className='experience_details-icons'/>
                            <div>
                                <h4>PYTHON</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>  
                        </article>

                        <article className='experience_details'>
                            <RiCheckboxCircleFill className='experience_details-icons'/>
                            <div>
                                <h4>C#</h4>
                                <small className='text-light'>Novice</small>    
                            </div>
                        </article>
                        
                        <article className='experience_details'>
                            <RiCheckboxCircleFill className='experience_details-icons'/>
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Novice</small>
                            </div> 
                        </article>
                    </div>
                </div>
            </div>
          </section>
       );
}

export default experience;
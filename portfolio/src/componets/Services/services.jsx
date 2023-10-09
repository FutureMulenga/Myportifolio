import React from 'react'
import "./services.css"
import {BiSolidCheckboxChecked} from "react-icons/bi"

const services = () =>{
       return(
         <section id='services'>
            <h5>What I offer</h5>
            <h2>services</h2>

            <div className='container services_container'>
              
              {/*first list*/}
                <article className='services'>
                  <div className='services_head'>
                    <h3>UI/UX Design</h3>
                  </div>

                  <ul className='services_list'>
                      <li>
                      <BiSolidCheckboxChecked className='services_list-icon'/>
                      <p>User interfaces</p>
                      </li>

                      <li>
                      <BiSolidCheckboxChecked className='services_list-icon'/>
                      <p>Certificates</p>
                      </li>

                      <li>
                      <BiSolidCheckboxChecked className='services_list-icon'/>
                      <p>brochures</p>
                      </li>

                      <li>
                      <BiSolidCheckboxChecked className='services_list-icon'/>
                      <p>Resumes</p>
                      </li>

                      <li>
                      <BiSolidCheckboxChecked className='services_list-icon'/>
                      <p>Business Posters</p>
                      </li>

                      <li>
                      <BiSolidCheckboxChecked className='services_list-icon'/>
                      <p>Wedding Cards</p>
                      </li>
                  </ul>
                </article>

                {/*second list*/}
                <article className='services'>
                  <div className='services_head'>
                    <h3>Web Development</h3>
                  </div>

                  <ul className='services_list'>
                      <li>
                      <BiSolidCheckboxChecked className='services_list-icon'/>
                      <p>e-commence</p>
                      </li>

                      <li>
                      <BiSolidCheckboxChecked className='services_list-icon'/>
                      <p>Portifolio</p>
                      </li>

                      <li>
                      <BiSolidCheckboxChecked className='services_list-icon'/>
                      <p>Business website</p>
                      </li>
                  </ul>
                </article>

                {/*third lis*/}
                <article className='services'>
                  <div className='services_head'>
                    <h3>App Development</h3>
                  </div>

                  <ul className='services_list'>
                      <li>
                      <BiSolidCheckboxChecked className='services_list-icon'/>
                      <p>android apps</p>
                      </li>

                      <li>
                      <BiSolidCheckboxChecked className='services_list-icon'/>
                      <p>Web Apps</p>
                      </li>

                      <li>
                      <BiSolidCheckboxChecked className='services_list-icon'/>
                      <p>Cross-Platform Apps</p>
                      </li>

                      <li>
                      <BiSolidCheckboxChecked className='services_list-icon'/>
                      <p>Systems</p>
                      </li>
                  </ul>
                </article>
            </div>
         </section>
       );
}
export default services;
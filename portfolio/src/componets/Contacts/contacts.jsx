import React from 'react'
import "./contact.css"
import {AiOutlineMail}  from "react-icons/ai"
import {FaFacebookSquare} from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"
import {useRef} from 'react'
import emailjs from "emailjs-com"

const Contact = () =>{
       const form = useRef();
       const sendEmail = (e) => {
              e.preventDefault();
          
              emailjs.sendForm('service_772igzq', 'template_r3a68lg', form.current, 'atEpOB23x7swrq8Xt')

                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

                e.target.reset();
            };


       return(
              <section id='contact'>
                 <h5>Get in touch</h5>
                 <h2>Contact me</h2>

                 <div className="container contact_container">
                     <div className="contact_options">
                         <article className="contact_option">
                            <AiOutlineMail className='contact_icon'/>
                            <h4>E-mail</h4>
                            <h5>mulengafuture14@gmail.com</h5>
                            <a href="mulengafuture14@gmail.com" target='blank'>Send a message</a>
                         </article>

                         <article className="contact_option">
                            <FaFacebookSquare className='contact_icon'/>
                            <h4>Facebook</h4>
                            <h5>Mulenga Future</h5>
                            <a href="https://web.facebook.com/Futuremulengae" target='blank'>Send a message</a>
                         </article>

                         <article className="contact_option">
                            <BsWhatsapp className='contact_icon'/>
                            <h4>WhatsApp</h4>
                            <h5>+260979200391</h5>
                            <a href="https://api.whatsap.com/send?phone=0979200391" target='blank'>Send a message</a>
                         </article>
                     </div>

                     <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name='name' placeholder='Your full name' required/>
                            <input type="text" name='email' placeholder='Your email' required/>
                            <textarea name="message" placeholder='Your message' rows="7" required></textarea>
                            <button type='submit' className='btn btn-primary'>Send Message</button>
                     </form>
                 </div>
              </section>
       );
}

export default Contact;

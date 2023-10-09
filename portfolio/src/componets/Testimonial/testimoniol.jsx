import React from 'react'
import "./testimonial.css"
import image1 from "../../assets/profile.jpg"
import image2 from "../../assets/photo.png"
import image3 from "../../assets/Logo.png"
import image4 from "../../assets/photo.png"
import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [

     {
          name: 'Future Mulenga',
          image: image1,
          review: 'the project was good, just few imprrovement that is needed to be made, then it surely going to be oaky!'
     },

     {
          name: 'Benjamin Ngulube',
          image: image2,
          review: 'the project was good, just few imprrovement that is needed to be made, then it surely going to be oaky!'
     },

     {
          name: 'Robert Banda',
          image: image3,
          review: 'the project was good, just few imprrovement that is needed to be made, then it surely going to be oaky!'
     },

     {
          name: 'Lotty Mapulanga',
          image: image4,
          review: 'the project was good, just few imprrovement that is needed to be made, then it surely going to be oaky!'
     }
]

///the start of the function 
const Testimonial = () =>{
    return(
      <section id='testimonial'>
       <h5>Review from clients</h5>
       <h2>Testimonial</h2>

       <Swiper className="container testimonial_container"
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
     {
           data.map(({id, name, image, review}) =>{

               return(
                    <SwiperSlide key={id} className='testimonial'>
                    <div className='client_image'>
                         <img src={image} alt={name} />               
                    </div>
                    <h5 className='client_name'>{name}</h5>
                    <small className='client_review'>
                    {review}
                    </small>
                    </SwiperSlide>
               )
           })
          }
         </Swiper>  
         </section>   
    )
} 

export default Testimonial;
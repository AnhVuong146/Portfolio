import React from 'react'
import './qa.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    // avatar: AVTR1,
    question: 'Q: Why do you like coding?',
    answer: "I believe that technology is our future and that it could change and improve people's lives. Coding allows me to bring ideas to life and see the impact that it can have. I enjoy personal coding projects like building a website of any kind. Why I like coding so much is ecause I believe that it can change the world for the better. "
  },

  {
    // avatar: AVTR2,
    question: 'Q: Aside from being a Software Engineer, what else do you want to do?',
    answer: 'My goal was to always become a Software Engineer after I graduated from college because I enjoy working in group projects and working as a team in general. But I also have a dream of owning a gym one day like a 24 hours fitness or City Sports Club, and this is because my main hobby is exercising, working out, and weight lifting. I enjoy training other people as well and try to motivate them to get them in the best shape possible as I have experience with training my siblings, friends, and classmates. So my plan B is to become a gym owner or a fitness trainer.'
  },

  {
    // avatar: AVTR3,
    question: 'Q: What are your hobbies?',
    answer: 'Coding, Weightlifting, Video games, sports, piano, and guitar'
  },

  // {
  //   question: 'Q: What are your weakness and strength',
  //   answer: 'answer goes here'
  // },

]

const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>Frequently Asked</h5>
      <h2>Q & A</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      Navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >
        {
          data.map(({question, answer}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className='client__avatar'>
                  {/* <img src={avatar} /> */}
                </div>
                <h5 className='client__name'>{question}</h5>
                <small className='client__review'>{answer}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials
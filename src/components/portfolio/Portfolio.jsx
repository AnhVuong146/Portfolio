import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio7.PNG'
import IMG2 from '../../assets/DBMSproject.PNG'
import IMG3 from '../../assets/MarketplaceProject.PNG'
import IMG4 from '../../assets/Piano.PNG'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=""/>
          </div>
          <h3>Portfolio Project</h3>
          <small>Personal Portfolio is a Web Application project that features important information about me such as my strength, weakness, and development skills for the industry. This project will also feature my contact information as well as my Resume. The main idea is to showcase my front end development skill set and my passion.</small>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/AnhVuong146/Portfolio' className='btn'>Github</a>
            {/* <a href='https://github.com/anhvuong146' className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt=""/>
          </div>
          <h3>Database Management System Web App Project </h3>
          <small>This is a web application group project that allows the users to implement their todo-list or todo-tasks. The main idea of the project is the implementation of our database managemnet system featuring DB broser SQLite that stores data as the backend of the web application.</small>

          <div className='portfolio__item-cta'>
            <a href='https://github.com/AnhVuong146/CS157A-Project' className='btn'>Github</a>
            <a href='https://www.youtube.com/watch?v=pi74_TlZzyY' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt=""/>
          </div>
          <h3>Marketplace Web App Project</h3>
          <small>This is a group Web Application Project that features both front-end and back-end skills. This website functions similar to online shopping websites such as Ebay and Amazon that allows users to shop online and displays a list of items for users to browse, leave a review, search, and add to shopping cart. </small>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/AnhVuong146/CMPE131-Marketplace' className='btn'>Github</a>
            <a href='https://www.youtube.com/watch?v=QWwT7A-CNJo' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

         <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt=""/>
          </div>
          <h3>Youtube Video Editing Piano Project</h3>
          <small>This is a video of myself playing a piano classical "Kiss the Rain" By Yiruma. This project features my hobby along with my video editing skills.</small>
          <div className='portfolio__item-cta'>
            {/* <a href='https://youtu.be/NjqdKHhrfBo' className='btn'>Youtube</a> */}
            <a href='https://youtu.be/NjqdKHhrfBo' className='btn btn-primary' target='_blank'>Youtube</a>
          </div>
        </article>

        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/anhvuong146' className='btn'>Github</a>
            <a href='https://github.com/anhvuong146' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}

        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/anhvuong146' className='btn'>Github</a>
            <a href='https://github.com/anhvuong146' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
      </div>

    </section>

  )
}

export default Portfolio
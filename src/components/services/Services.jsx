import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import {FaThumbsUp} from 'react-icons/fa'
import {FaThumbsDown} from 'react-icons/fa'

const Services = () => {
  return (
    <section id='Services'>
      <h5>Skills</h5>

      <div className="services">
        <h2>Character Traits</h2>
      </div>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Strength</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaThumbsUp className='service__list-icon'/>
              <p>Determination: Willing to accept all challenges and do what 
                it takes to 
                accomplish that challenge no matter the obstacles or difficulty that are 
                in the way.
                </p>
            </li>

            <li>
              <FaThumbsUp className='service__list-icon'/>
              <p>Teamwork: Willing to accept my own role and will always get 
                the tasks done 
                on time with the most convenient manner.
                Willing to communicate with team members and assist if 
                necessary.
              </p>
            </li>

            <li>
              <FaThumbsUp className='service__list-icon'/>
              <p>Ego Strength: Never do a task when I know for sure that I 
                cannot do it or complete it in time. 
                Willing to seek for help with confidence to accomplish the 
                task in the most proper way. 
              </p>
            </li>

            <li>
              <FaThumbsUp className='service__list-icon'/>
              <p>Curiosity: Always go beyond the way and learn new things. 
                Willing to learn from any experts or professionals. 
                Always look for self-improvements.  
              </p>
            </li>

          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>Weakness</h3>
          </div>

          <ul className='service__list'>
            {/* <li>
              <FaThumbsDown className='service__list-icon'/>
              <p>Public Speaking: Unusual stutter when speaking in public such 
                as a presentation or an interview. 
                Tend to be very nervous and lose track of thought process when 
                speaking nervously and causes speaking rapidly.</p>
            </li> */}

            <li>
              <FaThumbsDown className='service__list-icon'/>
              <p>Lack of Experience in a specific area: Lack of knowledge in 
                some coding languages and 
                would usually struggle in critical thinking in coding 
                challenges. This leads to my strength curiosity where I'm willing to explore
                new skills beyond my limit.</p>
            </li>

            <li>
              <FaThumbsDown className='service__list-icon'/>
              <p>Overthinking: Overthink about a task that must be done or something that is approaching a deadline. 
                This weakness leads to the strength determination.
                </p>
              
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        {/* <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ASDASDASDASD</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ASDASDASDASD</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ASDASDASDASD</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ASDASDASDASD</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ASDASDASDASD</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ASDASDASDASD</p>
            </li>
          </ul>
        </article> */}
        {/* END OF CONTENT CREATION */}
      </div>
    </section>

  )
}

export default Services
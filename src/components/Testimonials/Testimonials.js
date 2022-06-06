import React from 'react'
import {Carousel} from 'react-bootstrap'
import imgOne from '../Props/t1.jpg'
import imgTwo from '../Props/t2.jpg'
import './Test.css'
const Testimonials = () => {
  return (
    <div className='Testimonials' id='Testimonials'>
      <h1>Testimonials</h1>
      <Carousel>
        <Carousel.Item>
          <div className=' w-100'>
          <img
            className="rounded-circle"
            src={imgOne}
            alt="First slide"
          />
          <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
          <span>Johnthan Doe - UX Designer</span>
          </div>
        </Carousel.Item>


        <Carousel.Item>
          <div className=' w-100'>
          <img
            className="  rounded-circle"
            src={imgTwo}
            alt="First slide"
          />
          <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
          <span>Johnthan Doe - UX Designer</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className=' w-100'>
          <img
            className="rounded-circle"
            src={imgOne}
            alt="First slide"
          />
          <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
          <span>Johnthan Doe - UX Designer</span>
          </div>
        </Carousel.Item>
     </Carousel>
    </div>
  )
}

export default Testimonials

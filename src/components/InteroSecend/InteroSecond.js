import React from 'react'
import imge from '../Props/2.png'
import { AiOutlineSend } from "react-icons/ai";
import './Secoent.css'

const InteroSecond = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-lg-6 left'>
          <h1>  
          We make everything by hand with the best possible ingredients.
          </h1>
          <p className='lh-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <ul className='list-unstyled fs-4 mb-4'>
            <li>
                <AiOutlineSend className='h3 me-2 '/>
                Etiam sed dolor ac diam volutpat.
            </li>
            <li>
                <AiOutlineSend className='h3 me-2 '/>
                Erat volutpat aliquet imperdiet.

            </li>
            <li>
                <AiOutlineSend className='h3 me-2 '/>
                purus a odio finibus bibendum.

            </li>
          </ul>
          <a href='##' className='py-3 px-4 text-white text-decoration-none link' style={{backgroundColor:'#a82d49'}}>Learn More</a>
        </div>
        <div className='col-lg-6 right'>
          <img src={imge} alt="" className='img-fluid'/>
        </div>
      </div>
    </div>
  )
}

export default InteroSecond
import React from 'react'
import Image from '../Props/1.png'
import './Intero.css'
const InteroFirst = () => {
  return (
    <div className='intero py-5'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-6 left'>
                    <img src={Image} alt='' className='img-fluid'/>
                </div>
                <div className='col-lg-6 right '>
                    <h2>
                      We pride ourselves on making real food from the  best ingredients.
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                    </p>
                    <a href='##' className='btn text-white py-2 px-4 mt-4 fs-5 learn '>Learn More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InteroFirst
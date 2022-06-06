import React from 'react'
import './Secton.css'
const Section = () => {
  return (
    <div className='section text-white text-center d-flex justify-content-center align-items-center'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 my-5'>
                    <h1>1287+</h1>
                    <span className='h6'>Savings</span>
                </div>
                <div className='col-lg-3 my-5'>
                    <h1>5786+</h1>
                    <span>Photos</span>
                </div>
                <div className='col-lg-3 my-5'>
                    <h1>1440+</h1>
                    <span>Rockets</span>
                </div>
                <div className='col-lg-3 my-5'>
                    <h1>7110+</h1>
                    <span>Globes</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section
import React from 'react'
import { Container } from 'react-bootstrap'
import './Landing.css'

const Landing = () => {
  return (
    <div className='landing d-flex justify-contetnt-center align-items-center w-100'>
      <Container>
        <div className='row flex-column '>
          <div className='col-lg-4'>
                <h1 className='lh-base'>
                Good Food Choices
                are good 
                investments.
              </h1>
              <p className='lh-base fs-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.
              </p>  
          </div>
          <div className='col mt-5'>
              <a href='##' className='text-decoration-none py-2 px-4 text-white fs-4 me-4'>Order New</a>
              <a href='##' className='text-decoration-none py-2 px-4 text-white fs-4 '>Learn More</a>
          </div>
        </div>
      </Container>
    </div>
    )
}

export default Landing
import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <div className='container py-5 my-5'>
        <div className='row justify-content-center text-center'>
            <div className='col-lg-12 h2 w-75'>Hurry up! Subscribe our newsletter
            and get 25% Off
            </div>
            <div className='col-lg-12 py-4 h4 '>Limited time offer for this month. No credit card required.

            </div>
            <div className='col-lg-12'>
                <form className='d-flex justify-content-center'>
                    <input className='w-50 btn btn-outline-white ' placeholder='Email Address here'/>
                    <button className='Subscribe py-2 px-4 mx-2 text-white'>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form

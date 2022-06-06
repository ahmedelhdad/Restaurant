import React from 'react'
import './WatchStory.css'
import { AiFillFastForward } from "react-icons/ai";

const WatchStory = () => {
  return (
    <div className='story d-flex align-items-center py-5  mx-auto'>
        <div className='w-75 mx-auto text-center'>
            <h1 style={{color:'var(--color)'}}>When a man's stomach is full it makes no
            difference whether he is rich or poor.</h1>
            <p className='fs-5 w-75 mx-auto text-black-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
            finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            <a href='##' className='d-block text-decoration-none fs-5' style={{color:'var(--color)'}}>
                <AiFillFastForward className='h4 text-primary me-2 text-black'/>
                Watch Our Story
            </a>  
        </div>
    </div>
  )
}

export default WatchStory
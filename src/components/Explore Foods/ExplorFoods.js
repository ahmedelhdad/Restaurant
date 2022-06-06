import React from 'react'
import { Container } from 'react-bootstrap'
import Data from './Data'

import './Explor.css'
const ExplorFoods = () => {
  return (
    <Container className='py-5 text-center' id='Explore'>
      <h1 className='text-uppercase'>explore our foods</h1>
      <p className=' fs-6 w-75 mx-auto text-black-50 pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
        <div className='row text-start py-5'>
        <Data/>
        </div>
    </Container>
  )
}

export default ExplorFoods

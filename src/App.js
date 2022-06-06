import React, { Fragment } from 'react'
import Home from './components/Home/Home'
import Section from './components/Section/Section'
import About from './components/About Us/About'
import ExplorFoods from './components/Explore Foods/ExplorFoods'
import Testimonials from './components/Testimonials/Testimonials'
import Frequently from './components/Frequently/Frequently'
import Contain from './components/Contain/Contain'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import './App.css'
const App = () => {
  return (
    <Fragment>
        <Home/>
        <Section/>
        <About/>
        <ExplorFoods/>
        <Testimonials/>
        <Frequently/>
        <Contain/>
        <Form/>
        <Footer/>
    </Fragment>
  )
}

export default App
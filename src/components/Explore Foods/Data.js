import React,{Fragment} from 'react'
import ImgOne from '../Props/01.jpg'
import ImgTwo from '../Props/02.jpg'
import ImgThree from '../Props/03.jpg'

const Data = () => {
    const data=[
        {
            img:ImgOne,
            title:'Rainbow Vegetable Sandwich',
            time:'15 - 20 Minutes | Serves: 1',
            price:'$10.50 ',
            discount:'$11.70'
        },
        {
            img:ImgTwo,
            title:'Rainbow Vegetable Sandwich',
            time:'15 - 20 Minutes | Serves: 1',
            price:'$9.20 ',
            discount:'$10.50'
        },
        {
            img:ImgThree,
            title:'Rainbow Vegetable Sandwich',
            time:'15 - 20 Minutes | Serves: 1',
            price:'$12.50 ',
            discount:'$13.20'
        }
    ]
    const result = data.map(({img,title,time,price,discount},index) => {
        return(
            <div className='col-lg-4 box' key={index}>
                <img src={img} alt='' className='img-fluid pb-4'/>
                <h5>{title}</h5>
                <h6>{time}</h6>
                <h3 style={{color:'var(--color)'}}>{price} <span className='fs-4 text-decoration-line-through text-black-50'>{discount}</span></h3>
            </div>
            
        )
    })
  return (
      <Fragment> {result}</Fragment> 
  )
}

export default Data

import React from 'react'
import banner3 from '../Assets/dungeon.png'

function SmallCard({title, text, icon}) {
  return (
    <div className='main1'>
                    <img className='main_img' src={banner3}/>
                    <h3 className='main_head '>{title}</h3>
                    <p className='main_mini'>{text}</p>
                    <h3 className='main_line'>Get Started</h3>
                </div>
  )
}

export default SmallCard
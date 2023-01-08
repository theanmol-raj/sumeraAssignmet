import React from 'react'
import banner6 from "../Assets/Desktop.png";
import banner7 from '../Assets/Vector.png';

function Card({title ,text}) {
  return (
    <div className='box'>
                   
    <img className='box_img' src={banner6}/>
    <h1 className='box_head'>{title}</h1>
    <p className='box_content'>{text}
     </p>
     <div className='box_div'>
     <h1 className='div_content'>Learn More</h1>
     <img src={banner7}/>
     </div>
</div>
  )
}

export default Card
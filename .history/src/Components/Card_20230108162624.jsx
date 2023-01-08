import React from 'react'
import banner6 from "../Assets/Desktop.png";
import banner7 from '../Assets/Vector.png';

function Card() {
  return (
    <div className='box'>
                   
    <img className='box_img' src={banner6}/>
    <h1 className='box_head'>Bank Account Setup</h1>
    <p className='box_content'>There are many banks in the United <br/>
       Arab Emirates [UAE]. Both locally <br/>
       owned and branches of <br/>
       multinational ones. Foreign banks <br/> 
       adjust according to their parent s <br/>
       strategies and have changed local <br/>
       requirements overnight in the past. <br/>
       But we are here to help you.
     </p>
     <div className='box_div'>
     <h1 className='div_content'>Learn More</h1>
     <img src={banner7}/>
     </div>
</div>
  )
}

export default Card
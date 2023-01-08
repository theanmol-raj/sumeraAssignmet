import React from 'react'
import banner11 from '../Assets/Group 35.png'

function Column({name,amt,type,add,feat ,boole}) {
  return (
    <div style={{}} className={` big_1 ${!boole ? "donkoala" : " koala"} `}>
            <div className='big_1_1'>
                <h1 className='big_1_head'>{name}</h1>
                <h1 className='big_rs'>{amt} <span className={ `one_time  ${!boole ? "ontTT" : "ontFF"}`}>{type}</span></h1>
                 <h1 className='big_mini_head'>{add}</h1>
                 {feat.map((x,y) =>(<div key={y} className='big_categories'>
                    <img className='big_cat1' src={banner11}/>
                    <h1 className='big_catname'>{x}</h1>
                  </div>) )}
                  
                  
            
            </div>
                <button className='cont_btn'>Continue</button>
            </div>
  )
}

export default Column
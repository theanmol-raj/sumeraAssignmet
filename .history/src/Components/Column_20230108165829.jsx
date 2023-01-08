import React from 'react'
import banner11 from '../Assets/Group 35.png'

function Column({name,amt,type,add,feat ,boole}) {
  return (
    <div className='big_1'>
            <div className='big_1_1'>
                <h1 className='big_1_head'>{name}</h1>
                <h1 className='big_rs'>{amt} <span className='one_time'>{type}</span></h1>
                 <h1 className='big_mini_head'>{add}</h1>
                  <div className='big_categories'>
                    <img className='big_cat1' src={banner11}/>
                    <h1 className='big_catname'>Attestation Charges</h1>
                  </div>
                  <div className='big_categories'>
                    <img className='big_cat1' src={banner11}/>
                    <h1 className='big_catname'>Registered Agent</h1>
                  </div>
                  <div className='big_categories'>
                    <img className='big_cat1' src={banner11}/>
                    <h1 className='big_catname'>Registered Office</h1>
                  </div>
                  <div className='big_categories'>
                    <img className='big_cat1' src={banner11}/>
                    <h1 className='big_catname'>Varal Administrative</h1>
                  </div>
                  <div className='big_categories'>
                    <img className='big_cat1' src={banner11}/>
                    <h1 className='big_catname'>Preparing Statutory File</h1>
                  </div>
                  <div className='big_categories'>
                    <img className='big_cat1' src={banner11}/>
                    <h1 className='big_catname'>Liasing with Registration Authorities</h1>
                  </div>
                  <div className='big_categories'>
                    <img className='big_cat1' src={banner11}/>
                    <h1 className='big_catname'>Due Diligence Appraisa</h1>
                  </div>
                  <div className='big_categories'>
                    <img className='big_cat1' src={banner11}/>
                    <h1 className='big_catname'>Keeping The Register</h1>
                  </div>
                  <div className='big_categories'>
                    <img className='big_cat1' src={banner11}/>
                    <h1 className='big_catname'>Seal Charges</h1>
                  </div>
                  <div className='big_categories'>
                    <img className='big_cat1' src={banner11}/>
                    <h1 className='big_catname'>Certificate of Good Standing</h1>
                  </div>
                  
            
            </div>
                <button className='cont_btn'>Continue</button>
            </div>
  )
}

export default Column
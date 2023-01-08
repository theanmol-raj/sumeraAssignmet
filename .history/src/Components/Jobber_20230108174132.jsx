import React from 'react'

function Jobber({text ,time ,link ,tu}) {
  return (
    <div className={` ${tu ? "inverter" : ""} semi_sec1`}>
            <img className="semi_img" src={link} />
            <div className="semi_content">
              <h1 className="semi_line ">
                {text}
              </h1>
              <h1 className="semi_min"></h1>
            </div>
          </div>
  )
}

export default Jobber
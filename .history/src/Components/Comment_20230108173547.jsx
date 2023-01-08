import React from 'react'

function Comment({comm ,name ,link}) {
  return (
    <div className="comment">
            <div>
              <img className="comment_img" src={link} />
            </div>
            <div className="">
              <h1 className="com_mes">
               {comm}
              </h1>
              <h1 className="com_name">{name}</h1>
            </div>
          </div>
  )
}

export default Comment
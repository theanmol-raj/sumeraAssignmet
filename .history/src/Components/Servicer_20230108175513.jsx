import React from 'react'

function Servicer({title , specs}) {
  return (
    <div className='last_header'>
                  <p className='last_head'>{title}</p>
                  {specs?.map((a,b) => <p key={b}>{a}</p>)}
        </div>
  )
}

export default Servicer
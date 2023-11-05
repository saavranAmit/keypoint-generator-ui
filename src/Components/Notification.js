import React from 'react'

function Notification({functionTo, message}) {
  return (
    <div className="notification">
        <div className='notice-para'>
            <p>{message}</p>
            <div className='cross' onClick={functionTo}>
                <div className='common first'></div>
                <div className='common sec'></div>
            </div>
        </div>
    </div>
  )
}

export default Notification
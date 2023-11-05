import React from 'react'

function Points({num, upText, head}) {
  return (
    <div className='key-point'>
        <div className='number'><h1>{num}</h1></div>
        <div className='steps'>
           <h2>{head}</h2>
           <p>{upText}</p>
        </div>
        
    </div>
  )
}

export default Points
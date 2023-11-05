import React from 'react';
import {IoIosArrowForward} from 'react-icons/io'  //import icons

function Button({getKeyPoints}) {

  return (
    <div className="btn gen-btn">
      <button className="keyGenerator" onClick={()=>{getKeyPoints()}}><IoIosArrowForward className='arrow-sym'/></button>
    </div>
  )
}

export default Button
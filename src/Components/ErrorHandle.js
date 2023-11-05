import React from 'react'

function ErrorHandle({errorStr, setErrorStr}) {
    console.log(errorStr)
    const hideError = ()=>{     //run to terminate notification container
        setErrorStr(null)      // set error string value to null
    }
    return (
    <div className='error-container'>
        <div className='error-con'>
            <div className='para-container'><p>{errorStr?.error}</p>
            <div className='cross error-cross'onClick={hideError}>
                <div className='common first'></div>
                <div className='common sec'></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ErrorHandle
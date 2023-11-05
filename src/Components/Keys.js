import React from 'react';
import Loading from './Loading';
import KeyPoster from './KeyPoster';

function Keys({loading, keyText, keyPoster, iscontent}) {

  return (
    <div className="keyPoints upload">
      <div>{iscontent ?
      <div>{keyPoster ? <KeyPoster /> :
      <div className="textarea">
          {loading ? <Loading /> :
          <div>
            <div className='tra-container'><h1>Key Points</h1></div>
          {keyText[0]["text"].map((data, i)=>{
            return(
              <div className="text-con points individual-para">
                {/* <div className='dot'></div> */}
                <div><p>*</p></div>
                <p className='data-para'>{data}</p>
              </div>
            )
          })}
          </div>}
        </div>}
        </div>: <KeyPoster />}
        </div>
    </div>
  )
}

export default Keys
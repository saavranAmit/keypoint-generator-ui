import React, {useState} from 'react';
import Loading from './Loading';
import Poster from './Poster';
import Notification from './Notification';

function Textarea({text, isLoading, poster, textArea, eliminateFileNotice,validFile, eliminateExtentionError}) {

  const loadMessage = "File is not uploaded"
  const errorMessage = "File extention is not valid"
  return (
    <div className="text-container upload">
      <div>{textArea ?
      <div>{validFile ?
      <div>
        {poster ? <Poster /> :
        <div className="textarea">
          {isLoading ? <Loading /> :
          <div>
            <div  className='tra-container'><h1>Transcription</h1></div>
          {text.map((data, i)=>{
            return(
              <div className="text-con">
                
                <p>{data.text}</p>
              </div>
            )
          })}
          </div>}
        </div>}
      </div>: <Notification functionTo={eliminateExtentionError} message={errorMessage}/>}</div>
      :<Notification functionTo={eliminateFileNotice} message={loadMessage}/>}</div>
    </div>
  )
}

export default Textarea
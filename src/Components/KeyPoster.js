import React from 'react';
import Points from './Points';

function KeyPoster() {
 
  const upText = "To start converting your audio to text with describeMe, just click the Choose file button."

  const traText = "After the file has uploaded just click the “Generate” button, your file will be processed and the transcription will show up on the left side of the screen. If needed you can also generate key points by clicking on \"Arrow button\" button."
  return (
    <div className='key-container'>
      <div className='key-content'>
        <h1>How to convert audio to text:</h1>
        <div className='key-points'>
          <Points num = "1" head="Upload" upText={upText}/>
        </div>
        <div className='key-points'>
          <Points num = "2" head="Transcribe" upText={traText}/>
        </div>
      </div>
    </div>
  )
}

export default KeyPoster
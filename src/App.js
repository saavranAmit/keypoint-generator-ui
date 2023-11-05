
import React, {useState} from "react";
import {GoUpload} from 'react-icons/go'
import "./styles.css";
import Textarea from "./Components/Textarea";
import Keys from "./Components/Keys";
import Button from "./Components/Button";
import ErrorHandle from "./Components/ErrorHandle";

function App() {

  const [file, setFile] = useState()
  const [text, setText] = useState([])

  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [bool, setBool] = useState(false)
  const [keyText, setKeyText] = useState([])

  const [poster, setPoster] = useState(true)
  const [keyPoster, setKeyPoster] = useState(true)

  const [iscontent, setContent] = useState(false)
  const [textArea, setTextArea] = useState(true)
 const [validFile, setValidFile] = useState(true)

 const [errorHandle, setErrorHandle] = useState(false)
 const [errorStr, setErrorStr] = useState(null)

 

  const getTranscriptionData = async ()=>{
    const fetchData = await fetch('/transcription');
    const res = await fetchData.json()
    if(fetchData.status === 200){
      setText([...res]);
      setContent(true)
      setIsLoading(false)
    }else if(fetchData.status === 500){
      setErrorStr(res)
      setErrorHandle(true)
      setIsLoading(false)
      setPoster(true)
    }
    return res;
  }

  const createSummary = (e)=>{   //function called when use click on generate button
    e.preventDefault()
    const postAudioFile = async (obj)=>{  //form data get post
      const options = {
        method : 'POST',      //post method for posting data
        body : obj            //obj contain for data
      }
      setPoster(false)
      setIsLoading(true);
      const fetchData = await fetch('/addfile/new', options);    //request endpoint and post data
      const res = await fetchData.json()
      if(fetchData.status === 200){   //Execute if data is post successfully
        setBool(true)
      }else if(fetchData.status === 500){  //Execute if error occure while posting data
        setErrorStr(res)
        setErrorHandle(true)
        setPoster(true)
      }
      return res;     //return response from server
    }
    const callFunc = async ()=>{    //Function call post data function on certain condition

      const obj = new FormData()   //creating object
      obj.append("file", file)     //append audio file to array
      if(file){              //Check if file format is correct or not
        const extentionList = ["wav"]
        const fill = file.name
        const filename = fill.toString()
        const list = filename.split(".")
        if (extentionList.includes(list[1])){
          const data = await postAudioFile(obj)
        }else{
          setValidFile(false)
        }
        
      }else{
        setTextArea(false)
      }
    }

    callFunc()       //calls callFunc function
  }

  const eliminateFileNotice = ()=>{
    setTextArea(true)
  }

  const eliminateExtentionError = ()=>{
    setValidFile(true)
  }

  const getKeyPoints = ()=>{    //function run when user click on generate key point button
    if(text.length > 0){    //check if tanscribe data exist or not 
    const getKeyPoints = async ()=>{     //function call to generate key points
        setKeyPoster(false)
        setLoading(true)

        const textObject = text[0]
        const textArr = Object.values(textObject)

        const fetchData = await fetch(`/createKeys/${textArr[1]}`);  //request endpoint to generate key points
        const res = await fetchData.json()
        if(fetchData.status === 200){   //Execute if data is post successfully
          setKeyText([...res]);
          setLoading(false)
        }else if(fetchData.status === 500){ ////Execute if error occure while posting data
          setErrorStr(res)
          setErrorHandle(true)
          setLoading(false)
          setKeyPoster(true)
        }
        return res;
    }
    const callFunc = async ()=>{   //call getData function to generate key points
      const data = await getKeyPoints()
    }

    callFunc()
  }
  }


  if(bool){
    getTranscriptionData()
    setBool(false)
  }

  return (
    <>
    {errorStr &&
      <ErrorHandle errorStr={errorStr} setErrorStr={setErrorStr}/>
    }
     {/* header start  */}
    <div className="container">
      <div className="upload submit">
        <form onSubmit={createSummary}>
          <div className="upload-section">
            <div className="title"><h1>describeMe</h1></div>
            <div className="left-heading">
              <div className="inputFile"><input type="file" className="custom-file-input" onChange={(e) => setFile(e.target.files[0])} /><GoUpload className="symbol"/>
              </div>
              <div className='btn-div'>
                <input className='btn' type='submit' value='Generate' />
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* header ends */}


      <div className="content">
        <Textarea text = {text} isLoading = {isLoading} poster = {poster} textArea={textArea} eliminateFileNotice={eliminateFileNotice} validFile={validFile} eliminateExtentionError={eliminateExtentionError}/>

        <Button getKeyPoints={getKeyPoints} />

        <Keys keyText = {keyText} loading = {loading} keyPoster={keyPoster} iscontent = {iscontent}/>
      </div>

      {/* footer start */}
      <footer className="upload footer">
        <h2>Copyright &copy; : Design by <span>Amit Singh</span></h2>
      </footer>
      {/* footer ends */}
    </div>
    </>
  );
}

export default App;

import React, { useState } from 'react'

export default function TextForm(props){
    const[text, setText] = useState('Enter text here');
   
    const handleUpClick = () =>{
       let newText = text.toUpperCase() ;
      setText(newText)
      props.showalert("Converting to Uppercase",'success')
    }

    const handleLoClick = () =>{
       let neText = text.toLowerCase() ;
      setText(neText)
      props.showalert("Converting to Lowercase",'success')
    }

    const handleClearClick = () =>{
      let noText = " ";
      setText(noText)
      props.showalert("Clear text",'success')
    }

    const handleChange = (event) =>{
      setText(event.target.value)

    }

    const handleCopy = () =>{
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showalert("Text copied",'success')
    }

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showalert("Removed extra spaces",'success')
    }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1  >{props.heading}</h1>
        <div className="mb-3">
            <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'}`} value={text} id="myBox" style={{backgroundColor: props.mode==='light'?'white':'grey'}} onChange={handleChange} rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick= {handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick= {handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick= {handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick= {handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick= {handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
       <h1>Your text summary</h1>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008*text.split(" ").length} Minutes read</p>
       <h2>Preview</h2>
       <p>{text.length>0 ? text:"Enter text to preview"}</p>
    </div>
    </>
  )
}

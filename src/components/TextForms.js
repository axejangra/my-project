import React, { useState } from 'react'


export default function TextForms(props) {
  const [text, setText] = useState("");

  // text = "new text" = wrong way to change the state
  // setText("new  text")  = right way  to change  the state
  const handleOnChange = (event) => {
    // console.log("onchange")
    setText(event.target.value)


  }

  const handleupClick = () => {
    // console.log("handleupClick")
    let newtext = text.toUpperCase();
    setText(newtext)
    
  }
  const handleLoClick = () => {
    // console.log("handleupClick")
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const handleclear = () => {
    // console.log("handleupClick")
    let newtext = '';
    setText(newtext)
  }
  const handleCopy = () => {
    // console.log("handleupClick")
    let copytext = text
    navigator.clipboard.writeText(text)
    alert("copied " + copytext)
  }
  return (
    <>
      <div className="container my-2">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" placeholder='enter text here'></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleupClick}>convrt to upper case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>convrt to lower case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleclear}>clear text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>copy text</button>

      </div>
      <div className="container">
        <h1>your text summary</h1>

        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words  and  {text.length} characters </p>
      </div>
    </>
  );
}  
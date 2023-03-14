import React,{useState} from 'react'

export default function (props) {
    const [text, setText] = useState("");
    // setText(text.toUpperCase())
    // text = "new text";  --> Wrong way to change text

   const handleUpClick = ()=>{
        console.log("UpperCase was Clicked")
        props.showAlert('Changed to Uppercase','success')
        setText(text.toUpperCase())
    }
    
    const handleLowClick = ()=>{
        console.log("Lowercase was Clicked")
        props.showAlert('Changed to Lowercase','success')
        setText(text.toLowerCase())
    }

    const handleRemoveSpace = ()=>{
        console.log("Remove Spaces was Clicked")
        setText(text.replaceAll(/\s+/g, ""))
    }

    const handleCopy=()=>{
        var copyText = document.getElementById("textArea");
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text Copied","success");
    }
    const handleClear = ()=>{
        setText("")
    }

    const handleOnChange =(event)=>{
       console.log("On Change")
       setText(event.target.value)
    }

    // let character = text.length()

  return (
    <div>
        
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <textarea id="textArea" className="form-control mb-3" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  rows="8"></textarea>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpace}>Remove Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleClear}>Clear</button>
        </div>
        <div className="conatiner my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h3>Your Text Summary</h3>
            <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p> {0.008*text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
             <p>{text.length>0?text:"Enter the Text above to preview it here"}</p>
        </div>
    </div>
  )
}

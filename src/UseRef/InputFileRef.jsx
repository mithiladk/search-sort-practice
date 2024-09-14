import React, { useRef } from 'react'

const InputFileRef = () => {
    const inputRef = useRef();
  return (
    <>
    <input type ="file" onChange={fileHandler} ref={inputRef}/>
    
  <div>InputFileRef</div>
    </>
  
  )
}

export default InputFileRef
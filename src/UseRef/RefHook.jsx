import React, { useRef, useState } from 'react'

const RefHook = () => {
    const inputRef = useRef(null);
    console.log(inputRef);
    const [isFocused,setIsFocused] = useState(false);

    const handleFocus = () =>{
        setIsFocused(true)
    }

    const handleBlur = () =>{
        setIsFocused(false)
    }

    const inputSytles = {
      border:  isFocused ? '2px solid yellow':'2px solid red',
      outline:'none',
      padding:'5px',
      borderRadius:'5px',
      margin:"5px"

    }
  return (
    <div>
        <input type='text'
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={inputSytles}
        />
        <button type='submit'onClick={()=>inputRef.current.focus()} >Focus Input</button>
    </div>
  )
}

export default RefHook
import React ,{useRef,useState}from 'react'

const RefHookTask = () => {
    const inputRef = useRef(null);
    const secondRef = useRef(null);
    const [isFocused,setIsFocused] = useState(false);
    const [isFocused1,setIsFocused1] = useState(false);

    const handleFocus = () =>{
        setIsFocused(true)
    }

    const handleBlur = () =>{
        setIsFocused(false)
    }

    const handleFocus1 = () =>{
        setIsFocused1(true)
    }

    const handleBlur1 = () =>{
        setIsFocused1(false)
    }
    const inputSytles = {
        border:  isFocused ? '2px solid yellow':'2px solid red',
        outline:'none',
        padding:'5px',
        borderRadius:'5px',
        margin:"5px"
  
      }

      const inputSytles1 = {
        border:  isFocused1 ? '2px solid pink':'2px solid green',
        outline:'none',
        padding:'5px',
        borderRadius:'5px',
        margin:"5px"
  
      }

  return (
    <div className='d-flex my-4 '>
         <input type='text'
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={inputSytles}
        onChange={()=>inputRef.current.focus()}
        />
        {/* <button type='submit' >Focus Input</button> */}

        <input type='text'
        ref={secondRef}
        onFocus={handleFocus1}
        onBlur={handleBlur1}
        style={inputSytles1}
        onChange={()=>secondRef.current.focus()}
        />
        {/* <button type='submit'onChange={()=>inputRef.current.focus()} >Focus Second</button> */}
    </div>
  )
}

export default RefHookTask
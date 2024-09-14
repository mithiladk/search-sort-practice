import React, { useRef } from 'react'

const TaskTextArea = () => {
    const inputRef = useRef(null);
 
    const handleSubmit = () => {
        inputRef.current.focus();
        inputRef.current.value = "useRef Class"

    }

    return (
        <>
          
                <textarea ref={inputRef} />
                <button onClick={handleSubmit}>Click</button>
         
        </>

    )
}

export default TaskTextArea
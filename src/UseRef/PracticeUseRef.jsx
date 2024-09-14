import React, { useRef } from 'react'

const PracticeUseRef = () => {
    const clickRef = useRef();

    const ShowRef = () =>{
      clickRef.current.focus();
        console.log("div clicked");
    }
  return (
    <>
      <div ref={clickRef} >PracticeUseRef</div>
      <button type='submit'  onClick={ShowRef} style={{"cursor":"pointer"}}> Ref Click</button>
    </>
  
    
  )
}

export default PracticeUseRef
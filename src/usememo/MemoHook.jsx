import React, { useMemo, useState } from 'react';


const MemoHook = () => {
    const[number,setNumber] = useState(0);
    const squaredNumber = useMemo(()=>{
        console.log('calculating sqaured no...');
        return number * number;
    },[number])

    const handleNumberChange = (event) =>{
        setNumber(parseInt(event.target.value,10))
    }
  return (
    <>
    <input type='number' value={number} onChange={handleNumberChange} />
    <div>Squared no:{squaredNumber}</div>
   
    </>
  )
}

export default MemoHook
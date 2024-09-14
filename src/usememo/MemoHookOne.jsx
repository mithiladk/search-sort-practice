//memoization is like storing the values as cache that need not to be
//calculated again and again

import React, { useMemo, useState } from 'react'

const MemoHookOne = () => {
    const[number,setNumber] = useState(0);
    const[muduloNo,setModuloNo] = useState(0);
    
 

    
    const moduloNumber = useMemo(()=>{
        console.log('calculating sqaured no...');
        return (number % muduloNo)
    },[number,muduloNo])

    const handleNumberChange = (event) =>{
        setNumber(parseInt(event.target.value,10))
 
    }
    const handleModuloNumber = (event) =>{
        setModuloNo(parseInt(event.target.value,10))
    }

  return (
    <>
    <input type='number' value={number} onChange={handleNumberChange} />
    <input type='number' value={muduloNo} onChange={handleModuloNumber}/>
    <div>Modulo:{moduloNumber}</div>
    </>
  )
}

export default MemoHookOne
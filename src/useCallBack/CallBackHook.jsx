//callbcak hook improves the perrformance by reducing the unnecessary
//computations and providing already stored callback

import React, { useCallback, useState } from 'react'
import { useEffect } from 'react';

const CallBackHook = () => {
    const [num, setNum] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);


    const findMod = useCallback(() => {
        const modulo = num1 % num2;
        setNum(modulo);
    }, [num1, num2])

    const handleChange1 = (e) => {
        setNum1(parseInt(Math.abs(e.target.value) || 0))
    }

    const handleChange2 = (e) => {
        setNum2(parseInt(Math.abs(e.target.value) || 0))
    }

    useEffect(() => {
        findMod();
    }, [findMod])

    return (
        <>
            <input type='number' value={num1} onChange={handleChange1} />
            <input type='number' value={num2} onChange={handleChange2} />
            <h2>Modulo Number : {num}</h2>
        </>
    )
}

export default CallBackHook
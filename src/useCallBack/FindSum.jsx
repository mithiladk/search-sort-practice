//callbcak hook improves the perrformance by reducing the unnecessary
//computations and providing already stored callback

import React, { useCallback, useState } from 'react'
import { useEffect } from 'react';

const FindSum = () => {
    const [num, setNum] = useState(0);
    const [sum1, setSum1] = useState(0);
    const [sum2, setSum2] = useState(0);


    const findAddition = useCallback(() => {
        const add = sum1 + sum2;
        setNum(add);
    }, [sum1, sum2])

    const handleChange1 = (e) => {
        setSum1(parseInt(Math.abs(e.target.value) || 0))
    }

    const handleChange2 = (e) => {
        setSum2(parseInt(Math.abs(e.target.value) || 0))
    }

    useEffect(() => {
        findAddition();
    }, [findAddition])

    return (
        <>
            <input type='number' value={sum1} onChange={handleChange1} />
            <input type='number' value={sum2} onChange={handleChange2} />
            <h2>Addition : {num}</h2>
        </>
    )
}

export default FindSum
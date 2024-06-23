import React, { useState, useMemo, useCallback } from 'react';

function CounteruseMemo() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // Memoize a heavy computation based on count1
    const heavyComputation = useMemo(() => {
        let result = 0;
        for (let i = 0; i < 2000; i++) {
            result += i;
        }
        return result;
    }, [count1]);  //It will be recomputed only when count1 changes because count1 is in the dependency array.

    // Memoize handleCount1 function
    const handleCount1 = useCallback(() => {
        setCount1(prevCount => prevCount + 1); // Functional update
    }, []); // No dependencies, using functional update

    // Memoize handleCount2 function
    const handleCount2 = useCallback(() => {
        setCount2(prevCount => prevCount + 1); // Functional update
    }, []); // No dependencies, using functional update

    return (
        <>
            <h2>Count1 - {count1}</h2>
            <button onClick={handleCount1}>Update1</button>

            <h2>Count2 - {count2}</h2>
            <button onClick={handleCount2}>Update2</button>

            <p>Heavy Computation Result: {heavyComputation}</p>
        </>
    );
}

export default CounteruseMemo;

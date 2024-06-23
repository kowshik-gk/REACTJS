import React, { useState,useCallback } from 'react';

function CounteruseCallback() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleCount1 = useCallback(() => {
        console.log("count1");
        setCount1(count1 + 1);
    });

    const handleCount2 = useCallback(() => {
        console.log("count2");
        setCount2(count2 + 1);
    });

    return (
        <>
            <h2>Count1 - {count1}</h2>
            <button onClick={handleCount1}>Update1</button>

            <h2>Count2 - {count2}</h2>
            <button onClick={handleCount2}>Update2</button>
        </>
    );
}

export default CounteruseCallback;

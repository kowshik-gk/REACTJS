import React, { useState, useRef, useEffect } from 'react';

function CounteruseRef() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count; // Store current count as previous count
    }, [count]); // Run effect whenever count changes

    const prevCount = prevCountRef.current;

    return (
        <div>
            <h2>Current Count: {count}</h2>
            <h3>Previous Count: {prevCount}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default CounteruseRef;

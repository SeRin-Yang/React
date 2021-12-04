import React, { useState } from 'react';
import './CounterNumber.css';

function CounterNumber() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>
                <p className = "text">You clicked {count} times</p>
            </div>
            <div>
                <button class='btn' onClick={() => setCount(count - 1)}> -1</button>
                <button class='btn' onClick={() => setCount(0)}> 0</button>
                <button class='btn' onClick={() => setCount(count + 1)}> +1</button>
            </div>
            
        </div>
    );
}

export default CounterNumber;
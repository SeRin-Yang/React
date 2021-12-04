import React, { useState } from 'react';
import './CounterNumber.css';
import BaseButton from './BaseButton';
import IconButton from './IconButton';
import TextButton from './TextButton';
import icon1 from './arrow-down-outline.svg';
import icon3 from './arrow-up-outline.svg';
import icon2 from './refresh-outline.svg';



function CounterNumber() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>
                <p className = "text">You clicked {count} times</p>
            </div>
            <div>
                <BaseButton func={() => setCount(count - 1)} name='-1'/>
                <BaseButton func={() => setCount(0)} name='0'/>
                <BaseButton func={() => setCount(count + 1)} name='+1'/>
            </div>
            <div>
                <IconButton func={() => setCount(count - 1)} icon={icon1}/>
                <IconButton func={() => setCount(0)} icon={icon2}/>
                <IconButton func={() => setCount(count + 1)} icon={icon3}/>
            </div>
            <div>
                <TextButton func={() => setCount(count - 1)} name='-1'/>
                <TextButton func={() => setCount(0)} name='0'/>
                <TextButton func={() => setCount(count + 1)} name='+1'/>
            </div>
            
        </div>
    );
}

export default CounterNumber;
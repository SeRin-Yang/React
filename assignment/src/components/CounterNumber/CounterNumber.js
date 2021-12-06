import React, { useState } from 'react';
import './CounterNumber.css';
import BaseButton from '../Button/BaseButton/BaseButton';
import IconButton from '../Button/IconButton/IconButton';
import TextButton from '../Button/TextButton/TextButton';
import icon1 from './arrow-down-outline.svg';
import icon3 from './arrow-up-outline.svg';
import icon2 from './refresh-outline.svg';

function CounterNumber() {
    const [count, setCount] = useState(0);

    const decrease = () => {
      setCount(count - 1)
    };

    const increase = () => {
      setCount(count + 1)
    };

    const refresh = () => {
      setCount(0)
    };

    return (
        <>
            <div>
                <p className="text">You clicked {count} times</p>
            </div>
            <div>
                <BaseButton func={decrease} name='-1'/>
                <BaseButton func={refresh} name='0'/>
                <BaseButton func={increase} name='+1'/>
            </div>
            <div>
                <IconButton func={decrease} icon={icon1}/>
                <IconButton func={refresh} icon={icon2}/>
                <IconButton func={increase} icon={icon3}/>
            </div>
            <div>
                <TextButton func={decrease} name='-1'/>
                <TextButton func={refresh} name='0'/>
                <TextButton func={increase} name='+1'/>
            </div>
        </>
    );
}

export default CounterNumber;
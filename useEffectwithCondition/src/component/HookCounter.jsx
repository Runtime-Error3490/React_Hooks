import React, { useEffect, useState } from 'react';

export default function HookCounter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("Changing the data")
        document.title = `Clicked ${count} times`;
    },[count]);

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={e => {
                    console.log(e.target); 
                    setName(e.target.value);
                }}
            />
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    );
}

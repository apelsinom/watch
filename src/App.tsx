import React, {useEffect, useState} from 'react';

function App() {
    const [date, setDate] = useState(new Date());

    let watch = `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div style={{
            height: '100vh',
            margin: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '200px',
            backgroundColor: 'black',
            color: 'aquamarine',
        }}>
            {watch}
        </div>
    );
}

export default App;

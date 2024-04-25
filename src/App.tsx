import React, {useEffect, useState} from 'react';
import {WatchElectron} from "./components/WatchElectron/WatchElectron";
import {WatchAnalog} from "./components/WatchAnalog/WatchAnalog";
import './App.css';

function App() {
    const [date, setDate] = useState(new Date());
    const [changeWatch, setChangeWatch] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(intervalId);
    }, [])

    const showWatchHandler = () => setChangeWatch(!changeWatch);

    return (
        <div className="App">
            <h1 className="click" onClick={showWatchHandler}>Click me</h1>
            {changeWatch ? <WatchElectron date={date}/> : <WatchAnalog date={date} />}
        </div>
    );
}

export default App;

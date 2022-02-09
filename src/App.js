// import logo from './logo.svg';
import React,{ useState } from "react";
import './App.css';
import Parent from './Parent';
import ValueContext from "./ValueContext";

function App() {
    // let [number , setnumber] = useState(0);
    let value = 81;

    return (
        <ValueContext.Provider value={value}> 
            <div>
                Hello App
                <Parent></Parent>
                <button>Click me!</button>
            </div>
        </ValueContext.Provider> 
    );
}

export default App;
// import logo from './logo.svg';
import React,{ useState } from "react";
import './App.css';
import Parent from './Parent'

function App() {
    let [number , setnumber] = useState(0);
    return ( <div>
        <Parent number={number}></Parent>
        <button onClick={()=>setnumber(++number)}>Click me!</button>
        </div>
    );
}

export default App;
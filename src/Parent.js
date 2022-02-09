import React from "react";
import Child from "./Child";

function Parent({number}) {
   
    return (
        <div>
            <p>Parent {number}</p>
            <Child number={number}></Child>
        </div>
    );

}

export default Parent;
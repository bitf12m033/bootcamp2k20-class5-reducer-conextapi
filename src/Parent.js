import React from "react";
import Child from "./Child";
import Child2 from "./Child2";

function Parent() {
   
    return (
        <div>
            <p>Parent</p>
            <Child />
            <Child2 />
        </div>
    );

}

export default Parent;
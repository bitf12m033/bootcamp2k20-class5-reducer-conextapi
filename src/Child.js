import React ,{useContext} from "react";
import ValueContext from "./ValueContext";

function Child(props) {
    let value = useContext(ValueContext);
    console.log(value);
    return(
        <div>Child {value}
            <button onClick={() =>value[1](++value[0])}>click me</button>
        </div>
    );
}
export default Child;
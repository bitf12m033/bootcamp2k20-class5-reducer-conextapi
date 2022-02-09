import React ,{useReducer,useContext} from "react";
import numberReducer from "./numberReducer";

function Child2() {
    let [state,dispatch] = useReducer(numberReducer,52);
   
    return(
        <div>
            Child2 {state}
            <button onClick={()=> { dispatch({type:"increment"}); }}>increment</button>
            <button onClick={()=> {dispatch({type:"decrement"}); }}>decrement</button>
        </div>
    );
}
export default Child2;
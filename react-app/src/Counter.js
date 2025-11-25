import React,{useState} from "react";
function Counter(){
    const[Count,setCount]=useState(0);
    return(
        <div>
            <h2>Count:{Count}</h2>
            {Count<10?(
                <button onClick={()=>setCount(Count+1)}>Increment</button>
            ):(
                <p>End Of Count</p>
            )}
        </div>
    );
}
export default Counter;
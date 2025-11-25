import React from "react";
function DivisionByZero({a,b}){
    if(b===0){
        throw new Error('Division by zero error');
    }
    const result=a/b;
    return(
        <div>
            <h3>Result:{result}</h3>
        </div>
    )
}
export default DivisionByZero;
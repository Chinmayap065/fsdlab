import React from "react";
function Array(){
    const arr=['Apple','Bannana','Grapes'];
    const index=1;
    if(index>=arr.length){
        throw new Error('Array out of bound')
    }
    return(
        <div>
            <h3>Element at index {index}:{arr[index]}</h3>
        </div>
    )
}
export default Array;
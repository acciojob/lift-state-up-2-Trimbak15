import React from "react";

const Children =({inputValue, setInputValue})=>{


    return(
        <div className="child">
            <h2>Children Component</h2>
            <input type="text" placeholder="write something here"
            onChange={setInputValue}
            />
        </div>
    )
}
export default Children;
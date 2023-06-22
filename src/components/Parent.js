import React,{useState} from "react";
import Children from "./Children";

const Parent=()=>{
    const [inputValue, setInputValue] = useState("");


    const handleChange = (event) =>{
        setInputValue(event.target.value);
    }

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <p>{inputValue}</p>
            <Children inputValue={inputValue} setInputValue={handleChange}/>
        </div>
    )
}
export default Parent;
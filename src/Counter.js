import {useState} from "react";
const Counter=()=>{
    const [count,setCount] = useState(0);
    const [value,setValue] = useState("");

    function Reset(){
        setCount(0);
    }

    function onTextChange(event){
        setValue(event.target.value)
    }

    return(<>   <input type = "text" value = {value}
                onChange = {event=>onTextChange(event)}/>
                You input {value} length: {value.length}
                <button onClick={()=>setCount(count+1)}>Click Me</button>
                <button onClick={()=>Reset()}>Reset</button>
                You clicked {count}                
    </>
    )
}
export default Counter;
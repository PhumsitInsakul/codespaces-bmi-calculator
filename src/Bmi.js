import {useRef, useState} from "react";

const BmiText = ({bmi}) => {
    if(bmi<18.5)
        return(<h1>UnderWeight</h1>);
    if(bmi>30)
        return(<h1>OverWeight</h1>);
    return(<h1>Normal</h1>);
}

export default function Bmi(){
    const w_inputRef = useRef(null);
    const h_inputRef = useRef(null);
    const [Bmi, setBmi] = useState(0);
    const calBmi = () => {
        let w = w_inputRef.current.value;
        let h = h_inputRef.current.value/100;
        setBmi(w / Math.pow(h,2));
    }
    return (
        <>
        <h3>BMI Calculator</h3>
        weight: <input
            type = "text"/*  */
            ref = {w_inputRef} /> kg. <br/>
        Height: <input
            type = "text"
            ref = {h_inputRef} /> cm. <br/>
            <button onClick = {() => calBmi()}>Calculate!</button><br/>
            Bmi value: {Bmi.toFixed(2)}
            <BmiText bmi = {Bmi}/>
        </>
    )
}
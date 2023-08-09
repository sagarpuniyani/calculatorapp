import React from 'react'

const Button = (props) => {

    const clicked = ()=>{
        // There is the Function of the BmiCaluate is Calling 
        props.fn();

        // There is the Calling of the DeliveyMessage
        props.Func();
    }

    return (<>
    <button onClick={clicked} > {props.value} {props.icon} </button>
    </>)
}

export default Button

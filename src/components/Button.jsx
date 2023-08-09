import React from 'react'

const Button = (props) => {

    const clicked = ()=>{
        props.fn();
    }

    return (<>
    <button onClick={clicked} > {props.value} </button>
    </>)
}

export default Button

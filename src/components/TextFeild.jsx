import React from 'react'

const TextFeild = (props) => {

    const clicked = (event )=>{
        var data = event.target.value;
        data = isNaN(parseFloat(data))?0:parseFloat(data);
        props.fn(data);
        
    }

    return (
    <input onChange={clicked} type="text" placeholder= {props.place} />
)
}

export default TextFeild

import React from 'react'

const TextFeild = (props) => {

    const clicked = (event )=>{
        var data = event.target.value;
        data = isNaN(parseFloat(data))?0:parseFloat(data);
        props.fn(data);
        console.log("Data " , data);
        console.log("Type of data " , typeof(data))
        
    }

    return (
    <input onChange={clicked} type="text" placeholder= {props.place} />
)
}

export default TextFeild

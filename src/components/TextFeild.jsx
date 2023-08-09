import React from 'react'

const TextFeild = (props) => {

    const clicked = (event )=>{
        var data = event.target.value;
        console.log("Data " , data);
        
    }

    return (
    <input onChange={clicked} type="text" placeholder= {props.place} />
)
}

export default TextFeild

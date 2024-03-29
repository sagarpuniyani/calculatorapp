import React from 'react'

//<Output heightIs= {height} WeightIs = {weight}  AgeIs = {Age}  Bmi = {BmiValue} MessageIs={Message} />

const Output = (props) => {
return (<div className='m-3'>
    <p>Age 🙆🏿 = {props.AgeIs} Years  </p>
    <p>Height 👽 = {props.heightIs} cm  </p>
    <p>Weight 😠= {props.WeightIs} kg  </p>
    <p>Body Mass Index 👍 = {props.Bmi} kg/m^2 </p>
    <p> You are 🤞 {props.MessageIs} </p>
</div>)
}

export default Output

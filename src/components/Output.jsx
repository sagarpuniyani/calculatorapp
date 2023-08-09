import React from 'react'

//<Output heightIs= {height} WeightIs = {weight}  AgeIs = {Age}  Bmi = {BmiValue} />

const Output = (props) => {
return (<>
    <p>Age = {props.AgeIs} Years  </p>
    <p>Height = {props.heightIs} cm  </p>
    <p>Weight = {props.WeightIs} kg  </p>
    <p>Body Mass Index = {props.Bmi} kg/m^2 </p>
</>)
}

export default Output

import React from 'react'
import TextFeild from '../components/TextFeild'
import RadioButton from '../components/RadioButton'
import Button from '../components/Button'

const BmiPage = () => {

    const handleInputChange = () =>{
        console.log("handleInputChange called ")
    }

return (
    <div className='container row '>
            <p>Age :  <TextFeild fn={handleInputChange} place ="Enter your Age" /> </p>
            <p>Gender : <RadioButton /> Male <RadioButton /> Female </p>
            <p>Height : <TextFeild fn={handleInputChange}  place ="Enter Height in CM " /> </p>
            <p>Weight : <TextFeild fn={handleInputChange} place ="Enter Weight in KG " /> </p>
            <div className='output row col-1' >
                <Button value="Calculate " />
                <Button  value = "Clear" />
            </div>
    </div>
)
}

export default BmiPage

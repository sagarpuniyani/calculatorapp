import React from 'react'
import TextFeild from '../components/TextFeild'
import RadioButton from '../components/RadioButton'
import Button from '../components/Button'

const BmiPage = () => {

    //  There are three different function to be make so that {To Take the Input Of the Data }
    //  1. For  handle the height 
    //  2. For Handle the weight 
    //  3. For Handle the Age 
    

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

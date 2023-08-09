import React from 'react'
import TextFeild from '../components/TextFeild'
import RadioButton from '../components/RadioButton'
import Button from '../components/Button'

const BmiPage = () => {

    //  There are three different function to be make so that {To Take the Input Of the Data }
    
    let height = 180;
    let weight = 65;
    let Age = 25;
    
    const HandleHeight = (data) =>{
        //  1. For  handle the height 
        height = data;
        console.log("Height = " , height )
    }
    
    const HandleWeight = (data) =>{
        //  2. For Handle the weight 
        weight = data;
        console.log("weight = " , weight )
        
    }
    
    const HandleAge = (data) =>{
        //  3. For Handle the Age 
        Age = data;
        console.log("Age = " , Age )
        
    }

    // Now design the Function to calculate the Bmi of the person 

return (
    <div className='container row '>
            <p>Age :  <TextFeild fn={HandleAge} place ="Enter your Age" /> </p>
            <p>Gender : <RadioButton /> Male <RadioButton /> Female </p>
            <p>Height : <TextFeild fn={HandleHeight}  place ="Enter Height in CM " /> </p>
            <p>Weight : <TextFeild fn={HandleWeight} place ="Enter Weight in KG " /> </p>
            <div className='output row col-1' >
                <Button  value="Calculate " />
                <Button  value = "Clear" />
            </div>
    </div>
)
}

export default BmiPage

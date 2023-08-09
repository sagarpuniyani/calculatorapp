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
        if(height <=0 ){
            height = 0;
        }
        console.log("Height = " , height )
    }
    
    const HandleWeight = (data) =>{
        //  2. For Handle the weight 
        weight = data;
        if(weight <=0 ){
            weight = 0;
        }
        console.log("weight = " , weight )
        
    }
    
    const HandleAge = (data) =>{
        //  3. For Handle the Age 
        Age = data;
        if(Age <=0 ){
            Age = 0;
        }
        else if(Age > 120 ){
            Age = 120;
        }
        console.log("Age = " , Age )
        
    }

    // Now design the Function to calculate the Bmi of the person 
    const BmiCalculate = ()=>{
        console.log("I am BmiCalculate")
    }

return (
    <div className='container row '>
            <p>Age :  <TextFeild fn={HandleAge} place ="Enter your Age" /> </p>
            <p>Gender : <RadioButton /> Male <RadioButton /> Female </p>
            <p>Height : <TextFeild fn={HandleHeight}  place ="Enter Height in CM " /> </p>
            <p>Weight : <TextFeild fn={HandleWeight} place ="Enter Weight in KG " /> </p>
            <div className='output row col-1' >
                <Button fn={BmiCalculate}  value="Calculate " />
                <Button value = "Clear" />
            </div>
    </div>
)
}

export default BmiPage

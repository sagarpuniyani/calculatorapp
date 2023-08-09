import React, { useState } from 'react'
import TextFeild from '../components/TextFeild'
import RadioButton from '../components/RadioButton'
import Button from '../components/Button'
import Output from '../components/Output'

const BmiPage = () => {

    //  There are three different function to be make so that {To Take the Input Of the Data }
    
    // let height = 180;
    // let weight = 65;
    // let Age = 25;
    // let BmiValue = 20.06;
    // let Message = "Normal Weight ";

    const [height , setheight ] = useState(180);
    const [weight , setweight ] = useState(65);
    const [Age , setAge ] = useState(25);
    const [BmiValue , setBmiValue ] = useState(20.06);
    const [Message , setMessage ] = useState("Category of Body Mass Index ");
    
    const HandleHeight = (data) =>{
        //  1. For  handle the height 
        // height = data;
        setheight(height => data);
        if(height <=0 ){
            // height = 0;
            setheight(height => 180);
        }
        // console.log("Height = " , height )
    }
    
    const HandleWeight = (data) =>{
        //  2. For Handle the weight 
        // weight = data;
        setweight(weight => data)
        if(weight <=0 ){
            // weight = 0;
            setweight(weight => 65)
        }
        // console.log("weight = " , weight )
        
    }
    
    const HandleAge = (data) =>{
        //  3. For Handle the Age 
        // Age = data;
        setAge(Age => data)
        if(Age <=0 ){
            // Age = 0;
            setAge(Age => 25);
        }
        else if(Age > 120 ){
            // Age = 120;
            setAge(Age => 25);
        }
        // console.log("Age = " , Age )
        
    }

    // Now design the Function to calculate the Bmi of the person 
    const BmiCalculate = ()=>{
        // BmiValue = (((weight)/(height*height))*10000);
        // BmiValue = Number(BmiValue.toFixed(1));

        setBmiValue(BmiValue => Number((((weight)/(height*height))*10000).toFixed(3))); 
        // console.log("I am BmiCalculate" , BmiValue);
    }

    // Now We Have To Tell That At which Category of BMI 
    const DeliveyMessage = ()=> {
        if(BmiValue < 16.5 ){
            setMessage(Message => "Severely underweight ");
        }
        else if(BmiValue < 18.5){
            setMessage(Message => "Underweight ");
        }
        else if(BmiValue < 24.9){
            setMessage(Message => "Normal weight ");
        }
        else if(BmiValue < 29.9){
            setMessage(Message => "Overweight");
        }
        else if(BmiValue < 34.9){
            setMessage(Message => "Obesity class I ");
        }
        else if(BmiValue < 39.9){
            setMessage(Message => "Obesity class II ");
        }
        else {
            setMessage(Message => "Obesity class III ");            
        }
    }

    const Icons = <i class="fa-solid fa-calculator"></i>;
return (
    <div className='container  '>

            <p>Age :  <TextFeild fn={HandleAge} place ="Enter your Age" /> </p>
            <p>Gender : <RadioButton /> Male <RadioButton /> Female </p>
            <p>Height : <TextFeild fn={HandleHeight}  place ="Enter Height in CM " /> </p>
            <p>Weight : <TextFeild fn={HandleWeight} place ="Enter Weight in KG " /> </p>
            <div className='output row m-1 ' >
                <Button classname="row col-1 m-2 btn btn-success" Func={DeliveyMessage} fn={BmiCalculate}  value="Calculate" icon={Icons} / >
                <Button classname="row col-1 m-2 btn btn-info" value = "Clear" />
            </div>
            <Output heightIs= {height} WeightIs = {weight}  AgeIs = {Age}  Bmi = {BmiValue} MessageIs={Message} />
    </div>
);
};

export default BmiPage

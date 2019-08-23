import React, {useState}from "react";
import data from './../../../data'
import NumberButton from "./NumberButton";
//import any components needed

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [nums] = useState(data.numbers)
 const wrapperStyles={
  display: 'flex',
  flexWrap:'wrap',
  justifyContent: 'space-between'
 }

  return (
    <div className ='wrapper' style={wrapperStyles}> 
      {nums.map((n, i)=>{
       return <NumberButton 
                key = {i}
                calNumbers = {n}
                //we pass props from the App.js into child component as a props
                thisNumber = {props.thisNumber}
                />
      })}
    </div>
  );
};


export default Numbers;
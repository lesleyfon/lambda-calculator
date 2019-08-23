import React, {useState}from "react";
import data from './../../../data'
import NumberButton from "./NumberButton";
//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {

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
                />
      })}
      
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};


export default Numbers;
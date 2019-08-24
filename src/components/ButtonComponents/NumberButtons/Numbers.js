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
 const zeroStyle = {
   width: '175px',
   background: '#184379',
   borderColor: '#184379',
   color: 'white'
 }
  return (
    <div className ='wrapper' style={wrapperStyles}> 
      {nums.map((n, i)=>{
        
       return  i === 9 ? <NumberButton 
                key = {i}
                calNumbers = {n}
                style = {zeroStyle}
                thisNumber = {props.thisNumber}
                /> :
                <NumberButton 
                key = {i}
                calNumbers = {n}
                thisNumber = {props.thisNumber}
                />
      })}
    </div>
  );
};


export default Numbers;
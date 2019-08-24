import React from "react";
// import { tsPropertySignature } from "@babel/types";

const SpecialButton = props => {

  function handleSpecialsClick(sign){
    return props.thisSpecials(sign)
  }
  const specialStyles = {
    backgroundColor: '#235d9e',
    borderColor: "#184379",
    color: '#ffffff'
  }
  return (
    <>
      <button 
        style ={specialStyles}
        onClick= {()=>{
        handleSpecialsClick(props.special)
        }}>
        {props.special}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};


export default SpecialButton;
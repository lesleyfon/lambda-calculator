import React from "react";



const NumberButton = (props) => {
  const numStyes = {
    background: '#184379',
    borderColor: '#184379',
    color: 'white'
  }

  // this function returs the current number when we click on it
  function handleNumbersClick(number){
   return props.thisNumber(number);
  }
  return (
    <button 
      // inline styles
      style ={props.style || numStyes}   
      // onclick a specific button we call  the handleNumberClick and pass it that number
      onClick={ ()=> {
        handleNumbersClick(props.calNumbers)
      }}>
      {props.calNumbers}
    </button>
      // {/* Display a button element rendering the data being passed down from the parent container on props */}
    
  );
};

export default NumberButton;


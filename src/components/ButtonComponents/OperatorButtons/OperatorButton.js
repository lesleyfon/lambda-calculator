import React from "react";

const OperatorButton = (props) => {
  const btnStyes = {
    marginRight:'0px'
  }
  return (
    <>
      <button style={btnStyes} onClick={()=>{console.log(props.sign)}}> {props.sign} </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;

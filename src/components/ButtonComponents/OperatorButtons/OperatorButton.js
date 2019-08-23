import React from "react";

const OperatorButton = (props) => {
  const btnStyes = {
    marginRight:'0px'
  }
  return (
    <>
      <button style={btnStyes}> {props.sign} </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;

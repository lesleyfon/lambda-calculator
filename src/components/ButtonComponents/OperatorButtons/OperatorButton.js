import React from "react";

const OperatorButton = (props) => {
  const btnStyes = {
    marginRight:'0px',
    backgroundColor: '#247293',
    color: 'white', 
    borderColor: 'rgb(36, 114, 147)'

  }
  function handleOperatorClick(sign){
 
    return props.thisOperator(sign);
  }
  return (
    <>
      <button 
        style={btnStyes} 
        onClick={()=>{
          handleOperatorClick(props.value)
        }}> {props.sign} </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;

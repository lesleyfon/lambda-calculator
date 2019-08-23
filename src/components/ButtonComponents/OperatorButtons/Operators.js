import React, {useState}from "react";
import operatorsign  from './../../../data'
import OperatorButton from './OperatorButton'

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  
  const [signs] = useState(operatorsign.operators );

  const operatorStyles = {
    display: 'flex',
    flexFlow: 'column',
    // width: '15%',
    
    }
  // STEP 2 - add the imported data to state
  return (
    <div style={operatorStyles}>
      {
        signs.map((e, i)=>{
          return <OperatorButton
                    sign ={ e.char}
                    value = {e.value }
                    key = {i}
                    thisOperator = {props.thisOperator}
                />
        })
      }
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;

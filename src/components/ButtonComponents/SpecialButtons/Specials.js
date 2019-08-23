import React, {useState}from "react";

import SpecialButton from './SpecialButton'
import specialSymbols from './../../../data'
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specialSymbols.specials);
  const numberStyles = {
    display: 'flex',
    justifyContent:'space-between'
  }
  return (
    <div style ={numberStyles}>
      {
        specialState.map((characters, i )=>{
          return <SpecialButton 
                    special = {characters}
                    key = {i}
                    thisSpecials = {props.thisSpecials}
                  />
        })
      }
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};


export default Specials;
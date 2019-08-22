import React, {useState}from "react";

import SpecialButton from './SpecialButton'
import specialSymbols from './../../../data'
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specialSymbols.specials);

  return (
    <div>
      {
        specialState.map(characters =>{
          return <SpecialButton 
                    special = {specialState}
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
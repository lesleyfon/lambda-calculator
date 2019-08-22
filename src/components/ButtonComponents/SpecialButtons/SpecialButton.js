import React from "react";
import { tsPropertySignature } from "@babel/types";

const SpecialButton = props => {
  return (
    <>
      <button>{props.special}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};


export default SpecialButton;
import React from "react";

const Display = () => {
    const displaStles={
      width: '90%',
      background: '#323335',
      margin: '0 auto',
      height: '100px',
      borderRadius: '50px'
    }
  return <div className='display' style={displaStles}>
          {/* Display any props data here */}
          </div>;
};

export default Display;
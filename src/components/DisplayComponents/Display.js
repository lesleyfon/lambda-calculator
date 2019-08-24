import React from "react";

const Display = (props) => {
    const displaStles={
      background: '#323335',
      margin: '0 auto',
      height: '100px',
      borderRadius: '50px',
      display: 'flex',
      justifyContent:' flex-end'
     
    }
    const headerStyles = {
      marginRight: '20px',
      marginTop: '30px',
      color: 'white'
    }
 
  return (
          <div className='display' style={displaStles}>
            {props.symbol === '=' ? <h1 style = { headerStyles } >  { props.total } </h1> : <h1 style = { headerStyles }> { props.all } </h1> } 
          </div>)
};
// {props.total}  { props.firstEntry}{props.symbols}{props.secondEntry} 
export default Display;
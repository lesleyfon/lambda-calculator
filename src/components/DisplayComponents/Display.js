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
    let somearr =[]
    function calculate(f, s){
    somearr.push(props.total)
    somearr.push(s)
      
    return  eval(somearr[0] + somearr[1])   
    }
    let s 
    if(props.symbols === '='){
      console.log(props.isCalculate)
      props.setIsCalculate(!props.isCalculate)
      props.reset();
      s = calculate(props.firstEntry, props.secondEntry)
      return s
    }
 
  return (
          <div className='display' style={displaStles}>
             {props.isCalculate ? <h1 style = {headerStyles}> 
              { props.firstEntry}{props.symbols}{props.secondEntry} 
          </h1> : 
          <h1 style = {headerStyles}> 
            {calculate(props.firstEntry, props.secondEntry)}
          </h1>  }
          </div>)
};
// {props.total}  { props.firstEntry}{props.symbols}{props.secondEntry} 
export default Display;
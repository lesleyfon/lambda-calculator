import React, {useState} from "react";

import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators'
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";


const containerStyeles = {
  backgroundColor: '#a71d36',
  width: '470px',
  margin: '0 auto',
  padding: '35px'
}

const appStyles = {
  margin: '0 auto',
  height: '100%',
  display: 'flex',
  justifyContent: "space-around"
}

const left ={
  width : '22.25%'
}
const right = {
  width :'72.25%'
}
function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [ all, setAll ] = useState('');
  const [symbol, setSympol] = useState('')
  const [total, setTotal] = useState(0)
  
  // function returns a whatever is passed in it onclick.
  function thisNumber(num){
    setAll(all + num)
  }
  function thisOperator(operator){  
    setSympol(operator)
    setAll(all + operator)
    if (operator ==='='){
      let l = eval(all)
      setTotal(l)
      reset()
    }
  }
   function thisSpecials(special){ 
    return special
   }
   function reset(){
     setAll('')
   }
   
   // End of Click Functions
  return (
    <div className="container" style={containerStyeles}>
      <Logo />
      <Display
        reset = {reset}
        all = {all}
        symbol = {symbol}
        total = {total}
      />
      <div className="App" style={appStyles}>
        <div className = 'specialNumbers' style={right} >
          <Specials 
          thisSpecials = {thisSpecials}
          />
          <Numbers 
            thisNumber = {thisNumber}
          />
        </div>
        <Operators 
          style={left}
          thisOperator = {thisOperator}
        />
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
    </div>
  );
}

export default App;

// import React from "react";

import React, { useState } from 'react';

import data from "../../../data"

import OperatorButton from './OperatorButton'

const operators = data.operators;

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorsState, setOperatorsState] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div>

      {operators.map((e) => {
        return <OperatorButton operator={e}/>
      })
        
        
        
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;
// import React from "react";

import React, { useState } from 'react';

import NumberButton from './NumberButton'

import data from "../../../data" 

// import NumberButton from "./NumberButton";
const numbers = data.numbers;


//Import your array data to from the provided data file

const Numbers = () => {
  const [numberState, setNumberState] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div>
      
      {numbers.map((e) => {
         return <NumberButton number={e} />
      })
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;

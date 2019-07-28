// import React from "react";

import React, { useState } from 'react';

import data from "../../../data"

import SpecialButton from './SpecialButton'

const specials = data.specials;

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specialsState, setSpecialsState] = useState(specials);
  // STEP 2 - add the imported data to state

  return (
    <div>
      {specials.map((e) =>{
        return <SpecialButton special={e}/>
      })
        
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials;
import React from "react";

const NumberButton = (props) => {
  return (
    <>
    <button className='button1'>
      {props.number}
    </button>
    </>
  );
};


export default NumberButton;

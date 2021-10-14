import React from "react";

interface Islider {
  current: Number;
  length: Number;
  moveFunc: (cursor: number) => any;
}

const Slider = ({ current, length, moveFunc }: Islider) => {
  let result = [];

  for (let i = 0; i < length; i++) {
    if (i === current) {
      result.push(
        <button 
          className="circle highlighted"
          onClick={ () => moveFunc(i) }
         />
      );
    } else {
      result.push(
        <button 
          className="circle normal"
          onClick={ () => moveFunc(i) }
         />
      );
    }
  }

  return <div className="slider_layout">{result}</div>;
};

export default Slider;

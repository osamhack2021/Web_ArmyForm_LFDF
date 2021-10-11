import React from "react";

interface Islider {
  current: Number;
  length: Number;
  moveFunc: (cursor: number) => any;
}

const SurveySlider = ({ current, length, moveFunc }: Islider) => {
  let result = [];

  let className = current === 0 ? "rect highlighted" : "rect normal";
  result.push(
    <button
      className={ className }
      onClick={ () => moveFunc(0) } 
    />
  );

  for (let i = 1; i < length; i++) {
    className = current === i ? "circle highlighted" : "circle normal";
    result.push(
      <button
        className={ className }
        onClick={ () => moveFunc(i) } 
      />
    );
  }

  return <div className="slider_layout">{result}</div>;
};

export default SurveySlider;
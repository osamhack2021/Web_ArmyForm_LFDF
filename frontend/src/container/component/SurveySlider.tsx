import React from "react";

const SurveySlider = ({current, length}) => {
  let result = [];

  let className = current === 0 ? "rect highlighted" : "rect normal";
  result.push(<button className={className} />);

  for(let i = 1; i < length; i++){
    className = current === i ? "circle highlighted" : "circle normal";
    result.push(<button className={className} />);
  }

  return (
    <div className="slider_layout">
      {result}
    </div>
  )
}

export default SurveySlider;
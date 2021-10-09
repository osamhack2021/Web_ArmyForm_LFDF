import React from "react";

const Slider = ({current, length}) => {
  let result = [];
  
  for(let i = 0; i < length; i++){
    if(i === current){
      result.push(<button className="circle highlighted" />);
    }
    else{
      result.push(<button className="circle normal" />);
    }
  }

  return (
    <div className="slider_layout">
      {result}
    </div>
  )
}

export default Slider;
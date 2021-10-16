import React from "react";
import Graph from "./GraphFunction";

interface Idata {
  data: any[];
}

const VerticalBarGraph = ({data}: Idata) => {
  let graph = [];
  const colors = Graph.getColors(data.length);
  const tableStyle = {
    width: Math.round(100/data.length)+"%"
  };
  
  for (let i = 0; i < data.length; i++) {
    const barStyle = {
      height: data[i].value+"%",
      background: colors[i],
    };
    
    graph.push(
      <div className="table_col" style={tableStyle}>
        <div className="bar_layout">
          <div className="bar" style={barStyle}>{barStyle.height}</div>
        </div>
        <div className="field">{data[i].name}</div>
      </div>
    );
  }
  
  return (
    <div className="vertical_bar_layout">{graph}</div>
  )
};

export default VerticalBarGraph;
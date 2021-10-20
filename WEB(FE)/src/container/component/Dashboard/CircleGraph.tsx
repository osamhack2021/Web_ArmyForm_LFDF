import React from "react";
import Graph from "./GraphFunction";

interface Idata {
  data: any[];
}

const getGraph = (data: any, colors: string[]) => {
  let result = [];
  let sum = 0;
  let nextSum = 0;

  for (let i = 0; i < data.length; i++) {
    nextSum = sum+data[i].value;
    result.push(colors[i] +" "+ sum +"% "+ nextSum +"%");
    sum = nextSum; 
  }

  return "conic-gradient(" +result.join(", ")+ ")";
};

const CircleGraph = ({data}: Idata) => {
  let graphList = [];
  const colors = Graph.getColors(data.length);
  const circleStyle = {
    background: getGraph(data, colors),
  };

  for (let i = 0; i < data.length; i++) {
    const colorBox = {
      background: colors[i]
    } 
    
    graphList.push(
      <div className="table_row">
        <div className="color_box" style={colorBox}></div>
        <div>{data[i].name}</div>
      </div>
    );
  }

  return (
    <div className="circle_graph_layout">
      <div className="circle_graph" style={circleStyle}></div>
      <div>{graphList}</div>
    </div>
  )
}

export default CircleGraph;
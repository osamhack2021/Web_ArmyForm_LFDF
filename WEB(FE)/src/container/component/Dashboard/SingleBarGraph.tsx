import React from "react";
import Graph from "./GraphFunction";

interface Idata {
  data: any[];
}

const SingleBarGraph = ({data}: Idata) => {
  const colors = Graph.getColors(data.length);
  let graph = [];
  let field = [];
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    sum += data[i].value;

    const style = {
      width: sum+"%",
      background: colors[i],
    };

    const size = {
      width: data[i].value+"%",
    };
    
    graph.push(<div style={style}></div>);
    field.push(<div style={size}>{data[i].name}</div>);
  }
  graph.reverse();
  
  return (
    <div className="single_bar_layout">
      <div className="bar_layout">{graph}</div>
      <div className="field_layout">{field}</div>
    </div>
  )
};

export default SingleBarGraph;
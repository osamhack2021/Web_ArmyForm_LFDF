import React from "react";
import Graph from "./GraphFunction";

interface Idata {
  data: any[];
}

const HorizentalBarGraph = ({data}: Idata) => {
  let graph = [];
  const colors = Graph.getColors(data.length);
  const maxValue = Graph.getMaxValue(data);

  for (let i = 0; i < data.length; i++) {
    const barStyle = {
      width: (data[i].value/maxValue * 100)+"%",
      background: colors[i],
    };
    
    graph.push(
      <div className="table_row">
        <div className="field">{data[i].name}</div>
        <div className="bar_layout">
          <div style={barStyle}>{Math.round(data[i].value)+"%"}</div>
        </div>
      </div>
    );
  }

  return (
    <table className="horizontal_bar_layout">{graph}</table>
  )
};

export default HorizentalBarGraph;
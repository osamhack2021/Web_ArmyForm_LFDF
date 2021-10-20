import React from "react";
import Graph from "./GraphFunction";

import CircleGraph from "container/component/Dashboard/CircleGraph";
import SingleBarGraph from "container/component/Dashboard/SingleBarGraph";
import VerticalBarGraph from "container/component/Dashboard/VerticalBarGraph";
import HorizentalBarGraph from "container/component/Dashboard/HorizentalBarGraph";

interface Idata {
  data: any[];
}

const GraphSelector = ({ data }: Idata) => {
  console.log(data);
  const numArr = Graph.getNumberArray(data);
  const sd = Graph.getStandardDeviation(numArr);

  if (sd > 35) {
    return <HorizentalBarGraph data={data} />;
  } else if (sd > 25) {
    return <VerticalBarGraph data={data} />;
  } else if (sd > 20) {
    return <SingleBarGraph data={data} />;
  } else {
    return <CircleGraph data={data} />;
  }
};

export default GraphSelector;

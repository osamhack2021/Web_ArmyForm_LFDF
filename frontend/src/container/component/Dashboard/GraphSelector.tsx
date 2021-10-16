import React from "react";

import CircleGraph from "container/component/Dashboard/CircleGraph"
import SingleBarGraph from "container/component/Dashboard/SingleBarGraph"
import VerticalBarGraph from "container/component/Dashboard/VerticalBarGraph"
import HorizentalBarGraph from "container/component/Dashboard/HorizentalBarGraph"

interface Idata {
  data: any[];
}

const GraphSelector = ({data}: Idata) => {
  switch(data.length){
      case 2:
        return <SingleBarGraph data={data} />
  }
};

export default GraphSelector;
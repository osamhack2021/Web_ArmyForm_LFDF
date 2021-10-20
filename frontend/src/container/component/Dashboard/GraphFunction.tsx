const GraphFunction = {
  getColors: (count: number) => {
    const hue = 168;
    const sat = 75.8;

    //const rh = Math.floor(Math.random()*256);
    //const rs = Math.random()*100;

    let result = [];

    for (let i = 0; i < count; i++) {
      const lig = (90-35.7)/(count-1)*i + 35.7;
      result.push("hsl("+hue+", "+sat+"%, "+lig+"%)");
    }

    return result;
  },
  getNumberArray: (data: any) => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(data[i].value);
    }
    return result;
  },
  modifyDataSet: (data: number[], func: (value: number) => number) => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(func(data[i]));
    }
    return result;
  },
  getMaxValue: (data: any[]) => {
    let max = 0;
    for (let i = 0; i < data.length; i++) {
      if(max < data[i].value) max = data[i].value;
    }
    return max;
  },
  getMean: (data: number[]) => {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
      result += data[i];
    }
    return result / data.length;
  },
  getVariance: (data: number[]) => {
    const E_sqr = GraphFunction.modifyDataSet(data, i => i*i);

    return GraphFunction.getMean(E_sqr) - GraphFunction.getMean(data);
  },
  getStandardDeviation: (data: number[]) => {
    return Math.sqrt(GraphFunction.getVariance(data));
  },
};

export default GraphFunction;
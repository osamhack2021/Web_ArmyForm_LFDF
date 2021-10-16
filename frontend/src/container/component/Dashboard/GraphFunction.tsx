const GraphFunction = {
  getMaxValue: (data: any[]) => {
    let max = 0;
    for (let i = 0; i < data.length; i++) {
      if(max < data[i].value) max = data[i].value;
    }
    return max;
  },
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
  }
};

export default GraphFunction;
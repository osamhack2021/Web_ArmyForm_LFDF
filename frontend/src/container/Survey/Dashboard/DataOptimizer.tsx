const getOptimizeData = (surveyData: any[]) => {
  let dataArr = [];
  let dataSheet = [];
  for (let i = 0; i < surveyData.length; i++) {
    const index = dataArr.indexOf(surveyData[i]);

    if (index < 0) {
      dataSheet.push({
        name: surveyData[i],
        value: 1,
      });

      dataArr.push(surveyData[i]);
    } else {
      dataSheet[index].value++;
      // console.log(dataSheet[index].value);
    }
  }

  for (let i = 0; i < dataSheet.length; i++) {
    dataSheet[i].value /= surveyData.length;
    dataSheet[i].value *= 100;
  }

  return dataSheet;
};

const mappingData = (data: any[], map: any[]) => {
  for (let i = 0; i < data.length; i++) {
    data[i].name = map[data[i].name];
  }

  return data;
};

const optimize = (data: any) => {
  for (let pg = 0; pg < data.pages.length; pg++) {
    for (let el = 0; el < data.pages[pg].elements.length; el++) {
      const index_data = data.pages[pg].elements[el];

      data.pages[pg].elements[el].value = getOptimizeData(index_data.value);

      if (index_data.choices != null) {
        data.pages[pg].elements[el].value = mappingData(
          index_data.value,
          index_data.choices
        );
      }
    }
  }
  console.log(data);
  return data;
};

export default optimize;

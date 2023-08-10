const originalData = require("./data/data1.json");

function transformOriginalData(originalData) {
  const transformedData = {
    code: originalData.code,
    msg: originalData.msg,
    data: {},
  };

  originalData.data.forEach((item) => {
    const [category, action] = item.name.split(".");
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

    if (!transformedData.data[categoryName]) {
      transformedData.data[categoryName] = [];
    }

    transformedData.data[categoryName].push({
      id: item.id,
      name: action.charAt(0).toUpperCase() + action.slice(1),
      html_id: item.name,
    });
  });

  return JSON.stringify(transformedData, null, 4);
}

const transformedData = transformOriginalData(originalData);

// console.log(JSON.stringify(transformedData, null, 4));

modules.export = transformOriginalData;

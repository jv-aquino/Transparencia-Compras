const csvToJson = require('csvtojson');
const fs = require('fs');

const equipeCSV = "./src/data/equipe.csv"; 
const equipeJSON = "./src/data/equipe.json";

const faqCSV = "./src/data/faq.csv";
const faqJSON = "./src/data/faq.json";

csvToJson().fromFile(equipeCSV).then((jsonObj) => {
  jsonObj = JSON.stringify(jsonObj);

  fs.writeFile(equipeJSON, jsonObj, () => {});
});

csvToJson().fromFile(faqCSV).then((jsonObj) => {
  jsonObj = JSON.stringify(jsonObj);

  fs.writeFile(faqJSON, jsonObj, () => {});
});
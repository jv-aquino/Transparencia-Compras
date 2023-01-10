const csvToJson = require('csvtojson');
const fs = require('fs');

const equipeCSV = "./data/equipe.csv"; 
const equipeJSON = "./data/equipe.json";

const faqCSV = "./data/faq.csv";
const faqJSON = "./data/faq.json";

csvToJson().fromFile(equipeCSV).then((jsonObj) => {
  jsonObj = JSON.stringify(jsonObj);

  fs.writeFile(equipeJSON, jsonObj, () => {});
});

csvToJson().fromFile(faqCSV).then((jsonObj) => {
  jsonObj = JSON.stringify(jsonObj);

  fs.writeFile(faqJSON, jsonObj, () => {});
});
const csvToJson = require('convert-csv-to-json');

const equipeCsv = "./data/equipe.csv"; 
const equipeJSON = "./data/equipe.json";

const faqCsv = "./data/faq.csv";
const faqJSON = "./data/faq.json";

csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(equipeCsv, equipeJSON);
csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(faqCsv, faqJSON);
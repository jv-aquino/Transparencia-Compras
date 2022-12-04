const csvToJson = require('convert-csv-to-json');

const fileInputName = "./data/equipe.csv"; 
const fileOutputName = "./data/equipe.json";

csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName, fileOutputName);
const { ExportToCsv } = require('export-to-csv');
const os = require('os');
const path = require('path');
const desktopDir = path.join(os.homedir(), "Desktop");
const fs = require('fs');

const renameKey = (obj, old_key, new_key) => {
  if (old_key !== new_key) {
    Object.defineProperty(obj, new_key,
      Object.getOwnPropertyDescriptor(obj, old_key));
    delete obj[old_key];
  }
};

const convertToCSV = (data , headers , title) =>{
  const options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: `${title}`,
    useTextFile: false,
    useBom: true,
    filename: title,
    useKeysAsHeaders: true,
    headers: headers
  };
  const csvExporter = new ExportToCsv(options);
  const file = csvExporter.generateCsv(data , true);
  fs.writeFileSync(`${desktopDir}/reports.csv` , file , {encoding: 'utf8'});
};

const exportCSVFile = (data, headers , title) =>{
  convertToCSV(data , headers , title);
};

module.exports = {
  renameKey,
  exportCSVFile
};
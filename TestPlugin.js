const PluginManager = require('./src/api/index');

(async() =>{
  const reports = await PluginManager.getReports()
  const reportsByCountries = await PluginManager.getReportsByCountries('us');
  const deaths = await PluginManager.getDeaths();
  const situationsReports = await PluginManager.getSituationReports();
})();

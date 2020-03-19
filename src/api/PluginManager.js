class PluginManager {
  constructor(plugins){
    this.plugins = plugins;
  };

  async getReports(){
    const res = await Promise.all(this.plugins.map(plugin => plugin.reports()));
    return res;
  };

  async getReportsByCountries(country){
    const res = await Promise.all(this.plugins.map(plugin => plugin.reportsByCountries(country)));
    return res;
  };

  async getDeaths(){
    const res = await Promise.all(this.plugins.map(plugin => plugin.deaths()));
    return res;
  };

  async getSituationReports(){
    const res = await Promise.all(this.plugins.map(plugin => plugin.situationReports()));
    return res;
  };

  async getTaskForceInfoUS(){
    const res = await Promise.all(this.plugins.map(plugin => plugin.TaskForceUS()));
    return res;
  };

  async getGlobalData(){
    const res = await Promise.all(this.plugins.map(plugin => plugin.globalData()));
    return res;
  };

  async getTestsInUS(){
    const res = await Promise.all(this.plugins.map(plugin => plugin.testsInUS()));
    return res;
  };

  async getFatalityRateByAge(){
    const res = await Promise.all(this.plugins.map(plugin => plugin.fatalityRateByAge()));
    return res;
  };

  async getFatalityRateBySex(){
    const res = await Promise.all(this.plugins.map(plugin => plugin.fatalityRateBySex()));
    return res;
  };

  async getFatalityRateByComorbidities(){
    const res = await Promise.all(this.plugins.map(plugin => plugin.fatalityRateByComorbidities()));
    return res;
  };

  async getCountriesWhereCoronavirusHasSpread(){
    const res = await Promise.all(this.plugins.map(plugin => plugin.countriesWhereCoronavirusHasSpread()));
    return res;
  };
}

module.exports = PluginManager;
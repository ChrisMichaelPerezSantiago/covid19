const express = require('express');
const routes = require('./routes/index');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'COVID19 API - 👋🌎🌍🌏',
    author: 'Chris Michael',
    entries: [
      {
        'AllReports': '/api/v1/AllReports',
        'Deaths': '/api/v1/Deaths',
        'ReportsByCountries': '/api/v1/ReportsByCountries/:country',
        'SituationReports': '/api/v1/SituationReports',
        'TaskForceInfoUS': '/api/v1/TaskForceInfoUS',
        'GlobalDataReports': '/api/v1/GlobalDataReports',
        'TestsInUS': '/api/v1/TestsInUS',
        'FatalityRateByAge': '/api/v1/FatalityRateByAge',
        'FatalityRateBySex': '/api/v1/FatalityRateBySex',
        'FatalityRateByComorbidities': '/api/v1/FatalityRateByComorbidities',
        'CountriesWhereCoronavirusHasSpread': '/api/v1/CountriesWhereCoronavirusHasSpread',
        'TravelHealthNotices': '/api/v1/TravelHealthNotices',
        'AllCasesInAmerica': '/api/v1/AllCasesInAmerica',
        'AllCasesInEurope': '/api/v1/AllCasesInEurope',
        //'CaseStatusUndeEvalutationInPR': '/api/v1/CaseStatusUndeEvalutationInPR',
        'CasesInAllUSStates': '/api/v1/CasesInAllUSStates',
        'CapacityInfoUSHealthFacilities': '/api/v1/CapacityInfoUSHealthFacilities',
        'AggregatedFacilityCapacityCounty': '/api/v1/AggregatedFacilityCapacityCounty',
        'JohnsHopkinsDataDailyReport': '/api/v1/JohnsHopkinsDataDailyReport',
        'PRGeneralResults': '/api/v1/PRGeneralResults',
        'PRDataByRegions': '/api/v1/PRDataByRegions',
        'PRDataBySex': '/api/v1/PRDataBySex',
      }
    ]
  });
});

router.use('/', routes);

module.exports = router;
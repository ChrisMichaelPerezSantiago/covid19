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
        'PRDataByTowns': '/api/v1/PRDataByTowns',
        'PRExtraData': '/api/v1/PRExtraData',
        'IndiaCasesByStates': '/api/v1/IndiaCasesByStates',
        'SpainCasesByCommunities': '/api/v1/SpainCasesByCommunities',
        'AustraliaCasesByStates': '/api/v1/AustraliaCasesByStates',
        'CanadaCasesByProvincesAndHealthRegion': '/api/v1/CanadaCasesByProvincesAndHealthRegion',
        'JapanCasesByPrefecture': '/api/v1/JapanCasesByPrefecture',
        'NewZealandCasesByDistrictHealthBoard': '/api/v1/NewZealandCasesByDistrictHealthBoard',
        'UnitedStateCasesByStates': '/api/v1/UnitedStateCasesByStates',
        'GermanyCasesByRegion': '/api/v1/GermanyCasesByRegion',
        'SwedenCasesByRegion': '/api/v1/SwedenCasesByRegion',
        'SlovakiaCasesByDistrict': '/api/v1/SlovakiaCasesByDistrict',
        'PortugalCasesByRegion': '/api/v1/PortugalCasesByRegion',
        'PolandCasesByRegion': '/api/v1/PolandCasesByRegion',
        'PalestineCasesByRegion': '/api/v1/PalestineCasesByRegion',
        'NorwayCasesByRegion': '/api/v1/NorwayCasesByRegion',
        'BrazilCasesByRegion': '/api/v1/BrazilCasesByRegion',
        'AlgeriaCasesByRegion': '/api/v1/AlgeriaCasesByRegion',
        'CivicFreedomTracker': '/api/v1/CivicFreedomTracker',
      }
    ]
  });
});

router.use('/', routes);

module.exports = router;
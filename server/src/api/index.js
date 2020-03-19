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
        'FatalityRateByAge': 'FatalityRateByAge'
      }
    ]
  });
});

router.use('/', routes);

module.exports = router;
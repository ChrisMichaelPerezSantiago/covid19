const express = require('express');
const router = express.Router();
const PluginManager = require('../api');

router.get('/AllReports' , (req , res) =>{
  PluginManager.reports()
    .then(reports =>{
      res.status(200).json({
        reports
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/Deaths' , (req , res) =>{
  PluginManager.deaths()
    .then(deaths =>{
      res.status(200).json({
        deaths: deaths[0]
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/ReportsByCountries/:country' , (req , res) =>{
  const country = req.params.country;
  PluginManager.reportsByCountries(country)
    .then(report =>{
      res.status(200).json({
        report: report[0]
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/SituationReports' , (req , res) =>{
  PluginManager.situationReports()
    .then(reports =>{
      res.status(200).json({
        reports: reports
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/TaskForceInfoUS' , (req , res) =>{
  PluginManager.TaskForceUS()
    .then(doc =>{
      res.status(200).json({
        doc: doc
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/GlobalDataReports' , (req , res) =>{
  PluginManager.globalData()
    .then(reports =>{
      res.status(200).json({
        reports: reports
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/TestsInUS' , (req , res) =>{
  PluginManager.testsInUS()
    .then(tests =>{
      res.status(200).json({
        tests: tests[0]
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/FatalityRateByAge' , (req , res) =>{
  PluginManager.fatalityRateByAge()
    .then(table =>{
      res.status(200).json({
        table: table
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/FatalityRateBySex' , (req , res) =>{
  PluginManager.fatalityRateBySex()
    .then(table =>{
      res.status(200).json({
        table: table
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/FatalityRateByComorbidities' , (req , res) =>{
  PluginManager.fatalityRateByComorbidities()
    .then(table =>{
      res.status(200).json({
        table: table
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/CountriesWhereCoronavirusHasSpread' , (req , res) =>{
  PluginManager.countriesWhereCoronavirusHasSpread()
    .then(table =>{
      res.status(200).json({
        table: table
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/TravelHealthNotices' , (req , res) =>{
  PluginManager.travelHealthNotices()
    .then(data =>{
      res.status(200).json({
        data: data[0].data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/AllCasesInAmerica' , (req , res) =>{
  PluginManager.allCasesInAmerica()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/AllCasesInEurope' , (req , res) =>{
  PluginManager.allCasesInEurope()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

//router.get('/CaseStatusUndeEvalutationInPR' , (req , res) =>{
//  PluginManager.caseStatusUndeEvalutationInPR()
//    .then(data =>{
//      res.status(200).json({
//        data: data
//      });
//    }).catch((err) =>{
//      console.error(err);
//    });
//});

router.get('/CasesInAllUSStates' , (req , res) =>{
  PluginManager.casesInAllUSStates()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/CapacityInfoUSHealthFacilities' , (req , res) =>{
  PluginManager.capacityInfoUSHealthFacilities()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/AggregatedFacilityCapacityCounty' , (req , res) =>{
  PluginManager.aggregatedFacilityCapacityCounty()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/JohnsHopkinsDataDailyReport' , (req , res) =>{
  PluginManager.johnsHopkinsDataDailyReport()
    .then(data =>{
      res.status(200).json({
        data: data[0]
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/PRGeneralResults' , (req , res) =>{
  PluginManager.prGeneralResults()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/PRDataByRegions' , (req , res) =>{
  PluginManager.prDataByRegion()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/PRDataBySex' , (req , res) =>{
  PluginManager.prDataBySex()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

module.exports = router;
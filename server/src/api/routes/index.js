const express = require('express');
const router = express.Router();
const PluginManager = require('../api');


/**
 *  @api {get} /AllReports Get list of all reports
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/AllReports
 *  @apiVersion 1.1.9
 *  @apiName GetAllReports
 *  @apiGroup AllReports
 *  @apiDescription Confirmed Cases and Deaths All over the world
 *  Data provided by the worldometers website
 *  
 *  @apiSuccess {Number} cases
 *  @apiSuccess {Number} deaths
 *  @apiSuccess {Number} recovered
 *  @apiSuccess {Object[]} active_cases
 *  @apiSuccess {Number} active_cases.currently_infected_patients
 *  @apiSuccess {Number} active_cases.inMidCondition
 *  @apiSuccess {Number} active_cases.criticalStates
 *  @apiSuccess {Object[]} closed_cases
 *  @apiSuccess {Number} closed_cases.cases_which_had_an_outcome
 *  @apiSuccess {Number} closed_cases.recovered
 *  @apiSuccess {Number} closed_cases.deaths
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.TotalCases
 *  @apiSuccess {String} table.NewCases
 *  @apiSuccess {String} table.TotalDeaths
 *  @apiSuccess {String} table.NewDeaths
 *  @apiSuccess {String} table.TotalRecovered
 *  @apiSuccess {String} table.ActiveCases
 *  @apiSuccess {String} table.TotalTests
 *  @apiSuccess {String} table.Continent
 *  @apiSuccess {String} table.Deaths_1M_pop
 *  @apiSuccess {String} table.Country
 *  @apiSuccess {String} table.Serious_Critical
 *  @apiSuccess {String} table.Tests_1M_Pop
 *  @apiSuccess {String} table.TotCases_1M_Pop
 * 
 **/
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


/**
 *  @api {get} /PRDataByRegions Distribution by Health Region
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/PRDataByRegions
 *  @apiVersion 1.1.9
 *  @apiName GetPRDataByRegions
 *  @apiGroup PRDataByRegions
 *  @apiDescription Confirmed cases by region in Puerto Rico Data provided by the PR Statistics website
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.type
 *  @apiSuccess {String} table.evaluated
 *  @apiSuccess {String} table.positive
 *  @apiSuccess {String} table.negatives
 *  @apiSuccess {String} table.pending
 * 
 **/ 

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

/**
 *  @api {get} /PRDataBySex According to the Reported Sex
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/PRDataBySex
 *  @apiVersion 1.1.9
 *  @apiName GetPRDataBySex
 *  @apiGroup PRDataBySex
 *  @apiDescription Positive results according to reported sex in Puerto Rico Data provided by the PR Statistics website
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.genre
 *  @apiSuccess {String} table.total
 * 
 **/ 

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

/**
 *  @api {get} /PRDataByTowns Positive Cases by Municipality of Residence
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/PRDataByTowns
 *  @apiVersion 1.1.9
 *  @apiName GetPRDataByTowns
 *  @apiGroup PRDataByTowns
 *  @apiDescription Positive results by Municipality of Residence in Puerto Rico Data provided by the PR Statistics website and bioseguridad.maps.arcgis
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.attributes.town
 *  @apiSuccess {String} table.attributes.health_region
 *  @apiSuccess {Number} table.attributes.total_cases
 * 
 **/ 

router.get('/PRDataByTowns' , (req , res) =>{
  PluginManager.prDataByTowns()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

/**
 *  @api {get} /PRExtraData Availability of necessary items / products for each hospital
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/PRExtraData
 *  @apiVersion 1.1.9
 *  @apiName GetPRExtraData
 *  @apiGroup PRExtraData
 *  @apiDescription Availability of necessary items / products for each hospital in Puerto Rico Data provided by the PR bioseguridad.maps.arcgis
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {Number} table.T_Camas_Adult_Disp
 *  @apiSuccess {Number} table.T_Camas_Adult_Int_Disp
 *  @apiSuccess {Number} table.T_Camas_Adult_Int_Occ
 *  @apiSuccess {Number} table.T_Camas_Ped_Int_Disp
 *  @apiSuccess {Number} table.T_Camas_Ped_Int_Occ
 *  @apiSuccess {Number} table.T_Cuartos_PSINeg_Disp
 *  @apiSuccess {Number} table.T_Cuartos_PSINeg_Occ
 *  @apiSuccess {Number} table.T_Vent_Adult_Disp
 *  @apiSuccess {Number} table.T_Vent_Adult_Occ
 *  @apiSuccess {Number} table.T_Vent_Ped_Disp
 *  @apiSuccess {Number} table.T_Vent_Ped_Occ
 *  @apiSuccess {Number} table.T_Morgue_Disp
 *  @apiSuccess {Number} table.T_Morgue_Occ
 *  @apiSuccess {Number} table.T_Paciente_Adult
 *  @apiSuccess {Number} table.T_Paciente_Ped
 *  @apiSuccess {Number} table.T_Casos_Nuev_Ult_Inf
 *  @apiSuccess {Number} table.T_Casos_Nuev_DS
 *  @apiSuccess {Number} table.T_Casos_Nuev_AV
 *  @apiSuccess {Number} table.T_Casos_Nuev_LabPriv
 *  @apiSuccess {Number} table.T_Fatalidades
 *  @apiSuccess {Number} table.T_Casos_Pos
 *  @apiSuccess {Number} table.T_Casos_Neg
 *  @apiSuccess {Number} table.T_Casos_Pend
 *  @apiSuccess {Number} table.T_Casos_Inconcluso
 *  @apiSuccess {Number} table.T_Fem
 *  @apiSuccess {Number} table.T_Masc
 *  @apiSuccess {Number} table.T_Menor_10
 *  @apiSuccess {Number} table.T_10_19
 *  @apiSuccess {Number} table.T_20_29
 *  @apiSuccess {Number} table.T_30_39
 *  @apiSuccess {Number} table.T_40_49
 *  @apiSuccess {Number} table.T_50_59
 *  @apiSuccess {Number} table.T_60_69
 *  @apiSuccess {Number} table.T_70_79
 *  @apiSuccess {Number} table.T_Mayor_80
 *  @apiSuccess {Number} table.T_Vent_Ord
 *  @apiSuccess {Number} table.T_Vent_Rec
 *  @apiSuccess {Number} table.T_Vent_Entr
 *  @apiSuccess {Number} table.T_Casos
 *  @apiSuccess {Number} table.T_Prueba_Realizada
 *  @apiSuccess {Number} table.T_Camas_Ped_Disp
 *  @apiSuccess {Number} table.Edad_No_Dis
 *  @apiSuccess {Number} table.T_Defunciones_RD
 *  @apiSuccess {Number} table.T_Suicidios_RD
 *  @apiSuccess {Number} table.T_Muertes_COVID_RD
 *  @apiSuccess {Number} table.T_Cuartos_PSiNeg
 *  @apiSuccess {Number} table.T_Hospitalizados
 *  @apiSuccess {Number} table.T_Recuperados
 *  @apiSuccess {Number} table.T_Camas_Int_Adult
 *  @apiSuccess {Number} table.T_Camas_Int_Ped
 *  @apiSuccess {Number} table.T_Vent_Adult
 *  @apiSuccess {Number} table.T_Vent_Ped
 *  @apiSuccess {Number} table.T_Camas_Adult_Available
 *  @apiSuccess {Number} table.T_Camas_Ped_Available
 *  @apiSuccess {Number} table.T_DefuncionesRD_Ene
 *  @apiSuccess {Number} table.T_DefuncionesRD_Feb
 *  @apiSuccess {Number} table.T_DefuncionesRD_Mar
 *  @apiSuccess {Number} table.T_DefuncionesRD_Abr
 *  @apiSuccess {Number} table.T_Muertes_Combinadas
 *  @apiSuccess {Number} table.Sexo_No_Dis
 * 
 **/ 

router.get('/PRExtraData' , (req , res) =>{
  PluginManager.prExtraData()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

module.exports = router;
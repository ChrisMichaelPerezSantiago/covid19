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
        deaths: deaths
      });
    }).catch((err) =>{
      console.error(err);
    });
});

/**
 *  @api {get} /ReportsByCountries/:country Confirmed Cases and Deaths by Country
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/ReportsByCountries/:country
 *  @apiVersion 1.1.9
 *  @apiName GetReportsByCountries
 *  @apiGroup ReportsByCountries
 *  @apiDescription Confirmed Cases and Deaths by Country 
 * 
 *  @apiSuccess {String} country
 *  @apiSuccess {String} flag
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
 * 
 *  @apiParam {String="
 *      afghanistan, albania, algeria, andorra, angola, anguilla, antigua-and-barbuda, argentina, armenia, aruba, australia, austria, azerbaijan,
 *      bahamas, bahrain, bangladesh, barbados, belarus, belgium, belize, benin, bermuda, bhutan, bolivia, bosnia-and-herzegovina, botswana, brazil, british-virgin-islands, brunei-darussalam, bulgaria, burkina-faso, burundi,
 *      cabo-verde, cambodia, cameroon, canada, caribbean-netherlands, cayman-islands, central-african-republic, chad, channel-islands, chile, china, china-hong-kong-sar, china-macao-sar, colombia, congo, costa-rica, cote-d-ivoire, croatia, cuba, curacao, cyprus, czech-republic,
 *      democratic-republic-of-the-congo, denmark, djibouti, dominica, dominican-republic,
 *      ecuador, egypt, el-salvador, equatorial-guinea, eritrea, estonia, ethiopia,
 *      faeroe-islands, falkland-islands-malvinas, fiji, finland, france, french-guiana, french-polynesia,
 *      gabon, gambia, georgia, germany, ghana, gibraltar, greece, greenland, grenada, guadeloupe, guatemala, guinea, guinea-bissau, guyana,
 *      haiti, holy-see, honduras, hungary,
 *      iceland, india, indonesia, iran, iraq, ireland, isle-of-man, israel, italy,
 *      jamaica, japan, jordan,
 *      kazakhstan, kenya, kuwait, kyrgyzstan,
 *      laos, latvia, lebanon, liberia, libya, liechtenstein, lithuania, luxembourg,
 *      macedonia, madagascar, malawi, malaysia, maldives, mali, malta, martinique, mauritania, mauritius, mayotte, mexico, moldova, monaco, mongolia, montenegro, montserrat, morocco, mozambique, myanmar,
 *      namibia, nepal, netherlands, new-caledonia, new-zealand, nicaragua, niger, nigeria, norway,
 *      oman,
 *      pakistan, panama, papua-new-guinea, paraguay, peru, philippines, poland, portugal,
 *      qatar,
 *      reunion, romania, russia, rwanda,
 *      saint-barthelemy, saint-kitts-and-nevis, saint-lucia, saint-martin, saint-vincent-and-the-grenadines, san-marino, saudi-arabia, senegal, serbia, seychelles, sierra-leone, singapore, sint-maarten, slovakia, slovenia, somalia, south-africa, south-korea, spain, sri-lanka, state-of-palestine, sudan, suriname, swaziland, sweden, switzerland, syria,
 *      taiwan, tanzania, thailand, timor-leste, togo, trinidad-and-tobago, tunisia, turkey, turks-and-caicos-islands,
 *      uganda uk ukraine united-arab-emirates uruguay us uzbekistan,
 *      venezuela, viet-nam,
 *      zambia, zimbabwe
 *  "} country
 * 
 **/

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

/**
 *  @api {get} /SituationReports Coronavirus disease (COVID-2019) situation reports
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/SituationReports
 *  @apiVersion 1.1.9
 *  @apiName GetSituationReports
 *  @apiGroup SituationReports
 *  @apiDescription Data as received by WHO from national authorities 
 * 
 *  @apiSuccess {Object[]} reports
 *  @apiSuccess {String} reports.report
 *  @apiSuccess {String} reports.date
 *  @apiSuccess {String} reports.pdf
 * 
 **/

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

/**
 *  @api {get} /TestsInUS Reporting public health labs are 48 state public health labs
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/TestsInUS
 *  @apiVersion 1.1.9
 *  @apiName GetTestsInUS
 *  @apiGroup TestsInUS
 *  @apiDescription Reporting public health labs are 48 state public health labs (AK, AL, AR, AZ, CA, CO, CT, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, RI, SC, SD, TN, TX, VT, WA, WI, WV and WY), New York City, USAF, and 9 California counties.
 * 
 *  @apiSuccess {String} lastUpdatedDay
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.DateCollected
 *  @apiSuccess {String} table.CDCLabs
 *  @apiSuccess {String} table.USPublicHealthLabs
 * 
 **/

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

/**
 *  @api {get} /FatalityRateByAge Age of Coronavirus Deaths - COVID-19 Fatality Rate by AGE
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/FatalityRateByAge
 *  @apiVersion 1.1.9
 *  @apiName GetFatalityRateByAge
 *  @apiGroup FatalityRateByAge
 *  @apiDescription 
 *  Death Rate = (number of deaths / number of cases) = probability of dying if infected by the virus (%). This probability differs depending on the age group. The percentages shown below do not have to add up to 100%, as they do NOT represent share of deaths by age group. Rather, it represents, for a person in a given age group, the risk of dying if infected with COVID-19.
 *  Death Rate = (number of deaths / number of cases) = probability of dying if infected by the virus (%). The percentages do not have to add up to 100%, as they do NOT represent share of deaths by age group.
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.Age
 *  @apiSuccess {String} table.DeathRateConfirmedCases
 *  @apiSuccess {String} table.DeathRateAllCases
 * 
 **/

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

/**
 *  @api {get} /FatalityRateBySex Sex ratio - COVID-19 Fatality Rate by SEX
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/FatalityRateBySex
 *  @apiVersion 1.1.9
 *  @apiName GetFatalityRateBySex
 *  @apiGroup FatalityRateBySex
 *  @apiDescription 
 *  Death Rate = (number of deaths / number of cases) = probability of dying if infected by the virus (%). This probability differs depending on sex. When reading these numbers, it must be taken into account that smoking in China is much more prevalent among males. Smoking increases the risks of respiratory complications.
 *  Death Rate = (number of deaths / number of cases) = probability of dying if infected by the virus (%). The percentages do not have to add up to 100%, as they do NOT represent share of deaths by se
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.Sex
 *  @apiSuccess {String} table.DeathRateConfirmedCases
 *  @apiSuccess {String} table.DeathRateAllCases
 * 
 **/

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

/**
 *  @api {get} /FatalityRateByComorbidities COVID-19 Fatality Rate by COMORBIDITY
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/FatalityRateByComorbidities
 *  @apiVersion 1.1.9
 *  @apiName GetFatalityRateByComorbidities
 *  @apiGroup FatalityRateByComorbidities
 *  @apiDescription 
 *  Death Rate = (number of deaths / number of cases) = probability of dying if infected by the virus (%). This probability differs depending on pre-existing condition. The percentage shown below does NOT represent in any way the share of deaths by pre-existing condition. Rather, it represents, for a patient with a given pre-existing condition, the risk of dying if infected by COVID-19.
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.PreExistingCondition
 *  @apiSuccess {String} table.DeathRateConfirmedCases
 *  @apiSuccess {String} table.DeathRateAllCases
 * 
 **/

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

/**
 *  @api {get} /AllCasesInAmerica Number of COVID-19 cases in the Americas region
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/AllCasesInAmerica
 *  @apiVersion 1.1.9
 *  @apiName GetAllCasesInAmerica
 *  @apiGroup AllCasesInAmerica
 *  @apiDescription COVID 19 cases in Americas region
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.Country
 *  @apiSuccess {String} table.Confirmed
 *  @apiSuccess {String} table.Deaths
 * 
 **/

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

/**
 *  @api {get} /AllCasesInEurope Situation update for the EU/EEA and the UK
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/AllCasesInEurope
 *  @apiVersion 1.1.9
 *  @apiName GetAllCasesInEurope
 *  @apiGroup AllCasesInEurope
 *  @apiDescription COVID 19 cases in Europe region
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.Cases
 *  @apiSuccess {String} table.Deaths
 *  @apiSuccess {String} table.Country
 * 
 **/

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


/**
 *  @api {get} /CasesInAllUSStates Coronavirus cases in all US states
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/CasesInAllUSStates
 *  @apiVersion 1.1.9
 *  @apiName GetCasesInAllUSStates
 *  @apiGroup CasesInAllUSStates
 *  @apiDescription COVID 19 cases in all states of the United States
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.USAState
 *  @apiSuccess {String} table.TotalCases
 *  @apiSuccess {String} table.NewCases
 *  @apiSuccess {String} table.TotalDeaths
 *  @apiSuccess {String} table.NewDeaths
 *  @apiSuccess {String} table.ActiveCases
 *  @apiSuccess {String} table.TotalTests
 *  @apiSuccess {String} table.Tot_Cases_1M_Pop
 *  @apiSuccess {String} table.Deaths_1M_Pop
 *  @apiSuccess {String} table.Tests_1M_Pop
 * 
 **/ 

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

/**
 *  @api {get} /JohnsHopkinsDataDailyReport Johns Hopkins - Coronavirus Resource Center (CSSE COVID-19 Dataset)
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/JohnsHopkinsDataDailyReport
 *  @apiVersion 1.1.9
 *  @apiName GetJohnsHopkinsDataDailyReport
 *  @apiGroup JohnsHopkinsDataDailyReport
 *  @apiDescription This is the data for the 2019 Novel Coronavirus Visual Dashboard operated by the Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE). Also, Supported by ESRI Living Atlas Team and the Johns Hopkins University Applied Physics Lab (JHU APL).
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.Province_State
 *  @apiSuccess {String} table.Country_Region
 *  @apiSuccess {String} table.Last_Update
 *  @apiSuccess {String} table.Lat
 *  @apiSuccess {String} table.Long_
 *  @apiSuccess {String} table.Confirmed
 *  @apiSuccess {String} table.Deaths
 *  @apiSuccess {String} table.Recovered
 *  @apiSuccess {String} table.Active
 *  @apiSuccess {String} table.Combined_Key
 * 
 **/ 

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

/**
 *  @api {get} /PRGeneralResults Quantity and Percentage Distribution
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/PRGeneralResults
 *  @apiVersion 1.1.9
 *  @apiName GetPRGeneralResults
 *  @apiGroup PRGeneralResults
 *  @apiDescription Data provided by the Puerto Rico Institute of Statistics, based on official data provided by the Puerto Rico Department of Health.
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.type
 *  @apiSuccess {String} table.tests_result
 *  @apiSuccess {String} table.tests_result_percent
 * 
 **/ 

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


/**
 *  @api {get} /IndiaCasesByStates  India Coronavirus (COVID-2019) cases by states
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/IndiaCasesByStates
 *  @apiVersion 1.2.0
 *  @apiName GetIndiaCasesByStates
 *  @apiGroup IndiaCasesByStates
 *  @apiDescription India Coronavirus (COVID-2019) cases by states 
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.active
 *  @apiSuccess {String} table.confirmed
 *  @apiSuccess {String} table.deaths
 *  @apiSuccess {String} table.deltaconfirmed
 *  @apiSuccess {String} table.deltadeaths
 *  @apiSuccess {String} table.deltarecovered
 *  @apiSuccess {String} table.lastupdatedtime
 *  @apiSuccess {String} table.recovered
 *  @apiSuccess {String} table.state
 *  @apiSuccess {String} table.statecode
 *  @apiSuccess {String} table.statenotes
 **/

router.get('/IndiaCasesByStates' , (req , res) =>{
  PluginManager.indiaCasesByStates()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

/**
 *  @api {get} /SpainCasesByCommunities  Spain Coronavirus (COVID-2019) cases by comunities
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/SpainCasesByCommunities
 *  @apiVersion 1.2.0
 *  @apiName GetSpainCasesByCommunities
 *  @apiGroup SpainCasesByCommunities
 *  @apiDescription Spain Coronavirus (COVID-2019) cases by comunities
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.Community
 *  @apiSuccess {String} table.Total_Nuevos_Casos
 *  @apiSuccess {String} table.Total_Casos_cambio_porciento_24h
 *  @apiSuccess {String} table.Total_Fallecidos_24h
 *  @apiSuccess {String} table.Total_Recuperados_24h
 **/

router.get('/SpainCasesByCommunities' , (req , res) =>{
  PluginManager.spainCasesByCommunities()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

/**
 *  @api {get} /AustraliaCasesByStates  Austrailia Coronavirus (COVID-2019) cases by states
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/AustraliaCasesByStates
 *  @apiVersion 1.2.0
 *  @apiName GetAustraliaCasesByStates
 *  @apiGroup AustraliaCasesByStates
 *  @apiDescription Austrailia Coronavirus (COVID-2019) cases by states
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.state
 *  @apiSuccess {String} table.cases
 *  @apiSuccess {String} table.deaths
 **/

router.get('/AustraliaCasesByStates' , (req , res) =>{
  PluginManager.australiaCasesByStates()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

/**
 *  @api {get} /CanadaCasesByProvincesAndHealthRegion  Canada Coronavirus (COVID-2019) cases by Provinces And Health Region
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/CanadaCasesByProvincesAndHealthRegion
 *  @apiVersion 1.2.0
 *  @apiName GetCanadaCasesByProvincesAndHealthRegion
 *  @apiGroup CanadaCasesByProvincesAndHealthRegion
 *  @apiDescription Canada Coronavirus (COVID-2019) cases by Provinces And Health Region
 * 
 *  @apiSuccess {Object[]} province_table
 *  @apiSuccess {String} province_table.Prov
 *  @apiSuccess {String} province_table.Cases
 *  @apiSuccess {String} province_table.Deaths
 *  @apiSuccess {String} province_table.Cases_1M
 *  @apiSuccess {Object[]} health_region_table
 *  @apiSuccess {String} health_region_table.Cases
 *  @apiSuccess {String} health_region_table.HealthRegion
 **/

router.get('/CanadaCasesByProvincesAndHealthRegion' , (req , res) =>{
  PluginManager.canadaCasesByProvincesAndHealthRegion()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

/**
 *  @api {get} /JapanCasesByPrefecture  Japan Coronavirus (COVID-2019) cases by prefecture
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/JapanCasesByPrefecture
 *  @apiVersion 1.2.0
 *  @apiName GetJapanCasesByPrefecture
 *  @apiGroup JapanCasesByPrefecture
 *  @apiDescription Japan Coronavirus (COVID-2019) cases by prefecture
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.Prefecture
 *  @apiSuccess {String} table.Infections
 **/

router.get('/JapanCasesByPrefecture' , (req , res) =>{
  PluginManager.japanCasesByPrefecture()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

/**
 *  @api {get} /NewZealandCasesByDistrictHealthBoard  New Zealand Coronavirus (COVID-2019) cases by District Health Board
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/NewZealandCasesByDistrictHealthBoard
 *  @apiVersion 1.2.0
 *  @apiName GetNewZealandCasesByDistrictHealthBoard
 *  @apiGroup NewZealandCasesByDistrictHealthBoard
 *  @apiDescription  New Zealand Coronavirus (COVID-2019) cases by District Health Board
 * 
 *  @apiSuccess {Object[]} attributes
 *  @apiSuccess {String} attributes.NAME
 *  @apiSuccess {String} attributes.Confirmed_New
 *  @apiSuccess {String} attributes.Confirmed_Total
 *  @apiSuccess {String} attributes.Probable_New
 *  @apiSuccess {String} attributes.Probable_Total
 *  @apiSuccess {String} attributes.New
 *  @apiSuccess {String} attributes.Total
 *  @apiSuccess {String} attributes.New_Deaths
 *  @apiSuccess {String} attributes.Total_Deaths
 **/

router.get('/NewZealandCasesByDistrictHealthBoard' , (req , res) =>{
  PluginManager.newZealandCasesByDistrictHealthBoard()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

/**
 *  @api {get} /UnitedStateCasesByStates  United States Coronavirus (COVID-2019) cases by states
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/UnitedStateCasesByStates
 *  @apiVersion 1.2.0
 *  @apiName GetUnitedStateCasesByStates
 *  @apiGroup UnitedStateCasesByStates
 *  @apiDescription United States Coronavirus (COVID-2019) cases by states
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.state
 *  @apiSuccess {Number} table.positive
 *  @apiSuccess {Number} table.positiveScore
 *  @apiSuccess {Number} table.negativeScore
 *  @apiSuccess {Number} table.negativeRegularScore
 *  @apiSuccess {Number} table.commercialScore
 *  @apiSuccess {Number} table.score
 *  @apiSuccess {Number} table.negative
 *  @apiSuccess {String} table.pending
 *  @apiSuccess {String} table.hospitalizedCurrently
 *  @apiSuccess {Number} table.hospitalizedCumulative
 *  @apiSuccess {String} table.inIcuCurrently
 *  @apiSuccess {String} table.inIcuCumulative
 *  @apiSuccess {String} table.onVentilatorCurrently
 *  @apiSuccess {String} table.onVentilatorCumulative
 *  @apiSuccess {Number} table.recovered
 *  @apiSuccess {String} table.lastUpdateEt
 *  @apiSuccess {String} table.checkTimeEt
 *  @apiSuccess {Number} table.death
 *  @apiSuccess {Number} table.hospitalized
 *  @apiSuccess {Number} table.total
 *  @apiSuccess {Number} table.totalTestResults
 *  @apiSuccess {Number} table.posNeg
 *  @apiSuccess {String} table.fips
 *  @apiSuccess {String} table.dateModified
 *  @apiSuccess {String} table.dateChecked
 *  @apiSuccess {String} table.dataGrade
 **/

router.get('/UnitedStateCasesByStates' , (req , res) =>{
  PluginManager.unitedStateCasesByStates()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});


/**
 *  @api {get} /GermanyCasesByRegion  Germany Coronavirus (COVID-2019) cases by region
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/GermanyCasesByRegion
 *  @apiVersion 1.2.1
 *  @apiName GetGermanyCasesByRegion
 *  @apiGroup GermanyCasesByRegion
 *  @apiDescription Germany Coronavirus (COVID-2019) cases by region
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.region
 *  @apiSuccess {Number} table.infectedCount
 *  @apiSuccess {Number} table.deceasedCount
 **/

router.get('/GermanyCasesByRegion' , (req , res) =>{
  PluginManager.germanyCasesByRegion()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});


/**
 *  @api {get} /SwedenCasesByRegion  Sweden Coronavirus (COVID-2019) cases by region
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/SwedenCasesByRegion
 *  @apiVersion 1.2.1
 *  @apiName GetSwedenCasesByRegion
 *  @apiGroup SwedenCasesByRegion
 *  @apiDescription Sweden Coronavirus (COVID-2019) cases by region
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.region
 *  @apiSuccess {Number} table.infectedCount
 *  @apiSuccess {Number} table.deathCount
 *  @apiSuccess {Number} table.intensiveCareCount
 **/

router.get('/SwedenCasesByRegion' , (req , res) =>{
  PluginManager.swedenCasesByRegion()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});


/**
 *  @api {get} /SlovakiaCasesByDistrict  Slovakia Coronavirus (COVID-2019) cases by district
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/SlovakiaCasesByDistrict
 *  @apiVersion 1.2.1
 *  @apiName GetSlovakiaCasesByDistrict
 *  @apiGroup SlovakiaCasesByDistrict
 *  @apiDescription Slovakia Coronavirus (COVID-2019) cases by district
 * 
 *  @apiSuccess {Object[]} attributes
 *  @apiSuccess {String} attributes.NAME
 *  @apiSuccess {Number} attributes.hospitalizovani_so_symptomami
 *  @apiSuccess {Number} attributes.intenzivna_starostlivost
 *  @apiSuccess {Number} attributes.celkom_hospitalizovani
 *  @apiSuccess {Number} attributes.domaca_izolacia
 *  @apiSuccess {Number} attributes.miesto_liecenia_nezverejnene
 *  @apiSuccess {Number} attributes.celkom_sucasne_pozitivni
 *  @apiSuccess {Number} attributes.pozitivni_predch_den
 *  @apiSuccess {Number} attributes.novi_pozitivni
 *  @apiSuccess {Number} attributes.vyzdraveni
 *  @apiSuccess {Number} attributes.mrtvi
 *  @apiSuccess {Number} attributes.celkom_pozitivni
 *  @apiSuccess {Number} attributes.vykonane_testy
 * 
 **/

router.get('/SlovakiaCasesByDistrict' , (req , res) =>{
  PluginManager.slovakiaCasesByDistrict()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

/**
 *  @api {get} /PortugalCasesByRegion  Portugal Coronavirus (COVID-2019) cases by region
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/PortugalCasesByRegion
 *  @apiVersion 1.2.1
 *  @apiName GetPortugalCasesByRegion
 *  @apiGroup PortugalCasesByRegion
 *  @apiDescription Portugal Coronavirus (COVID-2019) cases by region
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.region
 *  @apiSuccess {Number} table.cases
 **/

router.get('/PortugalCasesByRegion' , (req , res) =>{
  PluginManager.portugalCasesByRegion()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

/**
 *  @api {get} /PolandCasesByRegion  Poland Coronavirus (COVID-2019) cases by region
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/PolandCasesByRegion
 *  @apiVersion 1.2.1
 *  @apiName GetPolandCasesByRegion
 *  @apiGroup PolandCasesByRegion
 *  @apiDescription Poland Coronavirus (COVID-2019) cases by region
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.region
 *  @apiSuccess {Number} table.infectedCount
 *  @apiSuccess {Number} table.deceasedCount
 **/

router.get('/PolandCasesByRegion' , (req , res) =>{
  PluginManager.polandCasesByRegion()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

/**
 *  @api {get} /PalestineCasesByRegion  Palestine Coronavirus (COVID-2019) cases by region
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/PalestineCasesByRegion
 *  @apiVersion 1.2.1
 *  @apiName GetPalestineCasesByRegion
 *  @apiGroup PalestineCasesByRegion
 *  @apiDescription Palestine Coronavirus (COVID-2019) cases by region
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.region
 *  @apiSuccess {Number} table.cases
 **/

router.get('/PalestineCasesByRegion' , (req , res) =>{
  PluginManager.palestineCasesByRegion()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

/**
 *  @api {get} /NorwayCasesByRegion  Norway Coronavirus (COVID-2019) cases by region
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/NorwayCasesByRegion
 *  @apiVersion 1.2.1
 *  @apiName GetNorwayCasesByRegion
 *  @apiGroup NorwayCasesByRegion
 *  @apiDescription Norway Coronavirus (COVID-2019) cases by region
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.region
 *  @apiSuccess {Number} table.infectedCount
 **/

router.get('/NorwayCasesByRegion' , (req , res) =>{
  PluginManager.norwayCasesByRegion()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

/**
 *  @api {get} /BrazilCasesByRegion  Brazil Coronavirus (COVID-2019) cases by region
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/BrazilCasesByRegion
 *  @apiVersion 1.2.1
 *  @apiName GetBrazilCasesByRegion
 *  @apiGroup BrazilCasesByRegion
 *  @apiDescription Brazil Coronavirus (COVID-2019) cases by region
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.state
 *  @apiSuccess {Number} table.cases
 **/

router.get('/BrazilCasesByRegion' , (req , res) =>{
  PluginManager.brazilCasesByRegion()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

/**
 *  @api {get} /AlgeriaCasesByRegion  Algeria Coronavirus (COVID-2019) cases by region
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/AlgeriaCasesByRegion
 *  @apiVersion 1.2.1
 *  @apiName GetAlgeriaCasesByRegion
 *  @apiGroup AlgeriaCasesByRegion
 *  @apiDescription Algeria Coronavirus (COVID-2019) cases by region
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.region
 *  @apiSuccess {Number} table.cases
 **/

router.get('/AlgeriaCasesByRegion' , (req , res) =>{
  PluginManager.algeriaCasesByRegion()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

/**
 *  @api {get} /CivicFreedomTracker  COVID-19 Civic Freedom Tracker
 *  @apiSampleRequest https://covid19-server.chrismichael.now.sh/api/v1/CivicFreedomTracker
 *  @apiVersion 1.2.1
 *  @apiName GetCivicFreedomTracker
 *  @apiGroup CivicFreedomTracker
 *  @apiDescription COVID-19 Civic Freedom Tracker | Data Provided by ICNL The International Center for Not-for-Profit Law
 * 
 *  @apiSuccess {Object[]} table
 *  @apiSuccess {String} table.country
 *  @apiSuccess {String} table.title
 *  @apiSuccess {String} table.description
 *  @apiSuccess {String} table.type
 *  @apiSuccess {String} table.date
 *  @apiSuccess {String} table.issue
 **/

router.get('/CivicFreedomTracker' , (req , res) =>{
  PluginManager.civicFreedomTracker()
    .then(data =>{
      res.status(200).json({
        data: data
      });
    }).catch((err) =>{
      console.error(err);
    });
});

module.exports = router;
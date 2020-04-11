define({ "api": [
  {
    "type": "get",
    "url": "/AllCasesInAmerica",
    "title": "Number of COVID-19 cases in the Americas region",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/AllCasesInAmerica"
      }
    ],
    "version": "1.1.9",
    "name": "GetAllCasesInAmerica",
    "group": "AllCasesInAmerica",
    "description": "<p>COVID 19 cases in Americas region</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Country",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Confirmed",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Deaths",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "AllCasesInAmerica"
  },
  {
    "type": "get",
    "url": "/AllCasesInEurope",
    "title": "Situation update for the EU/EEA and the UK",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/AllCasesInEurope"
      }
    ],
    "version": "1.1.9",
    "name": "GetAllCasesInEurope",
    "group": "AllCasesInEurope",
    "description": "<p>COVID 19 cases in Europe region</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Cases",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Deaths",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Country",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "AllCasesInEurope"
  },
  {
    "type": "get",
    "url": "/AllReports",
    "title": "Get list of all reports",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/AllReports"
      }
    ],
    "version": "1.1.9",
    "name": "GetAllReports",
    "group": "AllReports",
    "description": "<p>Confirmed Cases and Deaths All over the world Data provided by the worldometers website</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cases",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deaths",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "recovered",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "active_cases",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "active_cases.currently_infected_patients",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "active_cases.inMidCondition",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "active_cases.criticalStates",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "closed_cases",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "closed_cases.cases_which_had_an_outcome",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "closed_cases.recovered",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "closed_cases.deaths",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.TotalCases",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.NewCases",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.TotalDeaths",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.NewDeaths",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.TotalRecovered",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.ActiveCases",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.TotalTests",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Continent",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Deaths_1M_pop",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Country",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Serious_Critical",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Tests_1M_Pop",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.TotCases_1M_Pop",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "AllReports"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./covid19-docs/main.js",
    "group": "C:\\Users\\c\\Desktop\\COVID-19\\covid19-docs\\main.js",
    "groupTitle": "C:\\Users\\c\\Desktop\\COVID-19\\covid19-docs\\main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/CasesInAllUSStates",
    "title": "Coronavirus cases in all US states",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/CasesInAllUSStates"
      }
    ],
    "version": "1.1.9",
    "name": "GetCasesInAllUSStates",
    "group": "CasesInAllUSStates",
    "description": "<p>COVID 19 cases in all states of the United States</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.USAState",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.TotalCases",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.NewCases",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.TotalDeaths",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.NewDeaths",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.ActiveCases",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.TotalTests",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Tot_Cases_1M_Pop",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Deaths_1M_Pop",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Tests_1M_Pop",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "CasesInAllUSStates"
  },
  {
    "type": "get",
    "url": "/JohnsHopkinsDataDailyReport",
    "title": "Johns Hopkins - Coronavirus Resource Center (CSSE COVID-19 Dataset)",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/JohnsHopkinsDataDailyReport"
      }
    ],
    "version": "1.1.9",
    "name": "GetJohnsHopkinsDataDailyReport",
    "group": "JohnsHopkinsDataDailyReport",
    "description": "<p>This is the data for the 2019 Novel Coronavirus Visual Dashboard operated by the Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE). Also, Supported by ESRI Living Atlas Team and the Johns Hopkins University Applied Physics Lab (JHU APL).</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Province_State",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Country_Region",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Last_Update",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Lat",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Long_",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Confirmed",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Deaths",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Recovered",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Active",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Combined_Key",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "JohnsHopkinsDataDailyReport"
  },
  {
    "type": "get",
    "url": "/PRDataByRegions",
    "title": "Distribution by Health Region",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/PRDataByRegions"
      }
    ],
    "version": "1.1.9",
    "name": "GetPRDataByRegions",
    "group": "PRDataByRegions",
    "description": "<p>Confirmed cases by region in Puerto Rico Data provided by the PR Statistics website</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.type",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.evaluated",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.positive",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.negatives",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.pending",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "PRDataByRegions"
  },
  {
    "type": "get",
    "url": "/PRDataBySex",
    "title": "According to the Reported Sex",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/PRDataBySex"
      }
    ],
    "version": "1.1.9",
    "name": "GetPRDataBySex",
    "group": "PRDataBySex",
    "description": "<p>Positive results according to reported sex in Puerto Rico Data provided by the PR Statistics website</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.genre",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.total",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "PRDataBySex"
  },
  {
    "type": "get",
    "url": "/PRDataByTowns",
    "title": "Positive Cases by Municipality of Residence",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/PRDataByTowns"
      }
    ],
    "version": "1.1.9",
    "name": "GetPRDataByTowns",
    "group": "PRDataByTowns",
    "description": "<p>Positive results by Municipality of Residence in Puerto Rico Data provided by the PR Statistics website and bioseguridad.maps.arcgis</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.attributes.town",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.attributes.health_region",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.attributes.total_cases",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "PRDataByTowns"
  },
  {
    "type": "get",
    "url": "/PRExtraData",
    "title": "Availability of necessary items / products for each hospital",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/PRExtraData"
      }
    ],
    "version": "1.1.9",
    "name": "GetPRExtraData",
    "group": "PRExtraData",
    "description": "<p>Availability of necessary items / products for each hospital in Puerto Rico Data provided by the PR bioseguridad.maps.arcgis</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Camas_Adult_Disp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Camas_Adult_Int_Disp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Camas_Adult_Int_Occ",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Camas_Ped_Int_Disp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Camas_Ped_Int_Occ",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Cuartos_PSINeg_Disp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Cuartos_PSINeg_Occ",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Vent_Adult_Disp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Vent_Adult_Occ",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Vent_Ped_Disp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Vent_Ped_Occ",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Morgue_Disp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Morgue_Occ",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Paciente_Adult",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Paciente_Ped",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Casos_Nuev_Ult_Inf",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Casos_Nuev_DS",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Casos_Nuev_AV",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Casos_Nuev_LabPriv",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Fatalidades",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Casos_Pos",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Casos_Neg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Casos_Pend",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Casos_Inconcluso",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Fem",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Masc",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Menor_10",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_10_19",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_20_29",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_30_39",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_40_49",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_50_59",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_60_69",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_70_79",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Mayor_80",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Vent_Ord",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Vent_Rec",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Vent_Entr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Casos",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Prueba_Realizada",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Camas_Ped_Disp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.Edad_No_Dis",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Defunciones_RD",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Suicidios_RD",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Muertes_COVID_RD",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Cuartos_PSiNeg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Hospitalizados",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Recuperados",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Camas_Int_Adult",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Camas_Int_Ped",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Vent_Adult",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Vent_Ped",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Camas_Adult_Available",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Camas_Ped_Available",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_DefuncionesRD_Ene",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_DefuncionesRD_Feb",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_DefuncionesRD_Mar",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_DefuncionesRD_Abr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.T_Muertes_Combinadas",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.Sexo_No_Dis",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "PRExtraData"
  },
  {
    "type": "get",
    "url": "/PRGeneralResults",
    "title": "Quantity and Percentage Distribution",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/PRGeneralResults"
      }
    ],
    "version": "1.1.9",
    "name": "GetPRGeneralResults",
    "group": "PRGeneralResults",
    "description": "<p>Data provided by the Puerto Rico Institute of Statistics, based on official data provided by the Puerto Rico Department of Health.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.type",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.tests_result",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.tests_result_percent",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "PRGeneralResults"
  },
  {
    "type": "get",
    "url": "/SituationReports",
    "title": "Coronavirus disease (COVID-2019) situation reports",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/SituationReports"
      }
    ],
    "version": "1.1.9",
    "name": "GetSituationReports",
    "group": "SituationReports",
    "description": "<p>Data as received by WHO from national authorities</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reports",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reports.report",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reports.date",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reports.pdf",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "SituationReports"
  },
  {
    "type": "get",
    "url": "/TestsInUS",
    "title": "Reporting public health labs are 48 state public health labs",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/TestsInUS"
      }
    ],
    "version": "1.1.9",
    "name": "GetTestsInUS",
    "group": "TestsInUS",
    "description": "<p>Reporting public health labs are 48 state public health labs (AK, AL, AR, AZ, CA, CO, CT, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, RI, SC, SD, TN, TX, VT, WA, WI, WV and WY), New York City, USAF, and 9 California counties.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastUpdatedDay",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.DateCollected",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.CDCLabs",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.USPublicHealthLabs",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "TestsInUS"
  }
] });

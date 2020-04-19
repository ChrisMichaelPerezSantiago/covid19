define({ "api": [
  {
    "type": "get",
    "url": "/AlgeriaCasesByRegion",
    "title": "Algeria Coronavirus (COVID-2019) cases by region",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/AlgeriaCasesByRegion"
      }
    ],
    "version": "1.2.1",
    "name": "GetAlgeriaCasesByRegion",
    "group": "AlgeriaCasesByRegion",
    "description": "<p>Algeria Coronavirus (COVID-2019) cases by region</p>",
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
            "field": "table.region",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.cases",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "AlgeriaCasesByRegion"
  },
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
    "type": "get",
    "url": "/AustraliaCasesByStates",
    "title": "Austrailia Coronavirus (COVID-2019) cases by states",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/AustraliaCasesByStates"
      }
    ],
    "version": "1.2.0",
    "name": "GetAustraliaCasesByStates",
    "group": "AustraliaCasesByStates",
    "description": "<p>Austrailia Coronavirus (COVID-2019) cases by states</p>",
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
            "field": "table.state",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.cases",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.deaths",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "AustraliaCasesByStates"
  },
  {
    "type": "get",
    "url": "/BrazilCasesByRegion",
    "title": "Brazil Coronavirus (COVID-2019) cases by region",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/BrazilCasesByRegion"
      }
    ],
    "version": "1.2.1",
    "name": "GetBrazilCasesByRegion",
    "group": "BrazilCasesByRegion",
    "description": "<p>Brazil Coronavirus (COVID-2019) cases by region</p>",
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
            "field": "table.state",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.cases",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "BrazilCasesByRegion"
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
    "url": "/CanadaCasesByProvincesAndHealthRegion",
    "title": "Canada Coronavirus (COVID-2019) cases by Provinces And Health Region",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/CanadaCasesByProvincesAndHealthRegion"
      }
    ],
    "version": "1.2.0",
    "name": "GetCanadaCasesByProvincesAndHealthRegion",
    "group": "CanadaCasesByProvincesAndHealthRegion",
    "description": "<p>Canada Coronavirus (COVID-2019) cases by Provinces And Health Region</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "province_table",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province_table.Prov",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province_table.Cases",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province_table.Deaths",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province_table.Cases_1M",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "health_region_table",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "health_region_table.Cases",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "health_region_table.HealthRegion",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "CanadaCasesByProvincesAndHealthRegion"
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
    "url": "/CivicFreedomTracker",
    "title": "COVID-19 Civic Freedom Tracker",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/CivicFreedomTracker"
      }
    ],
    "version": "1.2.1",
    "name": "GetCivicFreedomTracker",
    "group": "CivicFreedomTracker",
    "description": "<p>COVID-19 Civic Freedom Tracker | Data Provided by ICNL The International Center for Not-for-Profit Law</p>",
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
            "field": "table.country",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.description",
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
            "field": "table.date",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.issue",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "CivicFreedomTracker"
  },
  {
    "type": "get",
    "url": "/FatalityRateByAge",
    "title": "Age of Coronavirus Deaths - COVID-19 Fatality Rate by AGE",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/FatalityRateByAge"
      }
    ],
    "version": "1.1.9",
    "name": "GetFatalityRateByAge",
    "group": "FatalityRateByAge",
    "description": "<p>Death Rate = (number of deaths / number of cases) = probability of dying if infected by the virus (%). This probability differs depending on the age group. The percentages shown below do not have to add up to 100%, as they do NOT represent share of deaths by age group. Rather, it represents, for a person in a given age group, the risk of dying if infected with COVID-19. Death Rate = (number of deaths / number of cases) = probability of dying if infected by the virus (%). The percentages do not have to add up to 100%, as they do NOT represent share of deaths by age group.</p>",
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
            "field": "table.Age",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.DeathRateConfirmedCases",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.DeathRateAllCases",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "FatalityRateByAge"
  },
  {
    "type": "get",
    "url": "/FatalityRateByComorbidities",
    "title": "COVID-19 Fatality Rate by COMORBIDITY",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/FatalityRateByComorbidities"
      }
    ],
    "version": "1.1.9",
    "name": "GetFatalityRateByComorbidities",
    "group": "FatalityRateByComorbidities",
    "description": "<p>Death Rate = (number of deaths / number of cases) = probability of dying if infected by the virus (%). This probability differs depending on pre-existing condition. The percentage shown below does NOT represent in any way the share of deaths by pre-existing condition. Rather, it represents, for a patient with a given pre-existing condition, the risk of dying if infected by COVID-19.</p>",
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
            "field": "table.PreExistingCondition",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.DeathRateConfirmedCases",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.DeathRateAllCases",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "FatalityRateByComorbidities"
  },
  {
    "type": "get",
    "url": "/FatalityRateBySex",
    "title": "Sex ratio - COVID-19 Fatality Rate by SEX",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/FatalityRateBySex"
      }
    ],
    "version": "1.1.9",
    "name": "GetFatalityRateBySex",
    "group": "FatalityRateBySex",
    "description": "<p>Death Rate = (number of deaths / number of cases) = probability of dying if infected by the virus (%). This probability differs depending on sex. When reading these numbers, it must be taken into account that smoking in China is much more prevalent among males. Smoking increases the risks of respiratory complications. Death Rate = (number of deaths / number of cases) = probability of dying if infected by the virus (%). The percentages do not have to add up to 100%, as they do NOT represent share of deaths by se</p>",
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
            "field": "table.Sex",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.DeathRateConfirmedCases",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.DeathRateAllCases",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "FatalityRateBySex"
  },
  {
    "type": "get",
    "url": "/GermanyCasesByRegion",
    "title": "Germany Coronavirus (COVID-2019) cases by region",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/GermanyCasesByRegion"
      }
    ],
    "version": "1.2.1",
    "name": "GetGermanyCasesByRegion",
    "group": "GermanyCasesByRegion",
    "description": "<p>Germany Coronavirus (COVID-2019) cases by region</p>",
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
            "field": "table.region",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.infectedCount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.deceasedCount",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "GermanyCasesByRegion"
  },
  {
    "type": "get",
    "url": "/IndiaCasesByStates",
    "title": "India Coronavirus (COVID-2019) cases by states",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/IndiaCasesByStates"
      }
    ],
    "version": "1.2.0",
    "name": "GetIndiaCasesByStates",
    "group": "IndiaCasesByStates",
    "description": "<p>India Coronavirus (COVID-2019) cases by states</p>",
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
            "field": "table.active",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.confirmed",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.deaths",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.deltaconfirmed",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.deltadeaths",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.deltarecovered",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.lastupdatedtime",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.recovered",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.state",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.statecode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.statenotes",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "IndiaCasesByStates"
  },
  {
    "type": "get",
    "url": "/JapanCasesByPrefecture",
    "title": "Japan Coronavirus (COVID-2019) cases by prefecture",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/JapanCasesByPrefecture"
      }
    ],
    "version": "1.2.0",
    "name": "GetJapanCasesByPrefecture",
    "group": "JapanCasesByPrefecture",
    "description": "<p>Japan Coronavirus (COVID-2019) cases by prefecture</p>",
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
            "field": "table.Prefecture",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Infections",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "JapanCasesByPrefecture"
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
    "url": "/NewZealandCasesByDistrictHealthBoard",
    "title": "New Zealand Coronavirus (COVID-2019) cases by District Health Board",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/NewZealandCasesByDistrictHealthBoard"
      }
    ],
    "version": "1.2.0",
    "name": "GetNewZealandCasesByDistrictHealthBoard",
    "group": "NewZealandCasesByDistrictHealthBoard",
    "description": "<p>New Zealand Coronavirus (COVID-2019) cases by District Health Board</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "attributes",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attributes.NAME",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attributes.Confirmed_New",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attributes.Confirmed_Total",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attributes.Probable_New",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attributes.Probable_Total",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attributes.New",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attributes.Total",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attributes.New_Deaths",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attributes.Total_Deaths",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "NewZealandCasesByDistrictHealthBoard"
  },
  {
    "type": "get",
    "url": "/NorwayCasesByRegion",
    "title": "Norway Coronavirus (COVID-2019) cases by region",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/NorwayCasesByRegion"
      }
    ],
    "version": "1.2.1",
    "name": "GetNorwayCasesByRegion",
    "group": "NorwayCasesByRegion",
    "description": "<p>Norway Coronavirus (COVID-2019) cases by region</p>",
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
            "field": "table.region",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.infectedCount",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "NorwayCasesByRegion"
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
    "url": "/PalestineCasesByRegion",
    "title": "Palestine Coronavirus (COVID-2019) cases by region",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/PalestineCasesByRegion"
      }
    ],
    "version": "1.2.1",
    "name": "GetPalestineCasesByRegion",
    "group": "PalestineCasesByRegion",
    "description": "<p>Palestine Coronavirus (COVID-2019) cases by region</p>",
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
            "field": "table.region",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.cases",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "PalestineCasesByRegion"
  },
  {
    "type": "get",
    "url": "/PolandCasesByRegion",
    "title": "Poland Coronavirus (COVID-2019) cases by region",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/PolandCasesByRegion"
      }
    ],
    "version": "1.2.1",
    "name": "GetPolandCasesByRegion",
    "group": "PolandCasesByRegion",
    "description": "<p>Poland Coronavirus (COVID-2019) cases by region</p>",
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
            "field": "table.region",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.infectedCount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.deceasedCount",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "PolandCasesByRegion"
  },
  {
    "type": "get",
    "url": "/PortugalCasesByRegion",
    "title": "Portugal Coronavirus (COVID-2019) cases by region",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/PortugalCasesByRegion"
      }
    ],
    "version": "1.2.1",
    "name": "GetPortugalCasesByRegion",
    "group": "PortugalCasesByRegion",
    "description": "<p>Portugal Coronavirus (COVID-2019) cases by region</p>",
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
            "field": "table.region",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.cases",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "PortugalCasesByRegion"
  },
  {
    "type": "get",
    "url": "/ReportsByCountries/:country",
    "title": "Confirmed Cases and Deaths by Country",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/ReportsByCountries/:country"
      }
    ],
    "version": "1.1.9",
    "name": "GetReportsByCountries",
    "group": "ReportsByCountries",
    "description": "<p>Confirmed Cases and Deaths by Country</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "flag",
            "description": ""
          },
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
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"\n     afghanistan, albania, algeria, andorra, angola, anguilla, antigua-and-barbuda, argentina, armenia, aruba, australia, austria, azerbaijan,\n     bahamas, bahrain, bangladesh, barbados, belarus, belgium, belize, benin, bermuda, bhutan, bolivia, bosnia-and-herzegovina, botswana, brazil, british-virgin-islands, brunei-darussalam, bulgaria, burkina-faso, burundi,\n     cabo-verde, cambodia, cameroon, canada, caribbean-netherlands, cayman-islands, central-african-republic, chad, channel-islands, chile, china, china-hong-kong-sar, china-macao-sar, colombia, congo, costa-rica, cote-d-ivoire, croatia, cuba, curacao, cyprus, czech-republic,\n     democratic-republic-of-the-congo, denmark, djibouti, dominica, dominican-republic,\n     ecuador, egypt, el-salvador, equatorial-guinea, eritrea, estonia, ethiopia,\n     faeroe-islands, falkland-islands-malvinas, fiji, finland, france, french-guiana, french-polynesia,\n     gabon, gambia, georgia, germany, ghana, gibraltar, greece, greenland, grenada, guadeloupe, guatemala, guinea, guinea-bissau, guyana,\n     haiti, holy-see, honduras, hungary,\n     iceland, india, indonesia, iran, iraq, ireland, isle-of-man, israel, italy,\n     jamaica, japan, jordan,\n     kazakhstan, kenya, kuwait, kyrgyzstan,\n     laos, latvia, lebanon, liberia, libya, liechtenstein, lithuania, luxembourg,\n     macedonia, madagascar, malawi, malaysia, maldives, mali, malta, martinique, mauritania, mauritius, mayotte, mexico, moldova, monaco, mongolia, montenegro, montserrat, morocco, mozambique, myanmar,\n     namibia, nepal, netherlands, new-caledonia, new-zealand, nicaragua, niger, nigeria, norway,\n     oman,\n     pakistan, panama, papua-new-guinea, paraguay, peru, philippines, poland, portugal,\n     qatar,\n     reunion, romania, russia, rwanda,\n     saint-barthelemy, saint-kitts-and-nevis, saint-lucia, saint-martin, saint-vincent-and-the-grenadines, san-marino, saudi-arabia, senegal, serbia, seychelles, sierra-leone, singapore, sint-maarten, slovakia, slovenia, somalia, south-africa, south-korea, spain, sri-lanka, state-of-palestine, sudan, suriname, swaziland, sweden, switzerland, syria,\n     taiwan, tanzania, thailand, timor-leste, togo, trinidad-and-tobago, tunisia, turkey, turks-and-caicos-islands,\n     uganda uk ukraine united-arab-emirates uruguay us uzbekistan,\n     venezuela, viet-nam,\n     zambia, zimbabwe\n \""
            ],
            "optional": false,
            "field": "country",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "ReportsByCountries"
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
    "url": "/SlovakiaCasesByDistrict",
    "title": "Slovakia Coronavirus (COVID-2019) cases by district",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/SlovakiaCasesByDistrict"
      }
    ],
    "version": "1.2.1",
    "name": "GetSlovakiaCasesByDistrict",
    "group": "SlovakiaCasesByDistrict",
    "description": "<p>Slovakia Coronavirus (COVID-2019) cases by district</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "attributes",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attributes.NAME",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attributes.hospitalizovani_so_symptomami",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attributes.intenzivna_starostlivost",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attributes.celkom_hospitalizovani",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attributes.domaca_izolacia",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attributes.miesto_liecenia_nezverejnene",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attributes.celkom_sucasne_pozitivni",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attributes.pozitivni_predch_den",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attributes.novi_pozitivni",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attributes.vyzdraveni",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attributes.mrtvi",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attributes.celkom_pozitivni",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "attributes.vykonane_testy",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "SlovakiaCasesByDistrict"
  },
  {
    "type": "get",
    "url": "/SpainCasesByCommunities",
    "title": "Spain Coronavirus (COVID-2019) cases by comunities",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/SpainCasesByCommunities"
      }
    ],
    "version": "1.2.0",
    "name": "GetSpainCasesByCommunities",
    "group": "SpainCasesByCommunities",
    "description": "<p>Spain Coronavirus (COVID-2019) cases by comunities</p>",
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
            "field": "table.Community",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Total_Nuevos_Casos",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Total_Casos_cambio_porciento_24h",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Total_Fallecidos_24h",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.Total_Recuperados_24h",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "SpainCasesByCommunities"
  },
  {
    "type": "get",
    "url": "/SwedenCasesByRegion",
    "title": "Sweden Coronavirus (COVID-2019) cases by region",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/SwedenCasesByRegion"
      }
    ],
    "version": "1.2.1",
    "name": "GetSwedenCasesByRegion",
    "group": "SwedenCasesByRegion",
    "description": "<p>Sweden Coronavirus (COVID-2019) cases by region</p>",
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
            "field": "table.region",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.infectedCount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.deathCount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.intensiveCareCount",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "SwedenCasesByRegion"
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
  },
  {
    "type": "get",
    "url": "/UnitedStateCasesByStates",
    "title": "United States Coronavirus (COVID-2019) cases by states",
    "sampleRequest": [
      {
        "url": "https://covid19-server.chrismichael.now.sh/api/v1/UnitedStateCasesByStates"
      }
    ],
    "version": "1.2.0",
    "name": "GetUnitedStateCasesByStates",
    "group": "UnitedStateCasesByStates",
    "description": "<p>United States Coronavirus (COVID-2019) cases by states</p>",
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
            "field": "table.state",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.positive",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.positiveScore",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.negativeScore",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.negativeRegularScore",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.commercialScore",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.score",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.negative",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.pending",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.hospitalizedCurrently",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.hospitalizedCumulative",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.inIcuCurrently",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.inIcuCumulative",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.onVentilatorCurrently",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.onVentilatorCumulative",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.recovered",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.lastUpdateEt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.checkTimeEt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.death",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.hospitalized",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.total",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.totalTestResults",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "table.posNeg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.fips",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.dateModified",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.dateChecked",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "table.dataGrade",
            "description": ""
          }
        ]
      }
    },
    "filename": "./server/src/api/routes/index.js",
    "groupTitle": "UnitedStateCasesByStates"
  }
] });

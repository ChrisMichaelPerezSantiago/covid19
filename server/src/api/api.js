const cloudscraper = require('cloudscraper');
const cheerio = require('cheerio');
const tabletojson = require('tabletojson').Tabletojson;
const _ = require('lodash');
const csv = require('csvtojson');
const request=require('request')
const {renameKey} = require('./utils/utils');
const { 
  BASE_URL , 
  WHO_BASE_URL,
  CDC_GOV_BASE_URL,
  COVID19_SPREADSHEETS_BASE_URL,
  TRAVEL_ADVISORIES_BASE_URL,
  TEMP_CDC_GOV_BASE_URL,
  PAHO_ORG_BASE_URL,
  ECDC_BASE_URL,
  SALUD_GOV_BASE_URL,
  COVIDCAREMAP
} = require('./url/index');


const reports = async() =>{
  const res = await cloudscraper(`${BASE_URL}/coronavirus` , {
    method: 'GET',
  });
  const $ = cheerio.load(res);
  const html = $.html();
  const data = [];

  const tempCases = $('div#maincounter-wrap').eq(0).text().split(':')[1].trim();
  const cases = parseInt(tempCases.replace(/,/g , '') , 10);
  const tempDeaths = $('div#maincounter-wrap').eq(1).text().split(':')[1].trim();
  const deaths = parseInt(tempDeaths.replace(/,/g , '') , 10);
  const tempRecovered = $('div#maincounter-wrap').eq(2).text().split(':')[1].trim();
  const recovered = parseInt(tempRecovered.replace(/,/g , '') , 10);

  const table = tabletojson.convert(html);  

  const activeCases = [];
  const closedCases = [];

  $('div .col-md-6').eq(0).each((index , element) =>{
    const $element = $(element);
    const tempInfected = $element.find('div.number-table-main').text();
    const infected = parseInt(tempInfected.replace(/,/g , '') , 10);
    const tempInMidCondition = $element.find('span.number-table').eq(0).text();
    const inMidCondition = parseInt(tempInMidCondition.replace(/,/g , '') , 10);
    const tempCritical = $element.find('span.number-table').eq(1).text();
    const criticalStates = parseInt(tempCritical.replace(/,/g , '') , 10);

    activeCases.push({
      currently_infected_patients: infected,
      inMidCondition: inMidCondition,
      criticalStates: criticalStates
    });
  });

  $('div .col-md-6').eq(1).each((index , element) =>{
    const $element = $(element);
    const infected = $element.find('div.number-table-main').text();
    const cases_which_had_an_outcome = parseInt(infected.replace(/,/g , '') , 10);
    const tempRecovered = $element.find('span.number-table').eq(0).text();
    const recovered = parseInt(tempRecovered.replace(/,/g , '') , 10);
    const tempDeaths = $element.find('span.number-table').eq(1).text();
    const deaths = parseInt(tempDeaths.replace(/,/g , '') , 10);

    closedCases.push({
      cases_which_had_an_outcome: cases_which_had_an_outcome,
      recovered: recovered,
      deaths: deaths
    });
  });

  data.push({
    cases: cases,
    deaths: deaths,
    recovered: recovered,
    active_cases: activeCases,
    closed_cases: closedCases,
    table: table
  });

  data[0].table.map(doc =>{
    doc.forEach((obj) => renameKey(obj , 'Deaths/1M pop' , 'Deaths_1M_pop'));
    //doc.forEach((obj) => renameKey(obj , 'Reported1st case' , 'FirstCase'));
    doc.forEach((obj) => renameKey(obj , 'Country,Other' , 'Country'));
    doc.forEach((obj) => renameKey(obj , 'Serious,Critical' , 'Serious_Critical'));
    doc.forEach((obj) => renameKey(obj , 'Tests/\n1M pop' , 'Tests_1M_Pop'));
    doc.forEach((obj) => renameKey(obj , 'Tot Cases/1M pop' , 'TotCases_1M_Pop'));
    
  });

  return Promise.all(data);
};

const reportsByCountries = async(country) =>{
  const res = await cloudscraper(`${BASE_URL}/coronavirus/country/${country}` , {
    method: 'GET',
  });
  const $ = cheerio.load(res);
  
  const img = `${BASE_URL}` + $('h1 div img').attr('src');
  const tempCases = $('div#maincounter-wrap').eq(0).text().split(':')[1].trim();
  const cases = parseInt(tempCases.replace(/,/g , '') , 10);
  const tempDeaths = $('div#maincounter-wrap').eq(1).text().split(':')[1].trim();
  const deaths = parseInt(tempDeaths.replace(/,/g , '') , 10);
  const tempRecovered = $('div#maincounter-wrap').eq(2).text().split(':')[1].trim();
  const recovered = parseInt(tempRecovered.replace(/,/g , '') , 10);
  const activeCases = [];
  const closedCases = [];

  $('div .col-md-6').eq(0).each((index , element) =>{
    const $element = $(element);
    const tempInfected = $element.find('div.number-table-main').text();
    const infected = parseInt(tempInfected.replace(/,/g , '') , 10);
    const tempInMidCondition = $element.find('span.number-table').eq(0).text();
    const inMidCondition = parseInt(tempInMidCondition.replace(/,/g , '') , 10);
    const tempCritical = $element.find('span.number-table').eq(1).text();
    const criticalStates = parseInt(tempCritical.replace(/,/g , '') , 10);

    activeCases.push({
      currently_infected_patients: infected,
      inMidCondition: inMidCondition,
      criticalStates: criticalStates
    });
  });

  $('div .col-md-6').eq(1).each((index , element) =>{
    const $element = $(element);
    const infected = $element.find('div.number-table-main').text();
    const cases_which_had_an_outcome = parseInt(infected.replace(/,/g , '') , 10);
    const tempRecovered = $element.find('span.number-table').eq(0).text();
    const recovered = parseInt(tempRecovered.replace(/,/g , '') , 10);
    const tempDeaths = $element.find('span.number-table').eq(1).text();
    const deaths = parseInt(tempDeaths.replace(/,/g , '') , 10);

    closedCases.push({
      cases_which_had_an_outcome: cases_which_had_an_outcome,
      recovered: recovered,
      deaths: deaths
    });
  });

  const data = [{
    country: country,
    flag: img,
    cases: cases,
    deaths: deaths,
    recovered: recovered,
    active_cases: activeCases,
    closed_cases: closedCases
  }];

  return Promise.all(data);
};


const deaths = async() =>{
  const res = await cloudscraper(`${BASE_URL}/coronavirus/coronavirus-death-toll/` , {
    method: 'GET',
  });
  const $ = cheerio.load(res);
  const html = $.html();
  const data = [];

  const tempCases = $('div#maincounter-wrap').eq(0).text().match(/\d+/g);
  const total_deaths = parseInt(`${tempCases[0]}${tempCases[1]}` , 10); 
  const table = tabletojson.convert(html);

  data.push({
    deaths: total_deaths,
    table: table[0]
  });

  data[0].table.forEach((obj) => renameKey(obj , 'Total Deaths' , 'TotalDeaths'));
  data[0].table.forEach((obj) => renameKey(obj , 'Change in Total' , 'ChangeInTotal'));
  data[0].table.forEach((obj) => renameKey(obj , 'Change in  Total (%)' , 'ChangeTotalInPercent'));

  return Promise.all(data);
};

const situationReports = async() =>{
  const res = await cloudscraper(`${WHO_BASE_URL}/emergencies/diseases/novel-coronavirus-2019/situation-reports` , {
    method: 'GET',
  });
  const $ = cheerio.load(res);
  const doc = [];

  $('div.row div p').each((index , element) =>{
    const $element = $(element);
    const report = $element.find('a').text().trim();
    const date = $element.text().split(')')[1];
    const pdf = `${WHO_BASE_URL}` + $element.find('a').attr('href');
    doc.push({
      report: report,
      date: date,
      pdf: pdf
    })
  })

  const data = doc.filter(doc => doc.report);

  return Promise.all(data);
};

const TaskForceUS = async() =>{
  const res = await cloudscraper(`${CDC_GOV_BASE_URL}/coronavirus/2019-ncov/cases-updates/from-the-white-house-task-force.html` , {
    method: 'GET',
  });
  const $ = cheerio.load(res);
  const data = [];

  $('div.col ul li').each((index , element) =>{
    const $element = $(element);
    const state = $element.find('a').text().split('[')[0].split('pdf')[0].trim();
    const pdf = `${CDC_GOV_BASE_URL}` + $element.find('a').attr('href');
    data.push({
      state,
      pdf
    });
  });

  return Promise.all(data);
};

const globalData  = async() =>{
  const res = await cloudscraper(`${COVID19_SPREADSHEETS_BASE_URL}` , {method: 'GET'})
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  

  return Promise.all(table)
};

const testsInUS  = async() =>{
  const res = await cloudscraper(`${CDC_GOV_BASE_URL}/coronavirus/2019-ncov/cases-updates/testing-in-us.html` , {method: 'GET'})
  const $ = cheerio.load(res);
  const html = $.html();
  const data = [];
  
  const lastUpdatedDay = $('div.syndicate span.text-red').text().trim();
  const table = tabletojson.convert(html);  

  data.push({
    lastUpdatedDay: lastUpdatedDay,
    table: table[0]
  });

  data[0].table.forEach((obj) => renameKey(obj , 'Date Collected' , 'DateCollected'));
  data[0].table.forEach((obj) => renameKey(obj , 'CDC Labs' , 'CDCLabs'));
  data[0].table.forEach((obj) => renameKey(obj , 'US Public Health Labs' , 'USPublicHealthLabs'));
    
  return Promise.all(data);
};

const fatalityRateByAge  = async() =>{
  const res = await cloudscraper(`${BASE_URL}/coronavirus/coronavirus-age-sex-demographics/` , {method: 'GET'})
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  const data = table[0];

  data.forEach((obj) => renameKey(obj , '0' , 'Age'));
  data.forEach((obj) => renameKey(obj , '1' , 'DeathRateConfirmedCases'));
  data.forEach((obj) => renameKey(obj , '2' , 'DeathRateAllCases'));
  const doc = [];

  Array.from({length: data.length} , (v , k) =>{
    let info = data[k + 1];
    doc.push(info)
  });

  return Promise.all(doc.filter(doc => doc))
};

const fatalityRateBySex  = async() =>{
  const res = await cloudscraper(`${BASE_URL}/coronavirus/coronavirus-age-sex-demographics/` , {method: 'GET'})
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  const data = table[1];

  data.forEach((obj) => renameKey(obj , '0' , 'Sex'));
  data.forEach((obj) => renameKey(obj , '1' , 'DeathRateConfirmedCases'));
  data.forEach((obj) => renameKey(obj , '2' , 'DeathRateAllCases'));
  const doc = [];

  Array.from({length: data.length} , (v , k) =>{
    let info = data[k + 1];
    doc.push(info)
  });

  return Promise.all(doc.filter(doc => doc))
};

const fatalityRateByComorbidities  = async() =>{
  const res = await cloudscraper(`${BASE_URL}/coronavirus/coronavirus-age-sex-demographics/` , {method: 'GET'})
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  const data = table[2];

  data.forEach((obj) => renameKey(obj , '0' , 'PreExistingCondition'));
  data.forEach((obj) => renameKey(obj , '1' , 'DeathRateConfirmedCases'));
  data.forEach((obj) => renameKey(obj , '2' , 'DeathRateAllCases'));
  const doc = [];

  Array.from({length: data.length} , (v , k) =>{
    let info = data[k + 1];
    doc.push(info)
  });

  return Promise.all(doc.filter(doc => doc))
};

const countriesWhereCoronavirusHasSpread  = async() =>{
  const res = await cloudscraper(`${BASE_URL}/coronavirus/countries-where-coronavirus-has-spread/` , {method: 'GET'})
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  const data = table[0];

  return Promise.all(data);
};

const travelHealthNotices = async() =>{
  const res = await cloudscraper(`${TEMP_CDC_GOV_BASE_URL}/travel/notices` , {method: 'GET'})
  const $ = cheerio.load(res);
  const data = [];
  const doc = {
    warning: [],
    alert: [],
    watch: []
  };

  $('div#contentArea div div#warning ul li').each((index , element) =>{
    const $element = $(element);
    const title = $element.find('a').eq(1).text();
    const date = $element.find('span.date').text();
    const summary = $element.find('span.summary').text();
    doc.warning.push({
      title,
      date,
      summary
    });
  });

  $('div#contentArea div div#alert ul li').each((index , element) =>{
    const $element = $(element);
    const title = $element.find('a').eq(1).text();
    const date = $element.find('span.date').text();
    const summary = $element.find('span.summary').text();
    doc.alert.push({
      title,
      date,
      summary
    });
  });

  $('div#contentArea div div#watch ul li').each((index , element) =>{
    const $element = $(element);
    const title = $element.find('a').eq(1).text();
    const date = $element.find('span.date').text();
    const summary = $element.find('span.summary').text();
    doc.watch.push({
      title,
      date,
      summary
    });
  });

  const table = await travelAdvisoriesHelper();

  data.push({
    data:{
      travelHealthNotices: doc,
      table: table
    }
  });

  return Promise.all(data);
};

const travelAdvisoriesHelper = async() =>{
  const res = await cloudscraper(`${TRAVEL_ADVISORIES_BASE_URL}/content/travel/en/traveladvisories/traveladvisories.html` , {method: 'GET'})
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  const data = table;
  data.map(doc =>{
    doc.forEach(obj => renameKey(obj , 'Date Updated' , 'DateUpdated') )
  });

  return Promise.all(data)
};

const allCasesInAmerica = async() =>{
  const res = await cloudscraper(`${PAHO_ORG_BASE_URL}/es/temas/coronavirus/enfermedad-por-coronavirus-covid-19` , {method: 'GET'})
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);
  const data = table;
  data.map(doc =>{
    doc.forEach((obj) => {
      renameKey(obj , 'País' , 'Country');
      renameKey(obj , 'Confirmados' , 'Confirmed');
      renameKey(obj , 'Muertes' , 'Deaths');
    });
  });

  const doc = [{
    table: table
  }]; 

  return Promise.all(doc);
};

const allCasesInEurope = async() =>{
  const res = await cloudscraper(`${ECDC_BASE_URL}cases-2019-ncov-eueea` , {method: 'GET'})
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);
  const data = table;

  data.map(doc =>{
    doc.forEach((obj) => {
      renameKey(obj , 'EU/EEA and the UK' , 'Country');
    });
  });

  const doc = [{
    table: table
  }]; 

  return Promise.all(doc);
};

const caseStatusUndeEvalutationInPR = async() =>{
  const res = await cloudscraper(`${SALUD_GOV_BASE_URL}/Pages/coronavirus.aspx`);
  const $ = cheerio.load(res);
  const html = $.html();
  const x = [] , y = [] , z = [];

  $('table tbody tr').eq(1).find('td').each((index , element) =>{
    const $element = $(element);
    const values = $element.find('h3').text();
    x.push(values);
  });

  $('table tbody tr').eq(2).find('td').each((index , element) =>{
    const $element = $(element);
    const values = $element.find('h3').text().trim();
    y.push(values);
  });

  $('table tbody tr').eq(3).find('td').each((index , element) =>{
    const $element = $(element);
    const values = $element.find('h3').text().trim();
    z.push(values);
  });

  const data1 = { 'testsPerformed': x[1], 'ConfirmedCases': x[2], 'NegativeCases': x[3], 'TestsInProgress': x[4] };
  const data2 = { 'testsPerformed': y[1], 'ConfirmedCases': y[2], 'NegativeCases': y[3], 'TestsInProgress': y[4] };
  const data3 = { 'testsPerformed': z[1], 'ConfirmedCases': z[2], 'NegativeCases': z[3], 'TestsInProgress': z[4] };

  const data = [{
    publicHealthLaboratory: data1,
    caribbeanVeteransHealthSystem: data2,
    total: data3
  }];

  return Promise.all(data);
};


const casesInAllUSStates = async() =>{
  const res = await cloudscraper(`${BASE_URL}/coronavirus/country/us` , {method: 'GET'})
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);
  table[0].map(doc =>  delete doc.Source);
  const data = [{table: table[0]}];

  return Promise.all(data);
};

const capacityInfoUSHealthFacilities = async() =>{
  const url = `${COVIDCAREMAP}/data/published/us_healthcare_capacity-facility-CovidCareMap.csv`;
  const table = await csv()
    .fromStream(request.get(url))
      .subscribe((json)=>{
        return new Promise((resolve,reject)=>{          
          resolve(json)     
      });
    });

  table.forEach((obj) =>{
    renameKey(obj , 'Staffed All Beds' , 'StaffedAllBeds'),
    renameKey(obj , 'Staffed ICU Beds' , 'StaffedICUBeds'),
    renameKey(obj , 'Licensed All Beds' , 'LicensedAllBeds'),
    renameKey(obj , 'All Bed Occupancy Rate' , 'AllBedOccupancyRate'),
    renameKey(obj , 'ICU Bed Occupancy Rate' , 'ICUBedOccupancyRate'),
    renameKey(obj , 'Staffed All Beds - SOURCE' , 'StaffedAllBeds_SOURCE'),
    renameKey(obj , 'Staffed ICU Beds - SOURCE' , 'StaffedICUBeds_SOURCE'),
    renameKey(obj , 'Licensed All Beds - SOURCE' , 'LicensedAllBeds_SOURCE'),
    renameKey(obj , 'All Bed Occupancy Rate - SOURCE' , 'AllBedOccupancyRate_SOURCE'),
    renameKey(obj , 'ICU Bed Occupancy Rate - SOURCE' , 'ICUBedOccupancyRate_SOURCE')
    renameKey(obj , 'DH-OBJECTID' , 'DH_OBJECTID'),
    renameKey(obj , 'HCRIS-Provider Number' , 'HCRISProviderNumber'),
    renameKey(obj , 'Hospital Type' , 'HospitalType')
  });

  const data = [{table: table}]
  
  return Promise.all(data);
};

const aggregatedFacilityCapacityCounty = async() =>{
  const url = `${COVIDCAREMAP}/data/published/us_healthcare_capacity-county-CovidCareMap.csv`;
  const table = await csv()
    .fromStream(request.get(url))
      .subscribe((json)=>{
        return new Promise((resolve,reject)=>{          
          resolve(json)     
      });
    });
  
  try{
    table.forEach((obj) =>{
      renameKey(obj , 'County Name' , 'CountyName'),
      renameKey(obj , 'Staffed All Beds' , 'StaffedAllBeds'),
      renameKey(obj , 'Staffed ICU Beds' , 'StaffedICUBeds'),
      renameKey(obj , 'Licensed All Beds' , 'LicensedAllBeds'),
      renameKey(obj , 'All Bed Occupancy Rate' , 'AllBedOccupancyRate'),
      renameKey(obj , 'ICU Bed Occupancy Rate' , 'ICUBedOccupancyRate'),
      renameKey(obj , 'Population (20+)' , 'Population_20_plus'),
      renameKey(obj , 'Population (65+)' , 'Population_65_plus'),
      renameKey(obj , 'Staffed All Beds [Per 1000 People]' , 'StaffedAllBedsPer1000People'),
      renameKey(obj , 'Staffed All Beds [Per 1000 Adults (20+)]', 'StaffedAllBedsPer1000Adults20_plus'),
      renameKey(obj , 'Staffed All Beds [Per 1000 Elderly (65+)]', 'StaffedAllBedsPer1000Elderly65_plus'),
      renameKey(obj , 'Staffed ICU Beds [Per 1000 People]', 'StaffedICUBedsPer1000People'),
      renameKey(obj , 'Staffed ICU Beds [Per 1000 Adults (20+)]', 'StaffedICUBedsPer1000Adults20_plus'),
      renameKey(obj , 'Staffed ICU Beds [Per 1000 Elderly (65+)]', 'StaffedICUBedsPer1000Elderly65_plus'),
      renameKey(obj , 'Licensed All Beds [Per 1000 People]', 'LicensedAllBedsPer1000People'),
      renameKey(obj , 'Licensed All Beds [Per 1000 Adults (20+)]', 'LicensedAllBedsPer1000Adults20_plus'),
      renameKey(obj , 'Licensed All Beds [Per 1000 Elderly (65+)]', 'LicensedAllBedsPer1000Elderly65_plus')
    });
  }catch(err){
    console.log(err);
  }

  const data = [{table: table}]
  
  return Promise.all(data);
};

const johnsHopkinsDataDailyReport = async() =>{
  try{
    const res1 = await cloudscraper('https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_daily_reports',{
      method: 'GET',
    });
    const $ = cheerio.load(res1);
    const html = $.html();
    const gitHubTable = tabletojson.convert(html);  
    const N = gitHubTable[0].length;
    const date = gitHubTable[0][N - 2].Name;

    const url = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${date}`;
    const table = await csv()
      .fromStream(request.get(url))
        .subscribe((json)=>{
          return new Promise((resolve,reject)=>{          
            resolve(json)     
        });
      });

    table.forEach((obj) =>{
      delete obj.FIPS
      delete obj.Admin2
    });
    
    const data = [{table: table}]; 

    return Promise.all(data);
  
  }catch(err){
    console.log(err);
  }
};
  
const prGeneralResults = async() =>{
  try{
    const res1 = await cloudscraper('https://github.com/ChrisMichaelPerezSantiago/covid19/tree/master/EstatidistcasPuertoRico/resultados/datos_en_general',{
      method: 'GET',
    });
    const $ = cheerio.load(res1);
    const html = $.html();
    const gitHubTable = tabletojson.convert(html);
    const r = new RegExp(/.+(\.csv)$/);
    const N = gitHubTable[0].filter(doc => {
      return r.test(doc.Name)
    }).length;
    const gitHubTableFilterCSV = gitHubTable[0].filter(doc => {
      return r.test(doc.Name)
    }) 
    const date = gitHubTableFilterCSV[N - 1].Name;

    const url = `https://raw.githubusercontent.com/ChrisMichaelPerezSantiago/covid19/master/EstatidistcasPuertoRico/resultados/datos_en_general/${date}`;
    const table = await csv()
      .fromStream(request.get(url))
        .subscribe((json)=>{
          return new Promise((resolve,reject)=>{          
            resolve(json)     
        });
      });
    
    table.forEach((obj) =>{
      renameKey(obj , 'field1' , 'type')
      renameKey(obj , 'Resultados de las Pruebas (n)' , 'tests_result')
      renameKey(obj ,'Resultados de las Pruebas (%)' , 'tests_result_percent')
    });

    const data = [{table: table}]; 

    return Promise.all(data);
    }catch(err){
    console.log(err)
  }
};

const prDataByRegion = async() =>{
  try{
    const res1 = await cloudscraper('https://github.com/ChrisMichaelPerezSantiago/covid19/tree/master/EstatidistcasPuertoRico/resultados/datos_por_region',{
      method: 'GET',
    });
    const $ = cheerio.load(res1);
    const html = $.html();
    const gitHubTable = tabletojson.convert(html);
    const r = new RegExp(/.+(\.csv)$/);
    const N = gitHubTable[0].filter(doc => {
      return r.test(doc.Name)
    }).length;
    const gitHubTableFilterCSV = gitHubTable[0].filter(doc => {
      return r.test(doc.Name)
    }) 
    const date = gitHubTableFilterCSV[N - 1].Name;
    
    const url = `https://raw.githubusercontent.com/ChrisMichaelPerezSantiago/covid19/master/EstatidistcasPuertoRico/resultados/datos_por_region/${date}`;
    const table = await csv()
      .fromStream(request.get(url))
        .subscribe((json)=>{
          return new Promise((resolve,reject)=>{          
            resolve(json)     
        });
      });
        
    table.forEach((obj) =>{
      renameKey(obj , 'field1' , 'type')
      renameKey(obj , 'Evaluados' , 'evaluated')
      renameKey(obj , 'Positivos' , 'positive')
      renameKey(obj , 'Negativos' , 'negatives')
      renameKey(obj , 'Pendientes' , 'pending')
    });
    
    const data = [{table: table}]; 

    return Promise.all(data);
    }catch(err){
      console.log(err)
    }
};

const prDataBySex = async() =>{
  try{
    const res1 = await cloudscraper('https://github.com/ChrisMichaelPerezSantiago/covid19/tree/master/EstatidistcasPuertoRico/resultados/datos_por_sexo',{
      method: 'GET',
    });
    const $ = cheerio.load(res1);
    const html = $.html();
    const gitHubTable = tabletojson.convert(html);
    const r = new RegExp(/.+(\.csv)$/);
    const N = gitHubTable[0].filter(doc => {
      return r.test(doc.Name)
    }).length;
    const gitHubTableFilterCSV = gitHubTable[0].filter(doc => {
      return r.test(doc.Name)
    }) 
    const date = gitHubTableFilterCSV[N - 1].Name;
    
    const url = `https://raw.githubusercontent.com/ChrisMichaelPerezSantiago/covid19/master/EstatidistcasPuertoRico/resultados/datos_por_sexo/${date}`;
    const table = await csv()
      .fromStream(request.get(url))
        .subscribe((json)=>{
          return new Promise((resolve,reject)=>{          
            resolve(json)     
        });
      });
        
    table.forEach((obj) =>{
      renameKey(obj , 'field1' , 'genre')
      renameKey(obj , 'Sexo' , 'total')
    });
    
    const data = [{table: table}]; 

    return Promise.all(data);
    
    }catch(err){
      console.log(err)
    }
};


module.exports = {
  reports,
  reportsByCountries,
  deaths,
  situationReports,
  TaskForceUS,
  globalData,
  testsInUS,
  fatalityRateByAge,
  fatalityRateBySex,
  fatalityRateByComorbidities,
  countriesWhereCoronavirusHasSpread,
  travelHealthNotices,
  allCasesInAmerica,
  allCasesInEurope,
  caseStatusUndeEvalutationInPR,
  casesInAllUSStates,
  capacityInfoUSHealthFacilities,
  aggregatedFacilityCapacityCounty,
  johnsHopkinsDataDailyReport,
  prGeneralResults,
  prDataByRegion,
  prDataBySex
};


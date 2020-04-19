//const cloudscraper = require('cloudscraper');
const axios = require('axios').default;
const cheerio = require('cheerio');
const tabletojson = require('tabletojson').Tabletojson;
const _ = require('lodash');
const csv = require('csvtojson');
const request = require('request')
const {renameKey , requests} = require('./utils/utils');
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
  //const res = await cloudscraper(`${BASE_URL}/coronavirus` , {
  //  method: 'GET',
  //});
  const res = await axios.get(`${BASE_URL}/coronavirus`)
  const body = await res.data;
  const $ = cheerio.load(body);
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
  //const res = await cloudscraper(`${BASE_URL}/coronavirus/country/${country}` , {
  //  method: 'GET',
  //});
  const res = await axios.get(`${BASE_URL}/coronavirus/country/${country}`)
  const body = await res.data;
  const $ = cheerio.load(body);
  
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
  //const res = await cloudscraper(`${BASE_URL}/coronavirus/coronavirus-death-toll/` , {
  //  method: 'GET',
  //});
  const res = await axios.get(`${BASE_URL}/coronavirus/coronavirus-death-toll/`)
  const body = await res.data;
  const $ = cheerio.load(body);
  const html = $.html();
  const table = tabletojson.convert(html);
  const data = table[0];

  //const tempCases = $('div#maincounter-wrap').eq(0).text().match(/\d+/g);
  //const total_deaths = parseInt(`${tempCases[0]}${tempCases[1]}` , 10); 
  //const table = tabletojson.convert(html);

  //data.push({
  //  //deaths: total_deaths,
  //  table: table[0]
  //});

  data.forEach((obj) => renameKey(obj , 'Total\nDeaths' , 'TotalDeaths'));
  data.forEach((obj) => renameKey(obj , 'Change\nin Total' , 'ChangeInTotal'));
  data.forEach((obj) => renameKey(obj , 'Change in \nTotal (%)' , 'ChangeTotalInPercent'));

  return Promise.all(data);
};

const situationReports = async() =>{
  //const res = await cloudscraper(`${WHO_BASE_URL}/emergencies/diseases/novel-coronavirus-2019/situation-reports` , {
  //  method: 'GET',
  //});
  const res = await axios.get(`${WHO_BASE_URL}/emergencies/diseases/novel-coronavirus-2019/situation-reports`);
  const body = await res.data;
  const $ = cheerio.load(body);
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
  //const res = await cloudscraper(`${CDC_GOV_BASE_URL}/coronavirus/2019-ncov/cases-updates/from-the-white-house-task-force.html` , {
  //  method: 'GET',
  //});
  const res = await axios.get(`${CDC_GOV_BASE_URL}/coronavirus/2019-ncov/cases-updates/from-the-white-house-task-force.html`);
  const body = await res.data; 
  const $ = cheerio.load(body);
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
  //const res = await cloudscraper(`${COVID19_SPREADSHEETS_BASE_URL}` , {method: 'GET'})
  const res = await axios.get(`${COVID19_SPREADSHEETS_BASE_URL}`);
  const body = await res.data;
  const $ = cheerio.load(body);
  const html = $.html();
  const table = tabletojson.convert(html);  

  return Promise.all(table)
};

const testsInUS  = async() =>{
  //const res = await cloudscraper(`${CDC_GOV_BASE_URL}/coronavirus/2019-ncov/cases-updates/testing-in-us.html` , {method: 'GET'})
  const res = await axios.get(`${CDC_GOV_BASE_URL}/coronavirus/2019-ncov/cases-updates/testing-in-us.html`);
  const body = await res.data;
  const $ = cheerio.load(body);
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
  //const res = await cloudscraper(`${BASE_URL}/coronavirus/coronavirus-age-sex-demographics/` , {method: 'GET'})
  const res = await axios.get(`${BASE_URL}/coronavirus/coronavirus-age-sex-demographics/`)
  const body = res.data;
  const $ = cheerio.load(body);
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
  //const res = await cloudscraper(`${BASE_URL}/coronavirus/coronavirus-age-sex-demographics/` , {method: 'GET'})
  const res = await axios.get(`${BASE_URL}/coronavirus/coronavirus-age-sex-demographics/`)
  const body = await res.data;
  const $ = cheerio.load(body);
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
  //const res = await cloudscraper(`${BASE_URL}/coronavirus/coronavirus-age-sex-demographics/` , {method: 'GET'})
  const res = await axios.get(`${BASE_URL}/coronavirus/coronavirus-age-sex-demographics/`);
  const body = await res.data;
  const $ = cheerio.load(body);
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
  //const res = await cloudscraper(`${BASE_URL}/coronavirus/countries-where-coronavirus-has-spread/` , {method: 'GET'})
  const res = await axios.get(`${BASE_URL}/coronavirus/countries-where-coronavirus-has-spread/`);
  const body = await res.data;
  const $ = cheerio.load(body);
  const html = $.html();
  const table = tabletojson.convert(html);  
  const data = table[0];

  return Promise.all(data);
};

const travelHealthNotices = async() =>{
  //const res = await cloudscraper(`${TEMP_CDC_GOV_BASE_URL}/travel/notices` , {method: 'GET'})
  const res = await axios.get(`${TEMP_CDC_GOV_BASE_URL}/travel/notices`);
  const body = await res.data;
  const $ = cheerio.load(body);
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
  //const res = await cloudscraper(`${TRAVEL_ADVISORIES_BASE_URL}/content/travel/en/traveladvisories/traveladvisories.html` , {method: 'GET'})
  const res = await axios.get(`${TRAVEL_ADVISORIES_BASE_URL}/content/travel/en/traveladvisories/traveladvisories.html`);
  const body = await res.data;
  const $ = cheerio.load(body);
  const html = $.html();
  const table = tabletojson.convert(html);  
  const data = table;
  data.map(doc =>{
    doc.forEach(obj => renameKey(obj , 'Date Updated' , 'DateUpdated') )
  });

  return Promise.all(data)
};

const allCasesInAmerica = async() =>{
  //const res = await cloudscraper(`${PAHO_ORG_BASE_URL}/es/temas/coronavirus/enfermedad-por-coronavirus-covid-19` , {method: 'GET'})
  const res = await axios.get(`${PAHO_ORG_BASE_URL}/es/temas/coronavirus/enfermedad-por-coronavirus-covid-19`);
  const body = await res.data;
  const $ = cheerio.load(body);
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
  //const res = await cloudscraper(`${ECDC_BASE_URL}cases-2019-ncov-eueea` , {method: 'GET'})
  const res = await axios.get(`${ECDC_BASE_URL}cases-2019-ncov-eueea`);
  const body = await res.data;
  const $ = cheerio.load(body);
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
  //const res = await cloudscraper(`${SALUD_GOV_BASE_URL}/Pages/coronavirus.aspx`);
  const res = await axios.get(`${SALUD_GOV_BASE_URL}/Pages/coronavirus.aspx`);
  const body = await res.data;
  const $ = cheerio.load(body);
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
  //const res = await cloudscraper(`${BASE_URL}/coronavirus/country/us` , {method: 'GET'});
  const res = await axios.get(`${BASE_URL}/coronavirus/country/us` , {method: 'GET'})
  const body = await res.data;
  const $ = cheerio.load(body);
  const html = $.html();
  const table = tabletojson.convert(html);
  table[0].map(doc =>  delete doc.Source);
  table[0].forEach((obj) => renameKey(obj , "Tot Cases/1M pop" , "Tot_Cases_1M_Pop"));
  table[0].forEach((obj) => renameKey(obj , "Deaths/1M pop" , "Deaths_1M_Pop"))

  table[0].forEach((obj) => renameKey(obj , "Tests/\n1M pop" , "Tests_1M_Pop"))
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
    //renameKey(obj , 'DH-OBJECTID' , 'DH_OBJECTID'),
    //renameKey(obj , 'HCRIS-Provider Number' , 'HCRISProviderNumber'),
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
    //const res1 = await cloudscraper('https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_daily_reports',{
    //  method: 'GET',
    //});
    const res1 = await axios.get('https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_daily_reports');
    const body = await res1.data;

    const $ = cheerio.load(body);
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
    //const res1 = await cloudscraper('https://github.com/ChrisMichaelPerezSantiago/covid19/tree/master/EstatidistcasPuertoRico/resultados/datos_en_general',{
    //  method: 'GET',
    //});
    const res1 = await axios.get('https://github.com/ChrisMichaelPerezSantiago/covid19/tree/master/EstatidistcasPuertoRico/resultados/datos_en_general');
    const body = await res1.data;
    const $ = cheerio.load(body);
    const html = $.html();
    const gitHubTable = tabletojson.convert(html);
    const r = new RegExp(/.+(\.csv)$/);
    //const N = gitHubTable[0].filter(doc => {
    //  return r.test(doc.Name)
    //}).length;
    const gitHubTableFilterCSV = gitHubTable[0].filter(doc => {
      return r.test(doc.Name)
    }) 

    const dates = gitHubTableFilterCSV.map(date => {
      return{
        originalDate: date.Name,
        formatedDate: new Date(date.Name.replace('.csv' , '').trim())
      }
    });
    
    const datesListSorted = dates.sort((a, b) => b.formatedDate - a.formatedDate);
    const date = datesListSorted[0].originalDate;

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
    });

    const data = [{table: table}]; 

    return Promise.all(data);
    
  }catch(err){
    console.log(err)
  }
};
 

const prDataByRegion = async() =>{
  try{
    //const res1 = await cloudscraper('https://github.com/ChrisMichaelPerezSantiago/covid19/tree/master/EstatidistcasPuertoRico/resultados/datos_por_region',{
    //  method: 'GET',
    //});
    const res1 = await axios.get('https://github.com/ChrisMichaelPerezSantiago/covid19/tree/master/EstatidistcasPuertoRico/resultados/datos_por_region');
    const body = await res1.data;
    const $ = cheerio.load(body);
    const html = $.html();
    const gitHubTable = tabletojson.convert(html);
    const r = new RegExp(/.+(\.csv)$/);
    //const N = gitHubTable[0].filter(doc => {
    //  return r.test(doc.Name)
    //}).length;
   
    const gitHubTableFilterCSV = gitHubTable[0].filter(doc => {
      return r.test(doc.Name)
    }) 

    const dates = gitHubTableFilterCSV.map(date => {
      return{
        originalDate: date.Name,
        formatedDate: new Date(date.Name.replace('.csv' , '').trim())
      }
    });
    
    const datesListSorted = dates.sort((a, b) => b.formatedDate - a.formatedDate);
    const date = datesListSorted[0].originalDate;
    
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
    //const res1 = await cloudscraper('https://github.com/ChrisMichaelPerezSantiago/covid19/tree/master/EstatidistcasPuertoRico/resultados/datos_por_sexo',{
    //  method: 'GET',
    //});
    const res1 = await axios.get('https://github.com/ChrisMichaelPerezSantiago/covid19/tree/master/EstatidistcasPuertoRico/resultados/datos_por_sexo');
    const body = await res1.data;
    const $ = cheerio.load(body);
    const html = $.html();
    const gitHubTable = tabletojson.convert(html);
    const r = new RegExp(/.+(\.csv)$/);
    //const N = gitHubTable[0].filter(doc => {
    //  return r.test(doc.Name)
    //}).length;
    
    const gitHubTableFilterCSV = gitHubTable[0].filter(doc => {
      return r.test(doc.Name)
    }) 

    const dates = gitHubTableFilterCSV.map(date => {
      return{
        originalDate: date.Name,
        formatedDate: new Date(date.Name.replace('.csv' , '').trim())
      }
    });
    
    const datesListSorted = dates.sort((a, b) => b.formatedDate - a.formatedDate);
    const date = datesListSorted[0].originalDate;
    
    
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

const prDataByTowns = async() =>{
  const url = 'https://services5.arcgis.com/klquQoHA0q9zjblu/arcgis/rest/services/Municipios_Joined/FeatureServer/0/query?f=json&where=Total%3C%3E0&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Total%20desc&outSR=102100&resultOffset=0&resultRecordCount=80&cacheHint=true'
  const body = await requests(url);
  const data = body.features;
  
  data.forEach((doc) =>{
    delete doc.attributes.abrev
    delete doc.attributes.Shape__Area
    delete doc.attributes.Shape__Length
    delete doc.attributes.date
    delete doc.attributes.Shape__Area_2
    delete doc.attributes.Shape__Length_2
    delete doc.attributes.IDMuni
    delete doc.attributes.poisitvosCOVID
    delete doc.attributes.ObjectId
  });

  data.forEach((obj) => {
    renameKey(obj.attributes , 'municipio' , 'town')
    renameKey(obj.attributes , 'RegionSalud' , 'health_region')
    renameKey(obj.attributes , 'Total' , 'total_cases')

  })

  const table = [{table: data}];

  return Promise.all(table);
};

const prExtraData = async() =>{
  const url = 'https://services5.arcgis.com/klquQoHA0q9zjblu/arcgis/rest/services/Datos_Totales/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&resultOffset=0&resultRecordCount=50&cacheHint=true';
  const body = await requests(url);
  const data = body.features;
  
  data.forEach((doc) =>{
    delete doc.attributes.OBJECTID
    delete doc.attributes.IDNumber
  });

  const table = [{table: data}];

  return Promise.all(table);
};

const indiaCasesByStates = async() =>{
  const res = await axios.get('https://api.covid19india.org/data.json');
  const data = await res.data.statewise;
  
  const table = [{table: data}];
  
  return Promise.all(table);
}

const spainCasesByCommunities = async() =>{
  const res = await axios.get('https://covid19tracking.narrativa.com/');
  const body = await res.data;
  const $ = cheerio.load(body);
  const html = $.html();
  const data = tabletojson.convert(html);
  const dataTable = data[1];
  if(dataTable){
    dataTable.forEach((obj) =>{
      renameKey(obj , '0', 'Community');
      renameKey(obj , 'Total Nuevos Casos' , 'Total_Nuevos_Casos');
      renameKey(obj , 'Total Casos (cambio % 24h)' , 'Total_Casos_cambio_porciento_24h');
      renameKey(obj , 'Total Fallecidos (24h)' , 'Total_Fallecidos_24h');
      renameKey(obj , 'Total Recuperados (24h)' , 'Total_Recuperados_24h');

    })
  }

  const table = [{table: dataTable}];

  return Promise.all(table)
};

const australiaCasesByStates = async() =>{
  const res = await axios.get('https://e.infogram.com/_/H2SRT4P4dG96INW93w6g?parent_url=https%3A%2F%2Fwww-covid19data-com-au.filesusr.com%2Fhtml%2F2aed08_8d923ae1ec1a00e86fe031a8d6ad2d66.html&src=embed');
  const data = await res.data;
  let match = data.match(/window.infographicData=(\{.*?\});/)
  let parsed = JSON.parse(match[1]);
  let json = parsed.elements.map(doc => doc.data);
  const doc = [];

  const regex = /\d+/g;

  Array.from({length: json[1][0].length} , (v , k) =>{
    const state = json[1][0][k][0]; 
    const cases = json[1][0][k][1];
    const deaths = json[1][0][k][6].match(regex)[0];
    doc.push({
      state,
      cases,
      deaths
    });
  });

  const table = [{table: doc}];
 
  return Promise.all(table);
};

const canadaCasesByProvincesAndHealthRegion = async() =>{
  const res = await axios.get('https://virihealth.com/');
  const data = await res.data;
  const $ = cheerio.load(data);
  const html = $.html();
  const docTable = tabletojson.convert(html);
  const provinceTable = docTable[1];
  const healthRegionTable = docTable[7];
  
  provinceTable.forEach((obj) => renameKey(obj , 'Cases/1M' , 'Cases_1M'));
  healthRegionTable.forEach((obj) => renameKey(obj , 'Health Region' , 'HealthRegion'));

  const table = [{
    tables:{
      province_table: provinceTable,
      health_region_table: healthRegionTable
    }
  }];
  
  return Promise.all(table);
};

const japanCasesByPrefecture = async() =>{
  const res = await axios.get('https://www.nippon.com/en/japan-data/h00657/coronavirus-cases-in-japan-by-prefecture.html');
  const body = await res.data;
  const $ = cheerio.load(body);
  const html = $.html();
  const dataTable = tabletojson.convert(html);
  const doc = dataTable[1]; 

  const table = [{table: doc}];
  
  return Promise.all(table);
}

const newZealandCasesByDistrictHealthBoard = async() =>{
  const url = 'https://services2.arcgis.com/9V7Qc4NIcvZBm0io/arcgis/rest/services/COVID_19_Cases_by_DHB_(View)/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=DHB%20asc&outSR=102100&resultOffset=0&resultRecordCount=25&cacheHint=true';
  const res = await axios.get(url);
  const data = res.data.features;

  data.forEach((doc) =>{
    delete doc.attributes.DHB12
    delete doc.attributes.Shape__Area
    delete doc.attributes.Shape__Length
    delete doc.attributes.DHBCode
    delete doc.attributes.ObjectId
  });
 
  const table = [{table: data}];

  return Promise.all(table);
};

const unitedStateCasesByStates = async() =>{
  const url = 'https://covidtracking.com/api/v1/states/current.json';
  const res = await axios.get(url);
  const data = res.data;

  data.forEach((doc) =>{
    delete doc.notes
    delete doc.hash
  });

  data.forEach((obj) =>{
    if(obj.grade){
      renameKey(obj , 'grade' , 'dataGrade')
    }
  });

  const table = [{table: data}];

  return Promise.all(table);
};

const germanyCasesByRegion = async() =>{
  const res = await axios.get('https://api.apify.com/v2/key-value-stores/OHrZyNo9BzT6xKMRD/records/LATEST?disableRedirect=true');
  const data = await res.data;
  const doc =  data.infectedByRegion;
  
  const table = [{table: doc}]

  return Promise.all(table);
};

const swedenCasesByRegion = async() =>{
  const res = await axios.get('https://api.apify.com/v2/key-value-stores/8mRFdwyukavRNCr42/records/LATEST?disableRedirect=true');
  const data = await res.data;
  const doc =  data.infectedByRegion;
  
  const table = [{table: doc}]

  return Promise.all(table);
};

const slovakiaCasesByDistrict = async() =>{
  const res = await axios.get('https://services.arcgis.com/s2Iyql6ZO52bpobk/arcgis/rest/services/2020_COVID_OKRESY_POSLEDNY_DEN_PUBLIC_VIEW/FeatureServer/0/query?f=json&where=celkom_pozitivni%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=celkom_pozitivni%20desc&outSR=102100&resultOffset=0&resultRecordCount=50&resultType=standard&cacheHint=true');
  const data =  res.data.features;

  data.forEach((doc) =>{
    delete doc.attributes.DATUM
    delete doc.attributes.ID
    delete doc.attributes.AREA
    delete doc.attributes.x
    delete doc.attributes.y
    delete doc.attributes.ObjectId
  });
 
  const table = [{table: data}];

  return Promise.all(table);
};

const portugalCasesByRegion = async() =>{
  const res = await axios.get('https://api.apify.com/v2/key-value-stores/BXGEYTTUQzYBboEQK/records/LATEST?disableRedirect=true');
  const data = res.data.infectedByRegion;

  data.forEach((obj) => renameKey(obj , 'value' , 'cases'));
  
  const table = [{table: data}];

  return Promise.all(table);
};  

const polandCasesByRegion = async() =>{
  const res = await axios.get('https://api.apify.com/v2/key-value-stores/3Po6TV7wTht4vIEid/records/LATEST?disableRedirect=true');
  const data = res.data.infectedByRegion;
  
  const table = [{table: data}];

  return Promise.all(table);
};

const palestineCasesByRegion = async() =>{
  const res = await axios.get('https://api.apify.com/v2/key-value-stores/SbribCOVf2wgR868y/records/LATEST?disableRedirect=true');
  const data = res.data.infectedByRegion;

  data.forEach((obj) => renameKey(obj , 'value' , 'cases'));

  const table = [{table: data}];

  return Promise.all(table);
};

const norwayCasesByRegion = async() =>{
  const res = await axios.get('https://api.apify.com/v2/key-value-stores/3qlmMu1XN2ZLoVIQt/records/LATEST?disableRedirect=true');
  const data = res.data.infectedByRegion;

  const table = [{table: data}];

  return Promise.all(table);
};

const brazilCasesByRegion = async() =>{
  const res = await axios.get('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true');
  const data = res.data.infectedByRegion;

  data.forEach((obj) => renameKey(obj , 'count' , 'cases'));

  const table = [{table: data}];

  return Promise.all(table);
};

const algeriaCasesByRegion = async() =>{
  const res = await axios.get('https://api.apify.com/v2/key-value-stores/pp4Wo2slUJ78ZnaAi/records/LATEST?disableRedirect=true');
  const data = res.data.infectedByRegion;

  data.forEach((obj) => delete obj.newly);
  data.forEach((obj) => renameKey(obj , 'value' , 'cases'));

  const table = [{table: data}];

  return Promise.all(table);
};

const civicFreedomTracker = async() =>{
  const res = await axios.get('https://www.icnl.org/covid19tracker/');
  const body = await res.data;
  const $ = cheerio.load(body);
  
  const promises = [];

  $('div#entries div.entry').each((index, element) =>{
    const $element = $(element);
    const country = $element.find('div.entrypretitle').text().trim();
    const title = $element.find('h3').text().trim();
    const description = $element.find('p').text().trim();
    let type = $element.find('h6 span.regulation').text().trim() || 
               $element.find('h6 span.order').text().trim()      ||
               $element.find('h6 span.law').text().trim();
    
    const date = $element.find('h6 span.date').text().trim();
    const issue = $element.find('h6 span.issue').text().trim();

    promises.push({country , title , description , type , date, issue});
  });

  const table = [{table: promises}];

  return Promise.all(table);
};

//const reportsToCSV = () =>{
//  try{
//    setTimeout(async() => {
//       reports()
//        .then(res =>{
//          const table = res[0].table[0];
//          const header = Object.keys(res[0].table[0][0]);
//          const title = 'Confirmed Cases and Deaths by Country, Territory, or Conveyance';
//          exportCSVFile(table, header , title)       
//        })
//    }, 100);
//  }catch(err){
//    console.log(err)
//  }
//}

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
  prDataBySex,
  prDataByTowns,
  prExtraData,
  indiaCasesByStates,
  spainCasesByCommunities,
  australiaCasesByStates,
  canadaCasesByProvincesAndHealthRegion,
  japanCasesByPrefecture,
  newZealandCasesByDistrictHealthBoard,
  unitedStateCasesByStates,
  germanyCasesByRegion,
  swedenCasesByRegion,
  slovakiaCasesByDistrict,
  portugalCasesByRegion,
  polandCasesByRegion,
  palestineCasesByRegion,
  norwayCasesByRegion,
  brazilCasesByRegion,
  algeriaCasesByRegion,
  civicFreedomTracker
};

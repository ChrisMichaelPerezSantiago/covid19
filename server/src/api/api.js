const cloudscraper = require('cloudscraper');
const cheerio = require('cheerio');
const tabletojson = require('tabletojson').Tabletojson;
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
  SALUD_GOV_BASE_URL
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
    doc.forEach((obj) => renameKey(obj , 'Country,Other' , 'Country'));
    doc.forEach((obj) => renameKey(obj , 'Serious,Critical' , 'Serious_Critical'));
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
    
  return Promise.all(data);
};

const fatalityRateByAge  = async() =>{
  const res = await cloudscraper(`${BASE_URL}/coronavirus/coronavirus-age-sex-demographics/` , {method: 'GET'})
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  const data = table[0];

  return Promise.all(data)
};

const fatalityRateBySex  = async() =>{
  const res = await cloudscraper(`${BASE_URL}/coronavirus/coronavirus-age-sex-demographics/` , {method: 'GET'})
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  const data = table[1];

  return Promise.all(data);
};

const fatalityRateByComorbidities  = async() =>{
  const res = await cloudscraper(`${BASE_URL}/coronavirus/coronavirus-age-sex-demographics/` , {method: 'GET'})
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  const data = table[2];

  return Promise.all(data);
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
      renameKey(obj , 'Sum of Cases' , 'Cases');
      renameKey(obj , 'Sum of Deaths' , 'Deaths');
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
  caseStatusUndeEvalutationInPR
};

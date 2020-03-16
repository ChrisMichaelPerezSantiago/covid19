const cloudscraper = require('cloudscraper');
const cheerio = require('cheerio');
const tabletojson = require('tabletojson').Tabletojson;
const { BASE_URL , WHO_BASE_URL } = require('./url/index.js');


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

module.exports = {
  reports,
  reportsByCountries,
  deaths,
  situationReports
};

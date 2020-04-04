const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect , assert } = chai;

const URL = 'https://covid19-server.chrismichael.now.sh/api/v1';

chai.use(chaiHttp)

describe('COVID19 API' , () =>{
  it('GET METHOD /api/v1/AllReports' , (ok) =>{
    chai
      .request(URL)
      .get('/AllReports')
      .end((err , res) =>{      
        expect(res.status).to.be.equal(200);
        expect(res.body.reports).to.be.an('array');
        
        const table = res.body.reports[0].table;
        const tableKeys = [
          "TotalCases"       , "NewCases",
          "TotalDeaths"      , "NewDeaths",
          "TotalRecovered"   , "ActiveCases",
          "Deaths_1M_pop"    , "Country",
          "Serious_Critical" , "Tests_1M_Pop",
          "TotCases_1M_Pop"  , "TotalTests"
        ]

        Array.from({length: table.length} , (v , i) =>{
          Array.from({length: table[i].length} , (v , j) =>{
            expect(table[i][j]).to.have.keys(tableKeys)
          });
        });
        ok();
      })
  }).timeout(10000);

  it('GET METHOD /api/v1/Deaths' , (ok) =>{
    chai
      .request(URL)
      .get('/Deaths')
      .end((err , res) =>{      
        expect(res.status).to.be.equal(200);
        expect(res.body.deaths).to.be.an('Object');

        const keys = [
          "deaths" , "table"
        ]
        const tableKeys = [
          "Date" ,          "TotalDeaths",
          "ChangeInTotal" , "ChangeTotalInPercent"
        ]

        expect(res.body.deaths).to.have.keys(keys);
        expect(res.body.deaths.table[0]).to.have.keys(tableKeys);
        ok();
      })
  }).timeout(10000);

  
  it('GET METHOD /api/v1/JohnsHopkinsDataDailyReport' , (ok) =>{
    chai
      .request(URL)
      .get('/JohnsHopkinsDataDailyReport')
      .end((err , res) =>{      
        expect(res.status).to.be.equal(200);
        expect(res.body.data).to.be.an('object');

        const tableKeys = [
          "Province_State" ,  "Country_Region",
          "Last_Update"    ,  "Lat",
          "Long_"          ,  "Confirmed",
          "Deaths"         ,  "Recovered",
          "Active"         ,  "Combined_Key"
        ]

        expect(res.body.data.table[0]).to.have.keys(tableKeys);
        ok();
      })
  }).timeout(10000);
})
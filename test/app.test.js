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
          "Serious_Critical" , "TotCases_1M_Pop"
        ]

        Array.from({length: table.length} , (v , i) =>{
          Array.from({length: table[i].length} , (v , j) =>{
            expect(table[i][j]).to.have.keys(tableKeys)
          });
        });
        ok();
      })
  }).timeout(10000)
})
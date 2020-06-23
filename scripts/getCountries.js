const request = require('request')
let Country = require('../model/country.model')

exports.makeRequest =()=>{
    request('https://restcountries.eu/rest/v2/all', (err, responce, body)=>{
        if(!err && responce.statusCode == 200 ){
            let myResp = JSON.parse(body);
          //  console.log(myResp[0].languages[0].iso639_1, myResp.length);
            for(let i=0; i< myResp.length; i++){
               // console.log('resp', myResp[i].languages[0].iso639_1)
                let countryData = {
                    "name": myResp[i].name,
                    "nameAlpha2Code":myResp[i]. alpha2Code,
                    "nameAlpha3Code":myResp[i]. alpha3Code,
                    "phoneCode": myResp[i]. callingCodes[0],
                    "language": myResp[i].languages[0].name,
                    "currencyCode": myResp[i].currencies[0].code,
                    "lnIso639_1": myResp[i].languages[0].iso639_1,
                    "lgIso639_2": myResp[i].languages[0].iso639_2,
                    "flag": myResp[i].flag,
                }
                let newCountry = new Country(countryData)
                newCountry.save(function(err, resp){
                    if(err) throw err;
                    // console.log('player saved')
                })

            }

            console.log("Added ", myResp.length, " contries")


        }
    })
}
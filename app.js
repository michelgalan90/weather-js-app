const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

let city = process.argv[2];

if(city){
    geocode(city, (error, data) => {
    if(error !== undefined){
      return console.log(error);
    }else {console.log('Data', data)};
  
      
    forecast(data, (error, data) => {
      if(error !== undefined){console.log('Error', error);}
      else {console.log('Data:', data)};
    })
  });


}else console.log('Enter a valid city');


// forecast(-75.7088, 44.1545, (error, data) => {
//   console.log('Error', error)
//   console.log('Data', data)
// });
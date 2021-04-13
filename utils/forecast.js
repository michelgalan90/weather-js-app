const request = require('request');

const forecast = ({location, latitud, longitud}, callback) => {

  const url = `http://api.weatherstack.com/current?access_key=0a28013946bacc0cbfd4dfb0f286043d&query=${latitud},${longitud}`;


  request({ url , json: true}, (error, {body}) => {
    if(error){
      callback(`Uable to connect to weather service!`, undefined)
    }else if(body.error){
      callback('Unable to find location', undefined);
    }else {
      callback(undefined, `${location}, ${body.current.weather_descriptions[0]}: It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degress out.`);
    }
  });
}

module.exports = forecast;
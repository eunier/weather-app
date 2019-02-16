const request = require('request');
const dotenv = require('dotenv');

dotenv.config({
    path: './.env'
});





var getWeather = (lat, long, callback) => {
    var darkskyApiKey = process.env.DARKSKY_API_KEY;
    request({
        url: `https://api.darksky.net/forecast/${darkskyApiKey}/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        // can't connect
        if (error) {
            callback('Unable to connect to Forecast.io server.');
        // bad api key of latitude or longitude
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        // success
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        };
    });
};

module.exports.getWeather = getWeather;
const request = require('request');
const dotenv = require('dotenv');

// setting up the dotenv config
dotenv.config({
    path: './.env'
});

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    var geocodeApiKey = process.env.GOOGLE_API_KEY;
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' +
    `${encodedAddress}&key=${geocodeApiKey}`
    console.log(url);

    request({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        `${encodedAddress}&key=${geocodeApiKey}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google server.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address.');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;
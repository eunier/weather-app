const request = require('request');
const dotenv = require('dotenv');

// setting up the dotenv config
dotenv.config({
    path: './.env'
});

var geocodeAdress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        var geocodeApiKey = process.env.GOOGLE_API_KEY;

        request({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' +
            `${encodedAddress}&key=${geocodeApiKey}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google server.');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address.');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAdress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});
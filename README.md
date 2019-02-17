# weather-app
Weather node app that use google geolocation api and dark sky api.

![](https://github.com/eunier14/weather-app/blob/readmeResources/Feb-17-2019%2012-36-25.gif)

## Requirements
* Download [npm](https://www.npmjs.com/).
* Ruh: `npm install` from project root.
* Get an [Google API key](https://developers.google.com/maps/documentation/geolocation/get-api-key).
* Get an [DarkSky API key](https://darksky.net/dev).
* Add `.env` file to root of the project and edit as follow:

```javascript
GOOGLE_API_KEY = api_key_here
DARKSKY_API_KEY = api_key_here
```
## Usage
Run from project root:
```javascript
node app-promise.js -a address_here
```
or
```javascript
node app-promise.js -address address_here
```

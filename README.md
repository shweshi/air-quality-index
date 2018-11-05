# AQI

[![Build Status](https://scrutinizer-ci.com/g/shweshi/aqi/badges/build.png?b=master)](https://scrutinizer-ci.com/g/shweshi/aqi/build-status/master)
[![StyleCI](https://github.styleci.io/repos/156290440/shield?branch=master)]
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/shweshi/aqi/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/shweshi/aqi/?branch=master)

AQI is a terminal based application that provide air quality index information for the given city.
  - Get the air quality index for your city
  - Works on terminal

### How to use
```sh
$ curl https://waqi.herokuapp.com/<city name>
```

### Tech
AQI uses a number of open source projects to work properly:
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]

### Installation
AQI requires [Node.js](https://nodejs.org/) v8+ to run.
Install the dependencies and devDependencies and start the server.

```sh
$ git clone "https://github.com/shweshi/aqi"
$ npm install
$ npm run serve
```
### Development
Want to contribute? Great! Feel free to open a PR.

### Todos
 - Design improvements
 - Locale support

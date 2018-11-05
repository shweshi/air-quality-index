var request = require('request');
var config = require('../config/config');

module.exports = {
  get: get
};

function get(path) {
  var options = {
    uri: 'https://api.waqi.info' + path + '/?token=' + config.aqi.token
  };
  return new Promise(function(resolve, reject) {
    request.get(options, function(error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(body));
      }
    })
  })

}
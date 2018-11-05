const style = require('ansi-styles');
const chalk = require('chalk');

module.exports = {
  transformData: transformData,
  transformError: transformError
};

function transformData(data) {
  var spectrum = [{
      aqi: 0,
      background: "#cccccc",
      foreground: "#ffffff",
      apl: "Good"
    },
    {
      aqi: 50,
      background: "#009966",
      foreground: "#ffffff",
      apl: "Good"
    },
    {
      aqi: 100,
      background: "#ffde33",
      foreground: "#000000",
      apl: "Moderate"
    },
    {
      aqi: 150,
      background: "#ff9933",
      foreground: "#000000",
      apl: "Unhealthy for Sensitive Groups"
    },
    {
      aqi: 200,
      background: "#cc0033",
      foreground: "#ffffff",
      apl: "Unhealthy"
    },
    {
      aqi: 300,
      background: "#660099",
      foreground: "#ffffff",
      apl: "Very Unhealthy"
    },
    {
      aqi: 500,
      background: "#7e0023",
      foreground: "#ffffff",
      apl: "Hazardous"
    }
  ];

  var i = 0;
  for (i = 0; i < spectrum.length - 2; i++) {
    if (data.aqi == "-" || data.aqi <= spectrum[i].aqi) break;
  };

  return `
City Station: ${data.city.name}

Air Quality Index: ${style.bgColor.ansi16m.hex(spectrum[i].background)}${style.color.ansi16m.hex(spectrum[i].foreground)}${data.aqi}${style.color.close}${style.bgColor.close}

Air Pollution Level: ${style.bgColor.ansi16m.hex(spectrum[i].background)}${style.color.ansi16m.hex(spectrum[i].foreground)}${spectrum[i].apl}${style.color.close}${style.bgColor.close}

`;
}

function transformError(error) {
  return `
${style.color.red.open}Sorry, we couldn't find the station.${style.color.close}

`;
}
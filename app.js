const Weather = require('./WeatherApi');
const chalk = require('chalk');
// this used for get the third arg in the comand line.

var command = process.argv[2];

switch (command) {
    case 'current':
        Weather.getCurrentWeather(process.argv[3])
        break;
    case 'forecast':
        Weather.getForecastWeather(process.argv[3])
        break;

    default:
        console.log(chalk.yellow("wrong command !!! \n example 1: node app forecast cityName \n "+
        "example 2: node app current cityName") )
        break;
}
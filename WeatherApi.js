const fetch = require('node-fetch')
const chalk = require('chalk');
const API_KEY = 'f6060ef5e79589a6a5f8e6397f55abbc'
const command = ['current', 'forecast']


function getCurrentWeather(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=' + API_KEY+'&units=metric').
    then((res) => {
        return res.json()
    }).then((data) => {
        showCurrentWeather(data);
    }).catch((err) => {
        console.log(chalk.red("some thing is wrong please try again"))
    })
}

function getForecastWeather(cityName) {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&appid='+API_KEY+'&units=metric ').
    then((res) => {
        return res.json()
    }).then((data) => {
       // console.log(data)
        showForecastWeather(data);
    }).catch((err) => {
        console.log(chalk.red("some thing is wrong please try again"))
        console.log(err)
    })
}

function showCurrentWeather(data){
    console.log(chalk.red('current weather information of '+data.name)+':')
    console.log(chalk.yellow("maximum temperature is: ")+chalk.green(data.main.temp_max))
    console.log(chalk.yellow("minimum temperature is: ")+chalk.green(data.main.temp_min))
    console.log(chalk.yellow("current temperature is: ")+chalk.green(data.main.temp))
}

function  showForecastWeather(data){
    console.log('here')
    for (let index = 0; index < data.list.length; index+=7) {
        
        console.log(chalk.green('forecat weather for '+chalk.blue(data.city.name)+
        ' on '+chalk.blue(data.list[index].dt_txt)+' is:'));

        console.log(chalk.yellow("min: "+data.list[index].main.temp_min+
        " max: "+data.list[index].main.temp_max+
        " description is: "+data.list[index].weather[0].description));
    }

}
module.exports = {
    getCurrentWeather,
    getForecastWeather,
    command
}


const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/forecast?lat='+ lat + '&lon=' + long +'&cnt=3&APPID=9e9669bfcdd3b036706dae24d27a7216&units=metric'

    request({ url, json: true }, (error, {body}) => {
        if(error) {
           callback('Unable to connect to weather service!', undefined)
        } else if (body.message) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'The temperature is ' + body.list[0].main.temp + ' and the humidity is ' + body.list[0].main.humidity + ' outside.')
         }
    
    })
}

module.exports = forecast




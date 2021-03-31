const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicnNzdWJoYW04OCIsImEiOiJja2wyY3QwMjQwZDZ2MnFxbXA0aHhoNjM3In0.vnur9-ew3CETTjdVkrlfaQ&limit=1'
    request({ url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.lemgth === 0) {
            callback('Unable to find location. Try another search...', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })

}

module.exports = geocode
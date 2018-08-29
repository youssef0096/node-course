const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./weather');



const argv = yargs.options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Adress to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
    }
    weather.gettingWeather(results.latitude, results.langtitude, (errorMessage, results) => {
        if (!errorMessage) { console.log(JSON.stringify(results, undefined, 2)); } else {
            console.log(errorMessage);
        }
    });
});
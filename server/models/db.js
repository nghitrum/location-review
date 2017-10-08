// How to run MongoDB server
// "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath C:\Users\nguye\Documents\MongoDB\data

var mongoose = require('mongoose');
var gracefulShutdown;

var dbURI = 'mongodb://admin:admin@ds163494.mlab.com:63494/location-review';
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}

var promise = mongoose.connect(dbURI, {
    useMongoClient: true,
    /* other options */
});

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};
// For nodemon restarts
process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', function () {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0);
    });
})


require('./locations');

// app/routes.js

var piPins			= require('piPins');


// grab the model we just created
var Setting = require('./models/setting');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        app.get('/blink', piPins.blink);
        
        // authentication routes

        // sample api route
        app.get('/api/settings', function(req, res) {
            // use mongoose to get all settings in the database
            Setting.find(function(err, settings) {

                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(settings); // return all settings in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };
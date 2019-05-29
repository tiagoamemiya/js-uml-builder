const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');

module.exports = function(app) {
    let routes = [];

    router.all('/', function(req, res, next) {
        res.redirect('/projects');
        next();
    });

    routes = fs.readdirSync(path.resolve('app', 'routes'));
    routes.forEach(function (routeFile) {
        if (routeFile == 'index.js') {
            return;
        }

        require('./' + routeFile)(app);
    });

    app.use('/', router);
};